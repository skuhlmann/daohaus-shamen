// Based on https://github.com/HausDAO/MinionSummoner/blob/main/MinionFactory.sol

// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;
pragma abicoder v2;

interface IERC20 { // brief interface for moloch erc20 token txs
    function balanceOf(address who) external view returns (uint256);
    
    function transfer(address to, uint256 value) external returns (bool);

    function transferFrom(address from, address to, uint256 value) external returns (bool);
    
    function approve(address spender, uint256 amount) external returns (bool);
}

// TODO add IERC1155Receiver
interface IERC721Receiver {
    function onERC721Received(address operator, address from, uint256 tokenId, bytes calldata data) external returns (bytes4);
}

interface IMOLOCH { // brief interface for moloch dao v2


    function depositToken() external view returns (address);
    
    function tokenWhitelist(address token) external view returns (bool);

    function totalShares() external view returns (uint256);
    
    function getProposalFlags(uint256 proposalId) external view returns (bool[6] memory);

    function getUserTokenBalance(address user, address token) external view returns (uint256);
    
    function members(address user) external view returns (address, uint256, uint256, bool, uint256, uint256);
    
    function memberAddressByDelegateKey(address user) external view returns (address);

    function userTokenBalances(address user, address token) external view returns (uint256);
    
    function cancelProposal(uint256 proposalId) external;

    function submitProposal(
        address applicant,
        uint256 sharesRequested,
        uint256 lootRequested,
        uint256 tributeOffered,
        address tributeToken,
        uint256 paymentRequested,
        address paymentToken,
        string calldata details
    ) external returns (uint256);
    
    function withdrawBalance(address token, uint256 amount) external;

    struct Proposal {
        address applicant; // the applicant who wishes to become a member - this key will be used for withdrawals (doubles as guild kick target for gkick proposals)
        address proposer; // the account that submitted the proposal (can be non-member)
        address sponsor; // the member that sponsored the proposal (moving it into the queue)
        uint256 sharesRequested; // the # of shares the applicant is requesting
        uint256 lootRequested; // the amount of loot the applicant is requesting
        uint256 tributeOffered; // amount of tokens offered as tribute
        address tributeToken; // tribute token contract reference
        uint256 paymentRequested; // amount of tokens requested as payment
        address paymentToken; // payment token contract reference
        uint256 startingPeriod; // the period in which voting can start for this proposal
        uint256 yesVotes; // the total number of YES votes for this proposal
        uint256 noVotes; // the total number of NO votes for this proposal
        bool[6] flags; // [sponsored, processed, didPass, cancelled, whitelist, guildkick]
        string details; // proposal details - could be IPFS hash, plaintext, or JSON
        uint256 maxTotalSharesAndLootAtYesVote; // the maximum # of total shares encountered at a yes vote on this proposal
    }
    function proposals(uint256 proposalId) external returns (address, address, address, uint256, uint256, uint256, address, uint256, address, uint256, uint256, uint256);
}

contract NeapolitanMinion is IERC721Receiver {
    IMOLOCH public moloch;
    address public molochDepositToken;
    uint256 public minQuorum;
    bool private initialized; // internally tracks deployment under eip-1167 proxy pattern
    mapping(uint256 => Action) public actions; // proposalId => Action

    struct Action {
        bytes32 id;
        address proposer;
        bool executed;
        address token;
        uint256 amount;
    }

    event ProposeAction(bytes32 indexed id, uint256 indexed proposalId, uint256 index, address targets, uint256 values, bytes datas);
    event ExecuteAction(bytes32 indexed id, uint256 indexed proposalId, uint256 index, address targets, uint256 values, bytes datas, address executor);
    
    event DoWithdraw(address token, uint256 amount);
    event CrossWithdraw(address target, address token, uint256 amount);
    event PulledFunds(address moloch, uint256 amount);
    event ActionCanceled(uint256 proposalId);
    
     modifier memberOnly() {
        require(isMember(msg.sender), "Minion::not member");
        _;
    }

    function init(address _moloch, uint256 _minQuorum) external {
        require(!initialized, "initialized"); 
        moloch = IMOLOCH(_moloch);
        minQuorum = _minQuorum;
        molochDepositToken = moloch.depositToken();
        initialized = true; 
    }

    function onERC721Received (address, address, uint256, bytes calldata) external pure override returns(bytes4) {
        return bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));
    } 
    
    //  -- Withdraw Functions --

    function doWithdraw(address token, uint256 amount) public memberOnly {
        moloch.withdrawBalance(token, amount); // withdraw funds from parent moloch
        emit DoWithdraw(token, amount);
    }
    
    function crossWithdraw(address target, address token, uint256 amount, bool transfer) external memberOnly {
        // @Dev - Target needs to have a withdrawBalance functions
        IMOLOCH(target).withdrawBalance(token, amount); 
        
        // Transfers token into DAO. 
        if(transfer) {
            bool whitelisted = moloch.tokenWhitelist(token);
            require(whitelisted, "not a whitelisted token");
            require(IERC20(token).transfer(address(moloch), amount), "token transfer failed");
        }
        
        emit CrossWithdraw(target, token, amount);
    }
    
    //  -- Proposal Functions --
    
    function proposeAction(
        address[] calldata actionTos,
        uint256[] calldata actionValues,
        bytes[] calldata actionDatas,
        address withdrawToken,
        uint256 withdrawAmount,
        string calldata details
    ) external memberOnly returns (uint256) {

        require(actionTos.length == actionValues.length, "Minion: length mismatch");
        require(actionTos.length == actionDatas.length, "Minion: length mismatch");

        uint256 proposalId = moloch.submitProposal(
            address(this),
            0,
            0,
            0,
            molochDepositToken,
            withdrawAmount,
            withdrawToken,
            details
        );

        setAction(proposalId, actionTos, actionValues, actionDatas, withdrawToken, withdrawAmount );

        return proposalId;
    }

    function setAction(
        uint256 proposalId,
        address[] calldata actionTos,
        uint256[] calldata actionValues,
        bytes[] calldata actionDatas,
        address withdrawToken,
        uint256 withdrawAmount
        ) internal {
        bytes32 id = hashOperation(actionTos, actionValues, actionDatas);
        Action memory action = Action({
            id: id,
            proposer: msg.sender,
            executed: false,
            token: withdrawToken,
            amount: withdrawAmount
        });
        actions[proposalId] = action;
        for (uint256 i = 0; i < actionTos.length; ++i) {
            emit ProposeAction(id, proposalId, i, actionTos[i], actionValues[i], actionDatas[i]);
        }
        
    }

    function executeAction(
        uint256 proposalId,
        address[] calldata actionTos,
        uint256[] calldata actionValues,
        bytes[] calldata actionDatas) external returns (bool) {
        Action memory action = actions[proposalId];

        bool isPassed = hasQuorum(proposalId);
        require(isPassed, "Minion: proposal execution requirements not met");

        bytes32 id = hashOperation(actionTos, actionValues, actionDatas);

        if(action.amount > 0) {
            doWithdraw(action.token, moloch.getUserTokenBalance(address(this), action.token));
        }
        

        require(id == action.id, "Minion: not a valid operation");

        require(!action.executed, "action executed");
        
        // execute call
        actions[proposalId].executed = true;
        for (uint256 i = 0; i < actionTos.length; ++i) {
            require(address(this).balance >= actionValues[i], "insufficient native token");
            (bool success, ) = actionTos[i].call{value: actionValues[i]}(actionDatas[i]);
            require(success, "call failure");
            emit ExecuteAction(id, proposalId, i, actionTos[i], actionValues[i], actionDatas[i], msg.sender);
        }

        return true;
    }
    
    function cancelAction(
        uint256 _proposalId) external {
        Action memory action = actions[_proposalId];
        require(msg.sender == action.proposer, "not proposer");
        delete actions[_proposalId];
        emit ActionCanceled(_proposalId);
        moloch.cancelProposal(_proposalId);
    }
    
    //  -- Helper Functions --
    
    function hasQuorum(uint256 _proposalId) internal returns (bool) {
        // if met execution can proceed before proposal is processed
        uint256 totalShares = moloch.totalShares();
        bool[6] memory flags = moloch.getProposalFlags(_proposalId);

        (, , , , , , , , , , uint256 yesVotes, uint256 noVotes) = moloch.proposals(_proposalId);
        
        if (flags[2]) {
            return true;
        }

        if (minQuorum != 0) {
            uint256 quorum = yesVotes * 100 / totalShares;
            // if quorum is set it must be met and there can be no NO votes
            return quorum >= minQuorum && noVotes < 1;  
        }
        
        return false;
    }
    function isMember(address user) public view returns (bool) {
        // member only check should check if member or delegate
        
        address memberAddress = moloch.memberAddressByDelegateKey(user);
        (, uint shares,,,,) = moloch.members(memberAddress);
        return shares > 0;
    }

    function hashOperation(address[] calldata targets, uint256[] calldata values, bytes[] calldata datas) public pure virtual returns (bytes32 hash) {
        // add salt?
        return keccak256(abi.encode(targets, values, datas));
    }

    receive() external payable {}
    fallback() external payable {}
}

contract CloneFactory {
    function createClone(address payable target) internal returns (address payable result) { // eip-1167 proxy pattern adapted for payable minion
        bytes20 targetBytes = bytes20(address(target));
        assembly {
            let clone := mload(0x40)
            mstore(clone, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)
            mstore(add(clone, 0x14), targetBytes)
            mstore(add(clone, 0x28), 0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000)
            result := create(0, clone, 0x37)
        }
    }
}

contract NeapolitanMinionFactory is CloneFactory {
    address payable immutable public template; // fixed template for minion using eip-1167 proxy pattern
    address[] public minionList; 
    mapping (address => AMinion) public minions;
    
    event SummonMinion(address indexed minion, address indexed moloch, string details, string minionType, uint256 minQuorum);
    
    struct AMinion {
        address moloch;
        string details; 
    }
    
    
    constructor(address payable _template) {
        template = _template;
    }
    
    function summonMinion(address moloch, string memory details, uint256 minQuorum) external returns (address) {
        NeapolitanMinion minion = NeapolitanMinion(createClone(template));
        require(minQuorum > 0 && minQuorum <= 100, "minQuorum must be between 1-100");
        minion.init(moloch, minQuorum);
        string memory minionType = "Neapolitan minion";
        
        minions[address(minion)] = AMinion(moloch, details);
        minionList.push(address(minion));
        emit SummonMinion(address(minion), moloch, details, minionType, minQuorum);
        
        return(address(minion));
        
    }
}

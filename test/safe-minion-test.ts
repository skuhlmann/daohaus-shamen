import { ethers } from 'hardhat'
import { solidity } from 'ethereum-waffle'
import { Contract, ContractFactory, BigNumberish } from 'ethers'
import { use, expect } from 'chai'
import { AnyErc20 } from '../src/types/AnyErc20'
import { Moloch } from '../src/types/Moloch'
import { DaoConditionalHelper } from "../src/types/DaoConditionalHelper";
import { SafeMinion } from '../src/types/SafeMinion'
import { TestExecutor } from '../src/types/TestExecutor'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { doProposal, fastForwardBlocks } from './util'

use(solidity)

describe.only('Safe Minion Functionality', function () {
  let Moloch: ContractFactory
  let moloch: Moloch
  
  let molochAsAlice: Moloch
  
  let SafeMinion: ContractFactory
  let safeMinion: SafeMinion
  
  let GnosisSafe: ContractFactory
  let gnosisSafe: TestExecutor

  let DaoConditionalHelper: ContractFactory;
  let helper: DaoConditionalHelper;

  let AnyNft: ContractFactory

  let AnyERC20: ContractFactory
  let anyErc20: AnyErc20

  let signers: SignerWithAddress[]

  let deployer: SignerWithAddress
  let alice: SignerWithAddress
  let bob: SignerWithAddress

  let deployerAddress: string
  let aliceAddress: string
  let bobAddress: string

  let arbitarySignature: string
  let arbitrarySignatureHash: string
  let arbitraryMsgHash: string
  let magicValue: string

  let minQuorum: BigNumberish;

  this.beforeAll(async function () {
    Moloch = await ethers.getContractFactory('Moloch')
    DaoConditionalHelper = await ethers.getContractFactory("DaoConditionalHelper");
    SafeMinion = await ethers.getContractFactory('SafeMinion')
    AnyNft = await ethers.getContractFactory('AnyNFT')
    GnosisSafe = await ethers.getContractFactory('TestExecutor')
    AnyERC20 = await ethers.getContractFactory('AnyERC20')
    signers = await ethers.getSigners()
    deployer = signers[0]
    alice = signers[1]
    bob = signers[2]

    deployerAddress = deployer.address
    aliceAddress = alice.address
    bobAddress = bob.address
    arbitarySignature = await alice.signMessage('This can be anything')
    arbitrarySignatureHash = ethers.utils.solidityKeccak256(['bytes'],[arbitarySignature])
    arbitraryMsgHash = await ethers.utils.hashMessage('This does not have to be the same')
    magicValue = '0x1626ba7e'
  })

  describe('Helpers', function () {
    it('fast forwards blocks', async function () {
      const blockNumber = await ethers.provider.getBlockNumber()
      await fastForwardBlocks(5)
      expect(await ethers.provider.getBlockNumber()).to.equal(blockNumber + 5)

    })
  })
  describe('Minions', function () {
    this.beforeEach(async function () {
      // Deploy ERC20 contract
      anyErc20 = (await AnyERC20.deploy()) as AnyErc20
      

      // deploy Moloch and Minion
      moloch = (await Moloch.deploy()) as Moloch
      helper = (await DaoConditionalHelper.deploy()) as DaoConditionalHelper;
      molochAsAlice = await moloch.connect(alice)
      // 5 block periods, 5 period voting, 1 period grace, 0 proposal deposit, 3 dilution bound, 0 reward, 100 summoner shares, 50 alice shares
      await moloch.init([deployerAddress, aliceAddress], [anyErc20.address], 5, 5, 1, 0, 3, 0, [100, 50])

      // Mint ERC20 to moloch
      await anyErc20.mint(moloch.address, 10000)
      
      // collect tokens
      await moloch.collectTokens(anyErc20.address)

      
      gnosisSafe = (await GnosisSafe.deploy()) as TestExecutor

      await anyErc20.mint(gnosisSafe.address, 500);

      safeMinion = (await SafeMinion.deploy()) as SafeMinion
      minQuorum = 20;
      await safeMinion.init(moloch.address, gnosisSafe.address, minQuorum)

      await gnosisSafe.setModule(safeMinion.address)
      
    })
    
    it('Sets up the tests', async function () {
      expect(await moloch.totalGuildBankTokens()).to.equal(1)
      expect((await moloch.members(aliceAddress)).shares).to.equal(50)
      expect((await moloch.members(deployerAddress)).shares).to.equal(100)
    })
    describe("Safe withdraw from Moloch", function() {
      it("Enables a Minion to withdraw Moloch funds into a safe", async function() {
        expect(await anyErc20.balanceOf(aliceAddress)).to.equal(0)
        expect(await anyErc20.balanceOf(gnosisSafe.address)).to.equal(500)
        const action_1 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          10,
        ]);

        await safeMinion.proposeAction(
          [anyErc20.address],
          [0],
          [action_1],
          anyErc20.address,
          100,
          "test",
          false
        );

        await doProposal(true, 0, moloch)
        
        await safeMinion.doWithdraw(anyErc20.address, 100)
        expect(await anyErc20.balanceOf(gnosisSafe.address)).to.equal(600)
        expect(await anyErc20.balanceOf(aliceAddress)).to.equal(0)
        
        await safeMinion.executeAction(
          0,
          [anyErc20.address],
          [0],
          [action_1]
        )

        expect(await anyErc20.balanceOf(gnosisSafe.address)).to.equal(590)
        expect(await anyErc20.balanceOf(aliceAddress)).to.equal(10)
        
      })
    })
    describe("Multi-call", function () {
      it("Enables 2 actions to be associated with one proposal", async function () {
        const action_1 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          10,
        ]);
        const action_2 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          20,
        ]);

        await safeMinion.proposeAction(
          [anyErc20.address, anyErc20.address],
          [0, 0],
          [action_1, action_2],
          anyErc20.address,
          0,
          "test",
          false
        );

        await doProposal(true, 0, moloch)

        await safeMinion.executeAction(
          0,
          [anyErc20.address, anyErc20.address],
          [0, 0],
          [action_1, action_2]
        );

        expect(await anyErc20.balanceOf(aliceAddress)).to.equal(30);
        expect(await anyErc20.balanceOf(gnosisSafe.address)).to.equal(
          470
        );
      });

      it("Enables actions to be executed early when minQuorum is met", async function () {
        const action_1 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          10,
        ]);
        const action_2 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          20,
        ]);
        await safeMinion.proposeAction(
          [anyErc20.address, anyErc20.address],
          [0, 0],
          [action_1, action_2],
          anyErc20.address,
          10,
          "test",
          false
        );

        await fastForwardBlocks(1);
        await moloch.sponsorProposal(0);

        await fastForwardBlocks(5);
        await moloch.submitVote(0, 1);

        await fastForwardBlocks(5);

        // execute before proposal is processed

        await safeMinion.executeAction(
          0,
          [anyErc20.address, anyErc20.address],
          [0, 0],
          [action_1, action_2]
        );

        expect(await anyErc20.balanceOf(aliceAddress)).to.equal(30);
        expect(await anyErc20.balanceOf(gnosisSafe.address)).to.equal(
          470
        );
      });

      it("Fail actions when executed early and minQuorum is not met", async function () {
        const action_1 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          10,
        ]);
        const action_2 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          20,
        ]);

        await safeMinion.proposeAction(
          [anyErc20.address, anyErc20.address],
          [0, 0],
          [action_1, action_2],
          anyErc20.address,
          10,
          "test",
          false
        );

        await fastForwardBlocks(1);
        await moloch.sponsorProposal(0);

        await fastForwardBlocks(5);
        // do not vote on proposal

        // execute before proposal is processed

        expect(
          safeMinion.executeAction(
            0,
            [anyErc20.address, anyErc20.address],
            [0, 0],
            [action_1, action_2]
          )
        ).to.be.revertedWith("Minion::proposal execution requirements not met");
      });

      it("It withdraws tokens from treasury when part of the proposal", async function () {
        const action_1 = anyErc20.interface.encodeFunctionData("approve", [
          aliceAddress,
          10,
        ]);

        // withdraw 10 anytoken on execute
        await safeMinion.proposeAction(
          [anyErc20.address],
          [0],
          [action_1],
          anyErc20.address,
          10,
          "test",
          false
        );

        await fastForwardBlocks(1);
        await moloch.sponsorProposal(0);

        await fastForwardBlocks(5);
        await moloch.submitVote(0, 1);

        await fastForwardBlocks(31);

        await moloch.processProposal(0);
        expect(await anyErc20.balanceOf(gnosisSafe.address)).to.equal(
          500
        );
        await safeMinion.executeAction(
          0,
          [anyErc20.address],
          [0],
          [action_1]
        );
        expect(await anyErc20.balanceOf(gnosisSafe.address)).to.equal(
          510
        );
      });

      it("Fails if an executed action is different from a proposed action", async function () {
        const action_1 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          10,
        ]);
        const action_2 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          20,
        ]);

        const invalid_action = anyErc20.interface.encodeFunctionData(
          "transfer",
          [aliceAddress, 30]
        );

        await safeMinion.proposeAction(
          [anyErc20.address, anyErc20.address],
          [0, 0],
          [action_1, action_2],
          anyErc20.address,
          0,
          "test",
          false
        );

        await doProposal(true, 0, moloch)

        expect(
          safeMinion.executeAction(
            0,
            [anyErc20.address, anyErc20.address],
            [0, 0],
            [action_1, invalid_action]
          )
        ).to.be.revertedWith("Minion::not a valid operation");
      });

      it("Fails when first actions condition is not meet", async function () {
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        const action_1 = helper.interface.encodeFunctionData("isAfter", [
          Math.floor(tomorrow.getTime()  / 1000), // tomorrows data, remove ms
        ]);
        const action_2 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          20,
        ]);

        await safeMinion.proposeAction(
          [helper.address, anyErc20.address],
          [0, 0],
          [action_1, action_2],
          anyErc20.address,
          0,
          "test",
          false
        );

        await doProposal(true, 0, moloch)

        expect(
          safeMinion.executeAction(
            0,
            [helper.address, anyErc20.address],
            [0, 0],
            [action_1, action_2]
          )
        ).to.be.revertedWith("Minion::call failure");

        
      });

      it("Passes when first actions condition is meet", async function () {
        const today = new Date()
        const yesterday = new Date(today)
        yesterday.setDate(yesterday.getDate() - 1)
        const action_1 = helper.interface.encodeFunctionData("isAfter", [
          Math.floor(yesterday.getTime() / 1000), // yesterdays date
        ]);
        const action_2 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          20,
        ]);

        await safeMinion.proposeAction(
          [helper.address, anyErc20.address],
          [0, 0],
          [action_1, action_2],
          anyErc20.address,
          0,
          "test",
          false
        );

        await doProposal(true, 0, moloch)

        await safeMinion.executeAction(
            0,
            [helper.address, anyErc20.address],
            [0, 0],
            [action_1, action_2]
          )

        expect(await anyErc20.balanceOf(aliceAddress)).to.equal(20);
        
      });

      it("Enables Buyout proposal type condition", async function () {
        const action_1 = helper.interface.encodeFunctionData("isNotDaoMember", [
          aliceAddress,
          moloch.address
        ]);
        const action_2 = anyErc20.interface.encodeFunctionData("transfer", [
          aliceAddress,
          20,
        ]);

        await safeMinion.proposeAction(
          [helper.address, anyErc20.address],
          [0, 0],
          [action_1, action_2],
          anyErc20.address,
          0,
          "test",
          false
        );

        await doProposal(true, 0, moloch)

        // should fail before ragequit
        expect(
          safeMinion.executeAction(
            0,
            [helper.address, anyErc20.address],
            [0, 0],
            [action_1, action_2]
          )
        ).to.be.revertedWith("Minion::call failure");
        
        await molochAsAlice.ragequit(50,0);
        // now it should complete successfully
        await safeMinion.executeAction(
          0,
          [helper.address, anyErc20.address],
          [0, 0],
          [action_1, action_2]
        )

        expect(await anyErc20.balanceOf(aliceAddress)).to.equal(20);
        
      });


      
    });
    

  })
})


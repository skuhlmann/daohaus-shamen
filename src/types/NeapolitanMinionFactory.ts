/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NeapolitanMinion } from "./NeapolitanMinion";

export class NeapolitanMinionFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<NeapolitanMinion> {
    return super.deploy(overrides || {}) as Promise<NeapolitanMinion>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NeapolitanMinion {
    return super.attach(address) as NeapolitanMinion;
  }
  connect(signer: Signer): NeapolitanMinionFactory {
    return super.connect(signer) as NeapolitanMinionFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NeapolitanMinion {
    return new Contract(address, _abi, signerOrProvider) as NeapolitanMinion;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ActionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CrossWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DoWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targets",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "values",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "datas",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    name: "ExecuteAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targets",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "values",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "datas",
        type: "bytes",
      },
    ],
    name: "ProposeAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "moloch",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PulledFunds",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "actions",
    outputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "cancelAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_moloch",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "transfer",
        type: "bool",
      },
    ],
    name: "crossWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "doWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "actionTos",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "actionValues",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "actionDatas",
        type: "bytes[]",
      },
    ],
    name: "executeAction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_moloch",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minQuorum",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minQuorum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "module",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moloch",
    outputs: [
      {
        internalType: "contract IMOLOCH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "molochDepositToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "actionTos",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "actionValues",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "actionDatas",
        type: "bytes[]",
      },
      {
        internalType: "address",
        name: "withdrawToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "details",
        type: "string",
      },
    ],
    name: "proposeAction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "setModule",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506123d4806100206000396000f3fe60806040526004361061010d5760003560e01c8063a230c52411610095578063bc197c8111610064578063bc197c81146102e3578063bed6b61114610303578063d5ecdb6d14610318578063e952236814610338578063f23a6e611461035857610114565b8063a230c52414610279578063a6f9dae114610299578063b5a127e5146102b9578063b86d5298146102ce57610114565b8063399ae724116100dc578063399ae724146101b957806347f543bc146101d9578063505c9dbe14610206578063623d9ac91461022657806383240f831461024857610114565b806303e2b64314610116578063150b7a02146101365780631e5f179b1461016c5780633381114b1461019957610114565b3661011457005b005b34801561012257600080fd5b50610114610131366004611a48565b610378565b34801561014257600080fd5b50610156610151366004611a9a565b610631565b6040516101639190612155565b60405180910390f35b34801561017857600080fd5b5061018c610187366004611c0f565b61065b565b604051610163919061211e565b3480156101a557600080fd5b506101146101b4366004611b85565b61069a565b3480156101c557600080fd5b506101146101d4366004611b85565b61078e565b3480156101e557600080fd5b506101f96101f4366004611893565b6108a8565b6040516101639190612113565b34801561021257600080fd5b5061018c610221366004611c93565b61090a565b34801561023257600080fd5b5061023b610ab7565b6040516101639190611faf565b34801561025457600080fd5b50610268610263366004611e1a565b610ac6565b604051610163959493929190612127565b34801561028557600080fd5b506101f9610294366004611893565b610b06565b3480156102a557600080fd5b506101f96102b4366004611893565b610c1d565b3480156102c557600080fd5b5061018c610c80565b3480156102da57600080fd5b5061023b610c86565b3480156102ef57600080fd5b506101566102fe36600461198d565b610c95565b34801561030f57600080fd5b5061023b610cc2565b34801561032457600080fd5b50610114610333366004611e1a565b610cd1565b34801561034457600080fd5b506101f9610353366004611e4a565b610e53565b34801561036457600080fd5b50610156610373366004611b0b565b611340565b61038133610b06565b6040518060400160405280601281526020017126b4b734b7b71d1d3737ba1036b2b6b132b960711b815250906103d35760405162461bcd60e51b81526004016103ca919061216a565b60405180910390fd5b50604051630cf20cc960e01b81526001600160a01b03851690630cf20cc990610402908690869060040161205e565b600060405180830381600087803b15801561041c57600080fd5b505af1158015610430573d6000803e3d6000fd5b5050505080156105f0576000805460405163753d756360e01b81526001600160a01b039091169063753d75639061046b908790600401611faf565b60206040518083038186803b15801561048357600080fd5b505afa158015610497573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bb9190611dfe565b9050806040518060400160405280601f81526020017f4d696e696f6e3a3a6e6f7420612077686974656c697374656420746f6b656e00815250906105125760405162461bcd60e51b81526004016103ca919061216a565b5060005460405163a9059cbb60e01b81526001600160a01b038681169263a9059cbb926105479290911690879060040161205e565b602060405180830381600087803b15801561056157600080fd5b505af1158015610575573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105999190611dfe565b6040518060400160405280601d81526020017f4d696e696f6e3a3a746f6b656e207472616e73666572206661696c6564000000815250906105ed5760405162461bcd60e51b81526004016103ca919061216a565b50505b7f69725482a69b3feb662528aa4b8028c1f9f6288b9ef746d5c84a847e05ad0d6b84848460405161062393929190611fdd565b60405180910390a150505050565b7f150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f95945050505050565b600086868686868660405160200161067896959493929190612077565b6040516020818303038152906040528051906020012090509695505050505050565b6106a333610b06565b6040518060400160405280601281526020017126b4b734b7b71d1d3737ba1036b2b6b132b960711b815250906106ec5760405162461bcd60e51b81526004016103ca919061216a565b50600054604051630cf20cc960e01b81526001600160a01b0390911690630cf20cc99061071f908590859060040161205e565b600060405180830381600087803b15801561073957600080fd5b505af115801561074d573d6000803e3d6000fd5b505050507f2e42613cca2d5007ef5f2bb60dd0d7f5107ce2119a6968721760eac66f81ee69828260405161078292919061205e565b60405180910390a15050565b600454604080518082019091526013815272135a5b9a5bdb8e8e9a5b9a5d1a585b1a5e9959606a1b60208201529060ff16156107dd5760405162461bcd60e51b81526004016103ca919061216a565b50600080546001600160a01b0319166001600160a01b03848116919091179182905560038390556040805163c89039c560e01b81529051929091169163c89039c591600480820192602092909190829003018186803b15801561083f57600080fd5b505afa158015610853573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087791906118b6565b600180546001600160a01b0319166001600160a01b03929092169190911781556004805460ff191690911790555050565b604080516060810190915260228082526000913330149161235c6020830139906108e55760405162461bcd60e51b81526004016103ca919061216a565b5050600280546001600160a01b0319166001600160a01b03831617905560015b919050565b600061091533610b06565b6040518060400160405280601281526020017126b4b734b7b71d1d3737ba1036b2b6b132b960711b8152509061095e5760405162461bcd60e51b81526004016103ca919061216a565b5060408051808201909152601781527609ad2dcd2dedc7474d8cadccee8d040dad2e6dac2e8c6d604b1b60208201528a89146109ad5760405162461bcd60e51b81526004016103ca919061216a565b5060408051808201909152601781527609ad2dcd2dedc7474d8cadccee8d040dad2e6dac2e8c6d604b1b60208201528a87146109fc5760405162461bcd60e51b81526004016103ca919061216a565b506000805460015460405163590f940b60e01b81526001600160a01b039283169263590f940b92610a43923092879283928392909116908d908f908e908e90600401612001565b602060405180830381600087803b158015610a5d57600080fd5b505af1158015610a71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a959190611e32565b9050610aa8818d8d8d8d8d8d8d8d61136b565b9b9a5050505050505050505050565b6000546001600160a01b031681565b600560205260009081526040902080546001820154600283015460039093015491926001600160a01b0380831693600160a01b90930460ff169291169085565b6000805460405163100b05e560e21b815282916001600160a01b03169063402c179490610b37908690600401611faf565b60206040518083038186803b158015610b4f57600080fd5b505afa158015610b63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8791906118b6565b6000805460405163022b92c360e21b815292935090916001600160a01b03909116906308ae4b0c90610bbd908590600401611faf565b60c06040518083038186803b158015610bd557600080fd5b505afa158015610be9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0d9190611bb0565b5050509015159695505050505050565b604080516060810190915260228082526000913330149161235c602083013990610c5a5760405162461bcd60e51b81526004016103ca919061216a565b5050600080546001600160a01b0383166001600160a01b03199091161790556001919050565b60035481565b6002546001600160a01b031681565b7fbc197c819b3e337a6f9652dd10becd7eef83032af3b9d958d3d42f669414662198975050505050505050565b6001546001600160a01b031681565b600081815260056020908152604091829020825160a0810184528154815260018201546001600160a01b03808216838601819052600160a01b90920460ff16151583870152600284015416606083015260039092015460808201528351808501909452601484527326b4b734b7b71d1d3737ba10383937b837b9b2b960611b928401929092529091903314610d795760405162461bcd60e51b81526004016103ca919061216a565b506000828152600560205260408082208281556001810180546001600160a81b03191690556002810180546001600160a01b031916905560030191909155517f852ea3421a945e7576fa00a05ec9832650bfc7d5cb4dc0c10c657f704723794790610de590849061211e565b60405180910390a160005460405163e0a8f6f560e01b81526001600160a01b039091169063e0a8f6f590610e1d90859060040161211e565b600060405180830381600087803b158015610e3757600080fd5b505af1158015610e4b573d6000803e3d6000fd5b505050505050565b6000878152600560209081526040808320815160a0810183528154815260018201546001600160a01b0380821695830195909552600160a01b900460ff1615159281019290925260028101549092166060820152600390910154608082015281610ebc8a611556565b9050806040518060600160405280602f815260200161232d602f913990610ef65760405162461bcd60e51b81526004016103ca919061216a565b506000610f078a8a8a8a8a8a61065b565b608084015190915015610f9e5760608301516000546040516373f8fd4b60e01b8152610f9e92916001600160a01b0316906373f8fd4b90610f4e9030908590600401611fc3565b60206040518083038186803b158015610f6657600080fd5b505afa158015610f7a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b49190611e32565b825160408051808201909152601d81527f4d696e696f6e3a3a6e6f7420612076616c6964206f7065726174696f6e0000006020820152908214610ff45760405162461bcd60e51b81526004016103ca919061216a565b506040808401518151808301909252601f82527f4d696e696f6e3a3a616374696f6e20616c72656164792065786563757465640060208301521561104b5760405162461bcd60e51b81526004016103ca919061216a565b5060008b8152600560205260408120600101805460ff60a01b1916600160a01b1790555b898110156112f15788888281811061109757634e487b7160e01b600052603260045260246000fd5b9050602002013547101560405180606001604052806021815260200161237e60219139906110d85760405162461bcd60e51b81526004016103ca919061216a565b5060008b8b838181106110fb57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906111109190611893565b6001600160a01b03168a8a8481811061113957634e487b7160e01b600052603260045260246000fd5b9050602002013589898581811061116057634e487b7160e01b600052603260045260246000fd5b9050602002810190611172919061223b565b604051611180929190611f9f565b60006040518083038185875af1925050503d80600081146111bd576040519150601f19603f3d011682016040523d82523d6000602084013e6111c2565b606091505b5050905080604051806040016040528060148152602001734d696e696f6e3a3a63616c6c206661696c75726560601b815250906112125760405162461bcd60e51b81526004016103ca919061216a565b508c837f72c2233d765a500d34f58767d32097a9f2e173abc3a6e77c48608fd3c9b5bfa6848f8f8781811061125757634e487b7160e01b600052603260045260246000fd5b905060200201602081019061126c9190611893565b8e8e8881811061128c57634e487b7160e01b600052603260045260246000fd5b905060200201358d8d898181106112b357634e487b7160e01b600052603260045260246000fd5b90506020028101906112c5919061223b565b336040516112d8969594939291906121f6565b60405180910390a3506112ea816122bf565b905061106f565b505050600098895250506005602052505060408520858155600180820180546001600160a81b03191690556002820180546001600160a01b031916905560039091019590955550929392505050565b7ff23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf979695505050505050565b600061137b89898989898961065b565b905060006040518060a00160405280838152602001336001600160a01b03168152602001600015158152602001856001600160a01b0316815260200184815250905080600560008d81526020019081526020016000206000820151816000015560208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160010160146101000a81548160ff02191690831515021790555060608201518160020160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816003015590505060005b89811015611548578b837f5dac65fa5ee8a5279a2a49312c6141be6eb03d0c19b037b6fbd57d710eadbb90838e8e868181106114b157634e487b7160e01b600052603260045260246000fd5b90506020020160208101906114c69190611893565b8d8d878181106114e657634e487b7160e01b600052603260045260246000fd5b905060200201358c8c8881811061150d57634e487b7160e01b600052603260045260246000fd5b905060200281019061151f919061223b565b6040516115309594939291906121bd565b60405180910390a3611541816122bf565b9050611465565b505050505050505050505050565b6000805460408051633a98ef3960e01b8152905183926001600160a01b031691633a98ef39916004808301926020929190829003018186803b15801561159b57600080fd5b505afa1580156115af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d39190611e32565b6000805460405163b2643aab60e01b815292935090916001600160a01b039091169063b2643aab9061160990879060040161211e565b60c06040518083038186803b15801561162157600080fd5b505afa158015611635573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116599190611d72565b6000805460405163013cf08b60e01b8152929350909182916001600160a01b03169063013cf08b9061168f90899060040161211e565b61018060405180830381600087803b1580156116aa57600080fd5b505af11580156116be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e291906118d2565b9b509b50505050505050505050508260026006811061171157634e487b7160e01b600052603260045260246000fd5b602002015115611728576001945050505050610905565b6002546001600160a01b03161580159061174c57506002546001600160a01b031633145b156117b357825160408051808201909152601e81527f4d696e696f6e3a3a70726f706f73616c206e6f742073706f6e736f72656400006020820152906117a55760405162461bcd60e51b81526004016103ca919061216a565b506001945050505050610905565b600354156117f3576000846117c98460646122a0565b6117d39190612280565b905060035481101580156117e75750600182105b95505050505050610905565b50600095945050505050565b803561090581612306565b60008083601f84011261181b578081fd5b50813567ffffffffffffffff811115611832578182fd5b602083019150836020808302850101111561184c57600080fd5b9250929050565b60008083601f840112611864578182fd5b50813567ffffffffffffffff81111561187b578182fd5b60208301915083602082850101111561184c57600080fd5b6000602082840312156118a4578081fd5b81356118af81612306565b9392505050565b6000602082840312156118c7578081fd5b81516118af81612306565b6000806000806000806000806000806000806101808d8f0312156118f4578788fd5b8c516118ff81612306565b60208e0151909c5061191081612306565b60408e0151909b5061192181612306565b809a505060608d0151985060808d0151975060a08d0151965060c08d015161194881612306565b60e08e01516101008f0151919750955061196181612306565b809450506101208d015192506101408d015191506101608d015190509295989b509295989b509295989b565b60008060008060008060008060a0898b0312156119a8578384fd5b88356119b381612306565b975060208901356119c381612306565b9650604089013567ffffffffffffffff808211156119df578586fd5b6119eb8c838d0161180a565b909850965060608b0135915080821115611a03578586fd5b611a0f8c838d0161180a565b909650945060808b0135915080821115611a27578384fd5b50611a348b828c01611853565b999c989b5096995094979396929594505050565b60008060008060808587031215611a5d578384fd5b8435611a6881612306565b93506020850135611a7881612306565b9250604085013591506060850135611a8f8161231e565b939692955090935050565b600080600080600060808688031215611ab1578081fd5b8535611abc81612306565b94506020860135611acc81612306565b935060408601359250606086013567ffffffffffffffff811115611aee578182fd5b611afa88828901611853565b969995985093965092949392505050565b60008060008060008060a08789031215611b23578384fd5b8635611b2e81612306565b95506020870135611b3e81612306565b94506040870135935060608701359250608087013567ffffffffffffffff811115611b67578283fd5b611b7389828a01611853565b979a9699509497509295939492505050565b60008060408385031215611b97578182fd5b8235611ba281612306565b946020939093013593505050565b60008060008060008060c08789031215611bc8578384fd5b8651611bd381612306565b8096505060208701519450604087015193506060870151611bf38161231e565b809350506080870151915060a087015190509295509295509295565b60008060008060008060608789031215611c27578384fd5b863567ffffffffffffffff80821115611c3e578586fd5b611c4a8a838b0161180a565b90985096506020890135915080821115611c62578586fd5b611c6e8a838b0161180a565b90965094506040890135915080821115611c86578384fd5b50611b7389828a0161180a565b60008060008060008060008060008060c08b8d031215611cb1578384fd5b8a3567ffffffffffffffff80821115611cc8578586fd5b611cd48e838f0161180a565b909c509a5060208d0135915080821115611cec578586fd5b611cf88e838f0161180a565b909a50985060408d0135915080821115611d10578586fd5b611d1c8e838f0161180a565b9098509650869150611d3060608e016117ff565b955060808d0135945060a08d0135915080821115611d4c578384fd5b50611d598d828e01611853565b915080935050809150509295989b9194979a5092959850565b600060c08284031215611d83578081fd5b82601f830112611d91578081fd5b60405160c0810181811067ffffffffffffffff82111715611db457611db46122f0565b604052808360c08101861015611dc8578384fd5b835b6006811015611df3578151611dde8161231e565b83526020928301929190910190600101611dca565b509195945050505050565b600060208284031215611e0f578081fd5b81516118af8161231e565b600060208284031215611e2b578081fd5b5035919050565b600060208284031215611e43578081fd5b5051919050565b60008060008060008060006080888a031215611e64578081fd5b87359650602088013567ffffffffffffffff80821115611e82578283fd5b611e8e8b838c0161180a565b909850965060408a0135915080821115611ea6578283fd5b611eb28b838c0161180a565b909650945060608a0135915080821115611eca578283fd5b50611ed78a828b0161180a565b989b979a50959850939692959293505050565b818352602080840193600091908185020181018584845b87811015611f685782840389528135601e19883603018112611f21578687fd5b8701803567ffffffffffffffff811115611f39578788fd5b803603891315611f47578788fd5b611f548682898501611f75565b9a87019a9550505090840190600101611f01565b5091979650505050505050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b600061010060018060a01b03808d1684528b60208501528a604085015289606085015280891660808501528760a085015280871660c0850152508060e084015261204e8184018587611f75565b9c9b505050505050505050505050565b6001600160a01b03929092168252602082015260400190565b6060808252810186905260008760808301825b898110156120ba57823561209d81612306565b6001600160a01b031682526020928301929091019060010161208a565b5083810360208501528681526001600160fb1b038711156120d9578283fd5b602087029150818860208301370160208181018381528483039091016040850152612105818688611eea565b9a9950505050505050505050565b901515815260200190565b90815260200190565b9485526001600160a01b03938416602086015291151560408501529091166060830152608082015260a00190565b6001600160e01b031991909116815260200190565b6000602080835283518082850152825b818110156121965785810183015185820160400152820161217a565b818111156121a75783604083870101525b50601f01601f1916929092016040019392505050565b600086825260018060a01b0386166020830152846040830152608060608301526121eb608083018486611f75565b979650505050505050565b600087825260018060a01b03808816602084015286604084015260a0606084015261222560a084018688611f75565b9150808416608084015250979650505050505050565b6000808335601e19843603018112612251578283fd5b83018035915067ffffffffffffffff82111561226b578283fd5b60200191503681900382131561184c57600080fd5b60008261229b57634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156122ba576122ba6122da565b500290565b60006000198214156122d3576122d36122da565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461231b57600080fd5b50565b801515811461231b57600080fdfe4d696e696f6e3a3a70726f706f73616c20657865637574696f6e20726571756972656d656e7473206e6f74206d65744d696e696f6e3a3a63616e206f6e6c792062652063616c6c656420627920746869734d696e696f6e3a3a696e73756666696369656e74206e617469766520746f6b656ea26469706673582212200e9a8764bcf4d1f97f1cbcaeec63c32230f22a08a4cf94825959d5365eccc98664736f6c63430008000033";

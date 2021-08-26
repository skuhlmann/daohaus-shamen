/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestExecutor } from "./TestExecutor";

export class TestExecutorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestExecutor> {
    return super.deploy(overrides || {}) as Promise<TestExecutor>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestExecutor {
    return super.attach(address) as TestExecutor;
  }
  connect(signer: Signer): TestExecutorFactory {
    return super.connect(signer) as TestExecutorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestExecutor {
    return new Contract(address, _abi, signerOrProvider) as TestExecutor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "exec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint8",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModule",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "setModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610487806100206000396000f3fe6080604052600436106100435760003560e01c80630565bb671461004f578063468721a71461007157806347f543bc146100a7578063b86d5298146100c75761004a565b3661004a57005b600080fd5b34801561005b57600080fd5b5061006f61006a366004610311565b6100e9565b005b34801561007d57600080fd5b5061009161008c36600461036b565b610165565b60405161009e9190610406565b60405180910390f35b3480156100b357600080fd5b5061006f6100c23660046102ee565b610276565b3480156100d357600080fd5b506100dc610298565b60405161009e91906103f2565b60006060856001600160a01b03168585856040516101089291906103e2565b60006040518083038185875af1925050503d8060008114610145576040519150601f19603f3d011682016040523d82523d6000602084013e61014a565b606091505b5090925090508161015d57805160208201fd5b505050505050565b600080546001600160a01b031633146101995760405162461bcd60e51b815260040161019090610411565b60405180910390fd5b8160ff166001141561020a57856001600160a01b031684846040516101bf9291906103e2565b600060405180830381855af49150503d80600081146101fa576040519150601f19603f3d011682016040523d82523d6000602084013e6101ff565b606091505b50508091505061026d565b856001600160a01b03168585856040516102259291906103e2565b60006040518083038185875af1925050503d8060008114610262576040519150601f19603f3d011682016040523d82523d6000602084013e610267565b606091505b50909150505b95945050505050565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b60008083601f8401126102b8578182fd5b50813567ffffffffffffffff8111156102cf578182fd5b6020830191508360208285010111156102e757600080fd5b9250929050565b6000602082840312156102ff578081fd5b813561030a81610439565b9392505050565b60008060008060608587031215610326578283fd5b843561033181610439565b935060208501359250604085013567ffffffffffffffff811115610353578283fd5b61035f878288016102a7565b95989497509550505050565b600080600080600060808688031215610382578081fd5b853561038d81610439565b945060208601359350604086013567ffffffffffffffff8111156103af578182fd5b6103bb888289016102a7565b909450925050606086013560ff811681146103d4578182fd5b809150509295509295909350565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b901515815260200190565b6020808252600e908201526d139bdd08185d5d1a1bdc9a5e995960921b604082015260600190565b6001600160a01b038116811461044e57600080fd5b5056fea2646970667358221220ac47bb38e2d658de29fc975a282d30b654d166dbbf6acf5843c4a89c178cc33664736f6c63430008000033";

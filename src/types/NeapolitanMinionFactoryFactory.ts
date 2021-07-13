/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NeapolitanMinionFactory } from "./NeapolitanMinionFactory";

export class NeapolitanMinionFactoryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _template: string,
    overrides?: Overrides
  ): Promise<NeapolitanMinionFactory> {
    return super.deploy(
      _template,
      overrides || {}
    ) as Promise<NeapolitanMinionFactory>;
  }
  getDeployTransaction(
    _template: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_template, overrides || {});
  }
  attach(address: string): NeapolitanMinionFactory {
    return super.attach(address) as NeapolitanMinionFactory;
  }
  connect(signer: Signer): NeapolitanMinionFactoryFactory {
    return super.connect(signer) as NeapolitanMinionFactoryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NeapolitanMinionFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NeapolitanMinionFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_template",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minion",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "moloch",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "details",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "minionType",
        type: "string",
      },
    ],
    name: "SummonMinion",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "minionList",
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
    ],
    name: "minions",
    outputs: [
      {
        internalType: "address",
        name: "moloch",
        type: "address",
      },
      {
        internalType: "string",
        name: "details",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "moloch",
        type: "address",
      },
      {
        internalType: "string",
        name: "details",
        type: "string",
      },
    ],
    name: "summonMinion",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "template",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516106d03803806106d083398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c61063e6100926000398060b8528060e2525061063e6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80636f2ddd931461005157806376fff5221461006f5780637b37458714610082578063d67014df14610095575b600080fd5b6100596100b6565b604051610066919061059a565b60405180910390f35b61005961007d36600461048f565b6100da565b610059610090366004610537565b610282565b6100a86100a336600461046e565b6102ac565b6040516100669291906105ae565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806101067f000000000000000000000000000000000000000000000000000000000000000061035f565b60405163066ad14f60e21b81529091506001600160a01b038216906319ab453c9061013590879060040161059a565b600060405180830381600087803b15801561014f57600080fd5b505af1158015610163573d6000803e3d6000fd5b505060408051808201825260118152702732b0b837b634ba30b71036b4b734b7b760791b602080830191909152825180840184526001600160a01b038a811682528183018a815288821660009081526001808652969020835181546001600160a01b0319169316929092178255518051949750919550936101ec939085019291909101906103b1565b5050600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630180546001600160a01b0319166001600160a01b038581169182179092556040519188169250907f82c46fce23f68e421df03972dc4fcfc2add76d8c37a037fbc47e378d132ca6269061027290889086906105da565b60405180910390a3509392505050565b6000818154811061029257600080fd5b6000918252602090912001546001600160a01b0316905081565b600160208181526000928352604092839020805481840180548651600261010097831615979097026000190190911695909504601f81018590048502860185019096528585526001600160a01b03909116949193929091908301828280156103555780601f1061032a57610100808354040283529160200191610355565b820191906000526020600020905b81548152906001019060200180831161033857829003601f168201915b5050505050905082565b6000808260601b9050604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f0949350505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826103e7576000855561042d565b82601f1061040057805160ff191683800117855561042d565b8280016001018555821561042d579182015b8281111561042d578251825591602001919060010190610412565b5061043992915061043d565b5090565b5b80821115610439576000815560010161043e565b80356001600160a01b038116811461046957600080fd5b919050565b60006020828403121561047f578081fd5b61048882610452565b9392505050565b600080604083850312156104a1578081fd5b6104aa83610452565b915060208084013567ffffffffffffffff808211156104c7578384fd5b818601915086601f8301126104da578384fd5b8135818111156104e657fe5b604051601f8201601f191681018501838111828210171561050357fe5b6040528181528382018501891015610519578586fd5b81858501868301378585838301015280955050505050509250929050565b600060208284031215610548578081fd5b5035919050565b60008151808452815b8181101561057457602081850181015186830182015201610558565b818111156105855782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03831681526040602082018190526000906105d29083018461054f565b949350505050565b6000604082526105ed604083018561054f565b82810360208401526105ff818561054f565b9594505050505056fea2646970667358221220bfb55e226d0357ed7ec7f663f02e58714187921a227b238479311abaa5c2b67e64736f6c63430007050033";
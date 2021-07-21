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
      {
        indexed: false,
        internalType: "uint256",
        name: "minQuorum",
        type: "uint256",
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
      {
        internalType: "uint256",
        name: "minQuorum",
        type: "uint256",
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
  "0x60a060405234801561001057600080fd5b506040516107d73803806107d783398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c6107416100966000396000818160be015261029a01526107416000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633fb88bec146100515780636f2ddd931461007a5780637b37458714610082578063d67014df14610095575b600080fd5b61006461005f3660046104be565b6100b6565b60405161007191906105dd565b60405180910390f35b610064610298565b61006461009036600461057a565b6102bc565b6100a86100a336600461049d565b6102e6565b6040516100719291906105f1565b6000806100e27f0000000000000000000000000000000000000000000000000000000000000000610396565b90506000831180156100f5575060648311155b61011a5760405162461bcd60e51b81526004016101119061066c565b60405180910390fd5b604051630e66b9c960e21b81526001600160a01b0382169063399ae72490610148908890879060040161061d565b600060405180830381600087803b15801561016257600080fd5b505af1158015610176573d6000803e3d6000fd5b505060408051808201825260118152702732b0b837b634ba30b71036b4b734b7b760791b602080830191909152825180840184526001600160a01b038b811682528183018b815288821660009081526001808652969020835181546001600160a01b0319169316929092178255518051949750919550936101ff939085019291909101906103e8565b5050600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630180546001600160a01b0319166001600160a01b038581169182179092556040519189169250907fa7263f64fc0919758633f16671099128e3b868bb0893fcb099b19fb9ab522ade9061028790899086908a90610636565b60405180910390a350949350505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600081815481106102cc57600080fd5b6000918252602090912001546001600160a01b0316905081565b6001602081905260009182526040909120805491810180546001600160a01b0390931692610313906106ba565b80601f016020809104026020016040519081016040528092919081815260200182805461033f906106ba565b801561038c5780601f106103615761010080835404028352916020019161038c565b820191906000526020600020905b81548152906001019060200180831161036f57829003601f168201915b5050505050905082565b6000808260601b9050604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f0949350505050565b8280546103f4906106ba565b90600052602060002090601f016020900481019282610416576000855561045c565b82601f1061042f57805160ff191683800117855561045c565b8280016001018555821561045c579182015b8281111561045c578251825591602001919060010190610441565b5061046892915061046c565b5090565b5b80821115610468576000815560010161046d565b80356001600160a01b038116811461049857600080fd5b919050565b6000602082840312156104ae578081fd5b6104b782610481565b9392505050565b6000806000606084860312156104d2578182fd5b6104db84610481565b925060208085013567ffffffffffffffff808211156104f8578485fd5b818701915087601f83011261050b578485fd5b81358181111561051d5761051d6106f5565b604051601f8201601f1916810185018381118282101715610540576105406106f5565b60405281815283820185018a1015610556578687fd5b81858501868301379081019093019490945250929592945050506040919091013590565b60006020828403121561058b578081fd5b5035919050565b60008151808452815b818110156105b75760208185018101518683018201520161059b565b818111156105c85782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b038316815260406020820181905260009061061590830184610592565b949350505050565b6001600160a01b03929092168252602082015260400190565b6000606082526106496060830186610592565b828103602084015261065b8186610592565b915050826040830152949350505050565b6020808252602e908201527f4d696e696f6e466163746f72793a206d696e51756f72756d206d75737420626560408201526d0206265747765656e20312d3130360941b606082015260800190565b6002810460018216806106ce57607f821691505b602082108114156106ef57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220c4e572a89b177127f09ccfebe49218825818c3892d2ad06c39f549d4c497342c64736f6c63430008000033";

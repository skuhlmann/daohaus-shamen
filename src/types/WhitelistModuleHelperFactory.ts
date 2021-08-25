/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WhitelistModuleHelper } from "./WhitelistModuleHelper";

export class WhitelistModuleHelperFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _whitelist: string[],
    _minion: string,
    overrides?: Overrides
  ): Promise<WhitelistModuleHelper> {
    return super.deploy(
      _whitelist,
      _minion,
      overrides || {}
    ) as Promise<WhitelistModuleHelper>;
  }
  getDeployTransaction(
    _whitelist: string[],
    _minion: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_whitelist, _minion, overrides || {});
  }
  attach(address: string): WhitelistModuleHelper {
    return super.attach(address) as WhitelistModuleHelper;
  }
  connect(signer: Signer): WhitelistModuleHelperFactory {
    return super.connect(signer) as WhitelistModuleHelperFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WhitelistModuleHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WhitelistModuleHelper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_whitelist",
        type: "address[]",
      },
      {
        internalType: "address payable",
        name: "_minion",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_actionTos",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_actionValues",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "_actionDatas",
        type: "bytes[]",
      },
    ],
    name: "executeAction",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "whitelist",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161068938038061068983398101604081905261002f916100e7565b60005b82518110156100a457600180600085848151811061006057634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790558061009c816101b9565b915050610032565b50600080546001600160a01b0319166001600160a01b0392909216919091179055506101f6565b80516001600160a01b03811681146100e257600080fd5b919050565b600080604083850312156100f9578182fd5b82516001600160401b038082111561010f578384fd5b818501915085601f830112610122578384fd5b8151602082821115610136576101366101e0565b80820260405182828201018181108682111715610155576101556101e0565b604052838152828101945085830182870184018b1015610173578889fd5b8896505b8487101561019c57610188816100cb565b865260019690960195948301948301610177565b5096506101ac90508782016100cb565b9450505050509250929050565b60006000198214156101d957634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b610484806102056000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80639b19251a1461003b578063e952236814610064575b600080fd5b61004e6100493660046101c3565b610079565b60405161005b919061035d565b60405180910390f35b610077610072366004610204565b61008e565b005b60016020526000908152604090205460ff1681565b3360009081526001602052604090205460ff166100c65760405162461bcd60e51b81526004016100bd90610368565b60405180910390fd5b600054604051631d2a446d60e31b81526001600160a01b039091169063e952236890610102908a908a908a908a908a908a908a906004016103a9565b602060405180830381600087803b15801561011c57600080fd5b505af1158015610130573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015491906101e4565b5050505050505050565b80356001600160a01b038116811461017557600080fd5b919050565b60008083601f84011261018b578182fd5b50813567ffffffffffffffff8111156101a2578182fd5b60208301915083602080830285010111156101bc57600080fd5b9250929050565b6000602082840312156101d4578081fd5b6101dd8261015e565b9392505050565b6000602082840312156101f5578081fd5b815180151581146101dd578182fd5b60008060008060008060006080888a03121561021e578283fd5b87359650602088013567ffffffffffffffff8082111561023c578485fd5b6102488b838c0161017a565b909850965060408a0135915080821115610260578485fd5b61026c8b838c0161017a565b909650945060608a0135915080821115610284578384fd5b506102918a828b0161017a565b989b979a50959850939692959293505050565b8183526020808401936000918085028201810184845b8781101561032657848303601f19018952813536889003601e190181126102df578687fd5b8701803567ffffffffffffffff8111156102f7578788fd5b803603891315610305578788fd5b6103128582888501610333565b9a86019a94505050908301906001016102ba565b5090979650505050505050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b901515815260200190565b60208082526021908201527f57686974656c697374204d6f64756c653a3a4e6f742077686974656c697374656040820152601960fa1b606082015260800190565b87815260806020808301829052908201879052600090889060a08401835b8a8110156103f3576001600160a01b036103e08561015e565b16825292820192908201906001016103c7565b5084810360408601528781526001600160fb1b03881115610412578384fd5b81880292508289838301378281019250508082018381528185840301606086015261043e8187896102a4565b9c9b50505050505050505050505056fea2646970667358221220ce7c6c736626536513a9afb65876f263b7d8bcdc4785fc60e201faa2839c8f8364736f6c63430008000033";

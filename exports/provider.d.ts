import { ChainInfo } from './types.js';
import { JsonRpcProvider } from 'ethers';
export default class Provider {
    #private;
    chainInfo: ChainInfo;
    providers: JsonRpcProvider[];
    constructor(chainId: any);
    getBalance(address: any): any;
    send(method: any, params: any): any;
    call(tx: any): any;
}

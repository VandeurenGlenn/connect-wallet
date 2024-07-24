import Provider from './provider.js';
import { JsonRpcSigner } from 'ethers';
import { ConnectWalletOptions, EthereumProvider, WalletProviderOption } from './types.js';
import type { WalletConnectModalSign } from './wallet-connect.js';
declare global {
    var ethereum: EthereumProvider;
}
export default class ConnectWallet {
    #private;
    provider: Provider;
    signer: JsonRpcSigner;
    set chainId(value: any);
    get chainid(): number;
    walletProvider: WalletProviderOption;
    walletConnect: WalletConnectModalSign;
    constructor({ chainId }: ConnectWalletOptions);
    connect(walletProvider: WalletProviderOption, chainId?: number): Promise<any>;
    disconnect(): Promise<void>;
    changeWalletProvider(walletProvider: WalletProviderOption): Promise<any>;
    changeNetwork(chainId: number): Promise<void>;
}

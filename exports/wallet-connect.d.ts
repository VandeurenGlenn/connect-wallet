import type { WalletConnectModalEventCallback, WalletConnectModalSignConnectArguments, WalletConnectModalSignDisconnectArguments, WalletConnectModalSignRequestArguments, WalletConnectOptions } from './types.js';
export declare class WalletConnectModalSign {
    #private;
    get chainId(): number;
    constructor(options: WalletConnectOptions);
    connect(args: WalletConnectModalSignConnectArguments): Promise<import("@walletconnect/types").ISession>;
    disconnect(args: WalletConnectModalSignDisconnectArguments): Promise<void>;
    sign(tx: any): void;
    request<Result>(args: WalletConnectModalSignRequestArguments): Promise<Result>;
    getSessions(): Promise<import("@walletconnect/types").SessionTypes.Struct[]>;
    getSession(): Promise<import("@walletconnect/types").SessionTypes.Struct>;
    getAccounts(): Promise<string[]>;
    onSessionEvent(callback: WalletConnectModalEventCallback): Promise<void>;
    offSessionEvent(callback: WalletConnectModalEventCallback): Promise<void>;
    onSessionUpdate(callback: WalletConnectModalEventCallback): Promise<void>;
    offSessionUpdate(callback: WalletConnectModalEventCallback): Promise<void>;
    onSessionDelete(callback: WalletConnectModalEventCallback): Promise<void>;
    offSessionDelete(callback: WalletConnectModalEventCallback): Promise<void>;
    onSessionExpire(callback: WalletConnectModalEventCallback): Promise<void>;
    offSessionExpire(callback: WalletConnectModalEventCallback): Promise<void>;
}

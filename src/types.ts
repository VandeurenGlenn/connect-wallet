import { ISignClient, ISignClientEvents } from '@walletconnect/types'
import type { WalletConnectModalConfig } from '@walletconnect/modal'
import { BrowserProvider, Eip1193Provider, JsonRpcSigner } from 'ethers'

export interface EthereumProvider extends Eip1193Provider, BrowserProvider {}

export type ConnectWalletOptions = {
  chainId?: number
  walletConnect: {
    projectId: string
    modalOptions: { themeMode: 'dark' }
    metadata: {
      name: string
      description: string
      url: string // origin must match your domain & subdomain
      icons: string[]
    }
  }
}

export type WalletProviderOption = 'metamask' | 'walletConnect'

export type CurrencyInfo = {
  name: string
  symbol: string
  decimals: number
  iconUrl?: string
}

export type ChainInfo = {
  name: string
  chainId: number
  rpc: string[]
  currency: CurrencyInfo
  explorerUrl?: string
  iconUrl?: string
}

// -- Types ----------------------------------------------------------------
export type WalletConnectModalSignSession = ISignClient['session']

export interface SignClientType extends ISignClient {
  on: ISignClientEvents['on']
  off: ISignClientEvents['off']
}
export interface WalletConnectModalSignOptions {
  projectId: string
  metadata: ISignClient['metadata']
  relayUrl?: string
  modalOptions?: Omit<WalletConnectModalConfig, 'projectId' | 'walletConnectVersion'>
}

export type WalletConnectModalSignConnectArguments = Parameters<ISignClient['connect']>[0]

export type WalletConnectModalSignRequestArguments = Parameters<ISignClient['request']>[0]

export type WalletConnectModalSignDisconnectArguments = Parameters<ISignClient['disconnect']>[0]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WalletConnectModalEventCallback = (data: any) => void

export interface WalletConnectOptions extends WalletConnectModalSignOptions {
  chainId: number
}

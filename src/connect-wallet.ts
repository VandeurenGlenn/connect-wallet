import Provider from './provider.js'
import { BrowserProvider, Eip1193Provider, JsonRpcProvider, JsonRpcSigner, toBeHex } from 'ethers'
import { ConnectWalletOptions, EthereumProvider, WalletConnectOptions, WalletProviderOption } from './types.js'
import type { WalletConnectModalSign } from './wallet-connect.js'
import chainMap from 'chainmap'
import { pubsub } from './pubsub.js'

declare global {
  var ethereum: EthereumProvider
}

export default class ConnectWallet {
  provider: Provider
  signer: JsonRpcSigner
  #chainId: number

  set chainId(value) {
    if (this.#chainId !== value && value) {
      this.#chainId = value

      this.provider = new Provider(value)
      this.#changeNetwork()
    }
  }

  get chainid() {
    return this.#chainId
  }

  walletProvider: WalletProviderOption

  walletConnect: WalletConnectModalSign

  #walletConnectOptions: WalletConnectOptions

  #WalletConnectModalSign: typeof WalletConnectModalSign

  constructor(config: ConnectWalletOptions) {
    if (!config.chainId) this.chainId = 1
    else this.chainId = config.chainId

    if (config.walletConnect) {
      this.#walletConnectOptions = { ...config.walletConnect, chainId: this.chainId }
    }
  }
  // dynamic events, see connect
  #connect_metamask = async () => {
    const provider = new BrowserProvider(globalThis.ethereum, 'any') as BrowserProvider
    // Prompt user for account connections

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    const signer = await provider.getSigner()

    this.signer = signer as JsonRpcSigner

    const _chainId = await ethereum.request({ method: 'eth_chainId' })

    ethereum // Or window.ethereum if you don't support EIP-6963.
      .on('chainChanged', (chainId) => pubsub.publish('networkChange', Number(chainId)))

    ethereum // Or window.ethereum if you don't support EIP-6963.
      .on('accountsChanged', (accounts) => pubsub.publish('accountsChange', accounts))
    pubsub.publish('accountsChange', accounts)
    pubsub.publish('networkChange', Number(_chainId))
  }

  #connect_walletConnect = async () => {
    if (!this.#WalletConnectModalSign) {
      const { WalletConnectModalSign } = await import('./wallet-connect.js')
      this.#WalletConnectModalSign = WalletConnectModalSign
    }

    this.walletConnect = new this.#WalletConnectModalSign({ ...this.#walletConnectOptions, chainId: this.chainId })

    let session = await this.walletConnect.getSession()
    console.log(session)
    if (!session) {
      session = await this.walletConnect.connect({
        requiredNamespaces: {
          eip155: {
            methods: ['eth_sendTransaction', 'personal_sign'],
            chains: ['eip155:1', 'eip155:56', 'eip155:137'],
            events: ['chainChanged', 'accountsChanged']
          }
        }
      })
    }

    pubsub.publish('accountsChange', await globalThis.walletConnect.getAccounts())
    pubsub.publish('networkChange', this.chainId)

    // const provider = new Provider(this.chainId)
    // this.provider = provider

    this.signer = {
      getAddress: () => globalThis.walletConnect.getAccounts(),
      sendTransaction: (tx) => globalThis.walletConnect.sendTransaction(tx)
    }
  }

  async connect(walletProvider: WalletProviderOption, chainId?: number) {
    this.walletProvider = walletProvider
    if (chainId) this.chainId = chainId

    return this[`#connect_${walletProvider}`]()
  }

  async disconnect() {
    if (this.walletProvider === 'walletConnect') {
      const session = await this.walletConnect.getSession()
      await this.walletConnect.disconnect({ topic: session.topic })
    }
  }

  async changeWalletProvider(walletProvider: WalletProviderOption) {
    return this.connect(walletProvider)
  }

  async #changeNetwork() {
    const chainInfo = chainMap[this.chainId]
    if (this.walletProvider === 'metamask') {
      let id = toBeHex(this.chainId).toString()
      if (id.split('0x')[1].startsWith('0')) id = id.replace('0x0', '0x')
      try {
        await globalThis.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: id }] })
      } catch (error) {
        // try adding the network
        try {
          await globalThis.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: id,
                blockExplorerUrls: [chainInfo.blockExplorerUrls],
                rpcUrls: chainInfo.rpc,
                chainName: chainInfo.name,
                nativeCurrency: chainInfo.currency
              }
            ]
          })
        } catch {}
      }
    } else {
      pubsub.publish('networkChange', this.chainId)
    }
  }

  async changeNetwork(chainId: number) {
    if (this.chainId !== chainId) {
      this.chainId = chainId
      this.#changeNetwork()
    }
  }

  subscribe(event, fn) {
    pubsub.subscribe(event, fn)
  }
}

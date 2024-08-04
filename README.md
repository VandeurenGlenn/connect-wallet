# connect-wallet

> easy wallet connections

## install

```sh
npm i @vandeurenglenn/connect-wallet
```

## usage

```js
import ConnectWallet from '@vandeurenglenn/connect-wallet'

const options = {
  chainId: Number,
  walletConnect: {
    projectId: String,
    modalOptions: { themeMode: 'dark' },
    metadata: {
      name: String,
      description: String,
      url: String, // origin must match your domain & subdomain
      icons: Array
    }
  }
}

const connectWallet = new ConnectWallet(options)

connectWallet.subscribe('networkChange', (chainId) => console.log(chainId)) // 1

connectWallet.subscribe('accountsChange', (accounts) => console.log(accounts)) // [0x0.........]

await connectWallet.connect('metamask')
console.log(`signer: ${connectWallet.signer}`)

await connectWallet.connect('walletConnect')
console.log(`signer: ${connectWallet.signer}`)

// provider is always the same (if not switching chainId)
console.log(`provider: ${connectWallet.provider}`)

await connectWallet.changeNetwork(56)
```

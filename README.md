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

const walletConnect = new ConnectWallet(options)

document.addEventListener('networkChange', ({ detail }) => console.log(detail)) // 1

document.addEventListener('accountsChange', ({ detail }) => console.log(detail)) // [0x0.........]

await walletConnect.connect('metamask')
console.log(`signer: ${walletConnect.signer}`)

await walletConnect.connect('walletConnect')
console.log(`signer: ${walletConnect.signer}`)

// provider is always the same (if not switching chainId)
console.log(`provider: ${walletConnect.provider}`)

await walletConnect.changeNetwork(56)
```

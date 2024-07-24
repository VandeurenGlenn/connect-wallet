const walletConnect = new ConnectWallet({
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
})

await walletConnect.connect('metamask')
console.log(`signer: ${walletConnect.signer}`)

await walletConnect.connect('walletConnect')
console.log(`signer: ${walletConnect.signer}`)

// provider is always the same (if not switching chainId)
console.log(`provider: ${walletConnect.provider}`)

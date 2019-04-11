import { ethers } from 'ethers'

/*
  Create etherjs instance restricting the connection to the injected provider.
  Ethers also has fallback providers which can be used if not injected.
  https://github.com/ethers-io/ethers.js/issues/59#issuecomment-358224800
*/

export default class Web3Service {
  constructor() {}

  async init(web3) {
    if (web3 !== undefined) {
      this.provider = new ethers.providers.Web3Provider(web3.currentProvider)

      try {
        await this.provider._web3Provider.enable()
        this.signer = this.provider.getSigner()
        console.debug('Connected to', this.provider)
        return this
      } catch(err) {
        throw new Error('Auth failure', err)
        return this
      }


    } else {
      console.debug('web3 is undefined')
    }

  }

  authenticate() {
    return this.provider._web3Provider.enable()
  }

  getNetwork() {
    if (this.provider.network)
      return this.provider.network.name
    return 'localhost'
  }

  getProvider() {
    return this.provider
  }

  getSigner() {
    return this.provider.getSigner()
  }

  getStorageAt(address, position) {
    return this.provider.getStorageAt(address, position)
  }

  getAccount() {
    // Alternative is await this.signer.getAddress()
    return this.provider._web3Provider.selectedAddress
  }

  getBlockNumber() {
    return this.provider.getBlockNumber()
  }

  getBalance(address) {
    return this.provider.getBalance(address)
  }

  async getHistory(account, from, until) {
    let txPromises = [];
    for (from; from <= until; from++) {
      const block = await this.provider.getBlock(from)
      if (!block || !block.transactions) continue;
      block.transactions.forEach((txHash) => {
        txPromises.push(this.provider.getTransaction(txHash))
      })
    }

    const txHistory = await Promise.all(txPromises)
    console.log(txHistory)
    return txHistory.filter((tx) => {
      return tx.from === account || tx.to === account
    })
  }

  indexToHex(idx) {
    return ethers.utils.bigNumberify(idx).toHexString()
  }

}

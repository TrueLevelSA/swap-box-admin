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
  // Accessing info for 0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0 at
  //       buy: 0x63e52fd1240234fcd07d6417b7a7e9db543d1a0dc64001527549dd18f53fcf0c, 7, 0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0
  //       sell: 0x4fcdf0e256e900d4b99384f82ff2063a536ffbc6a79e9d67538d8566b627e55c, 8, 0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0
  mappingStorageIndex(slot, key) {
    if (!ethers.utils.isHexString(slot)) {
      slot = ethers.utils.bigNumberify(slot).toHexString()
    }
    if (!ethers.utils.isHexString(key)) {
      key = ethers.utils.bigNumberify(key).toHexString()
    }

    const slotFormat = ethers.utils.hexZeroPad(slot, 64)
    // Is equivalent to const keyFormat = ethers.utils.padZeros(key, 64)
    const keyFormat = ethers.utils.hexZeroPad(key, 64)
    // Is equivalent to ethers.utils.keccak256(keyFormat + slotFormat.substring(2))
    const concat = ethers.utils.concat([keyFormat, slotFormat])
    
    return ethers.utils.keccak256(concat)
  }
}

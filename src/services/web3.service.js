import { ethers } from 'ethers'

/*
  Create etherjs instance restricting the connection to the injected provider.
  Ethers also has fallback providers which can be used if not injected.
  https://github.com/ethers-io/ethers.js/issues/59#issuecomment-358224800
*/

export default class Web3Provider {
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
    return this.provider.network.name
  }

  getProvider() {
    return this.provider
  }

  getSigner() {
    return this.provider.getSigner()
  }

  getAccount() {
    return this.provider._web3Provider.selectedAddress
  }
}

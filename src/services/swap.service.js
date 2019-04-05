import { ethers } from 'ethers'

import settings from './settings.json'
import source from './abi/Atola.json'
import bytecode from './abi/AtolaDeployedBytecode.json'


class SwapService {
  constructor(signer, account, networkName) {
    this.address = null
    this.contractInstance = null
    this.account = null
    this.factory = null
    this.chain = settings.chain['main'] // @TODO should be networkName
  }

  async init(signer, account, networkName) {
    this.account = account
    this.factory = new ethers
      .ContractFactory(source.abi, source.bytecode)
      .connect(signer)

    const contracts = await this.findDeployedContractAddress()
    this.address = this.lastestContractAddress(contracts)

    try {
      await this.attach(this.address)
    } finally {
      return this
    }

  }

  lastestContractAddress(contracts = []) {
    const [latest] = contracts.slice(-1)
    if (latest) { return latest.creates }
  }

  // @TODO this only finds contracts created by the account and will not
  // be able to find the ones transfered to itself
  async findDeployedContractAddress() {
    const provider = new ethers.providers.EtherscanProvider('ropsten');
    try {
      const txHistory = await provider.getHistory(this.account)
      return txHistory
        .filter(tx => tx.creates !== null)
        .filter(tx => tx.data === bytecode.withArguments)
    } catch (e) {
      console.debug('No deployed contracts found', e)
    }
  }

  // @TODO should receive as argument when user has form to select alternative
  // tokens or exchages.
  async deploy(baseToken, baseExchange) {
    baseToken = this.chain.ATOLA_BASE_CURRENCY
    baseExchange = this.chain.ATOLA_BASE_EXCHANGE
    try {
      this.contractInstance = await this.factory.deploy(baseToken, baseExchange)
    } catch (e) {
      throw new Error(e)
    } finally {
      return this
    }
  }

  async attach(address) {
    try {
      this.contractInstance = await this.factory.attach(address)
    } finally {
      return this
    }
  }

  async transferOwnership(receiver) {
    const addr = ethers.utils.getAddress(receiver)
    try {
      await this.contractInstance.transferOwnership(receiver)
    } finally {
      return this
    }
  }

  async addBTM({ address }) {
    const addr = ethers.utils.getAddress(address)
    try {
      await this.contractInstance.addMachine(address)
    } finally {
      return this
    }
  }

  async editBTM({ address, buyerFee, sellerFee }) {
    const addr = ethers.utils.getAddress(address)
    try {
      // await this.contractInstance.addMachine(address)
    } finally {
      return this
    }
  }

  async withdraw(amount, currency) {
    amount = ethers.utils.bigNumberify(amount).toHexString()
    switch(currency) {
      case 'ETH':
        return this.contractInstance.withdrawEth(amount)
      case 'XCHF':
        const token = ethers.utils.getAddress(this.chain.ATOLA_BASE_CURRENCY)
        return this.contractInstance.withdrawTokens(token, amount)
    }
  }

}

// ES6 Singleton design pattern
// https://www.sitepoint.com/javascript-design-patterns-singleton/
const contractInstance = new SwapService()

export default contractInstance

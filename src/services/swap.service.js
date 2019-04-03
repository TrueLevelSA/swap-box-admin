import { ethers } from 'ethers'
import source from './abi/Atola.json'
import bytecode from './abi/AtolaDeployedBytecode.json'
import settings from './settings.json'

class SwapService {
  constructor(signer, account, networkName) {
    this.instance = null
    this.contracts = []
    this.hasContract = false
    this.account = account
    this.chain = settings.chain['main'] // @TODO should be networkName
    this.factory = new ethers
      .ContractFactory(source.abi, source.bytecode)
      .connect(signer)
  }

  lastestContractAddress() {
    return this.contracts[this.contracts.length - 1].creates
  }

  // @TODO this only finds contracts created by the account and will not
  // be able to find the ones transfered to itself
  async findDeployedContractAddress() {
    const provider = new ethers.providers.EtherscanProvider('ropsten');
    try {
      const txHistory = await provider.getHistory(this.account)
      this.contracts = txHistory
        .filter(tx => tx.creates !== null)
        .filter(tx => tx.data === bytecode.withArguments)
      this.hasContract = true
    } catch (e) {
      console.debug('No deployed contracts found')
    }
  }

  // @TODO should receive as argument when user has form to select alternative
  // tokens or exchages.
  async deploy(baseToken, baseExchange) {
    baseToken = this.chain.ATOLA_BASE_CURRENCY
    baseExchange = this.chain.ATOLA_BASE_EXCHANGE
    try {
      this.instance = await this.factory.deploy(baseToken, baseExchange)
    } catch (e) {
      throw new Error(e)
    } finally {
      return this
    }
  }

  async attach(address) {
    this.address = address
    try {
      this.instance = await this.factory.attach(this.address)
    } catch (e) {
      throw new Error(e)
    } finally {
      return this
    }
  }

  async transferOwnership(receiver) {
    const addr = ethers.utils.getAddress(receiver)
    try {
      this.instance.transferOwnership(receiver)
    } finally {
      return this
    }
  }

}

export default SwapService

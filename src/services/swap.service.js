import { ethers, Contract } from 'ethers'
import _sortBy from 'lodash.sortby'

import Web3Service from 'services'
import settings from './settings.json'
import source from './abi/Atola.json'
import bytecode from './abi/AtolaDeployedBytecode.json'
import erc20 from './abi/ERC20.json'


class SwapService {
  constructor() {
    this.address = null
    this.contractInstance = null
    this.account = null
    this.factory = null
    this.service = null
    this.chain = settings.chain['localhost'] // @TODO should be networkName
  }

  async init(signer, account, networkName, web3Service) {

    this.account = account
    this.service = web3Service
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
    const sorted = _sortBy(contracts, ['blockNumber'])
    console.log('Contracts', contracts, sorted)
    const [latest] = sorted.slice(-1)
    if (latest) { return latest.creates }
  }

  // @TODO this only finds contracts created by the account and will not
  // be able to find the ones transfered to itself
  async findDeployedContractAddress() {
    const from = this.chain.fromBlock
    try {
      const latest = await this.service.getBlockNumber()
      console.debug(`Fetching user ${this.account} transactions from block ${from} to block ${latest}`)

      // Alternative faster method on testNet:
      // const provider = new ethers.providers.JsonRpcProvider();
      // const txHistory = provider.getHistory(this.account)
      const history = await this.service.getHistory(this.account, from, latest)

      return history
        .filter(tx => tx.creates !== null)                // Only contract creations
        // @TODO IMPORTANT bytecode comparision fails.
        // So we deactivate for dev purpuses knowing that our test getAccount //
        // is used only for this project. Find a solution before deploying
        // .filter(tx => tx.data === bytecode.latest)     // That correspond to Atola


    } catch (e) {
       console.debug('No deployed contracts found', e)
    }

  }

  async getBalances() {
    const baseTokenAddr = await this.service.getStorageAt(this.address, 1)
    const baseTokenContract = new Contract(baseTokenAddr, erc20.abi, this.service.getProvider())
    const baseTokenBalance = await baseTokenContract.balanceOf(this.address)
    const ethBalance = await this.service.getBalance(this.address)

    return {
      eth: ethBalance,              // ether.js transforms into a BN.js
      baseToken: baseTokenBalance,  // idem
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

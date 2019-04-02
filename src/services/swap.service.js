import { ethers } from 'ethers'
import source from './abi/Atola.json'
import settings from './settings.json'

class SwapService {
  constructor(signer, networkName) {
    this.contract = new ethers.ContractFactory(source.abi, source.bytecode, signer)
    this.chain = settings.chain['main'] // @TODO should be networkName
  }

  // @TODO should receive as argument when user has form to select alternative
  // tokens or exchages.
  deploy(baseToken, baseExchange) {
    baseToken = this.chain.ATOLA_BASE_CURRENCY
    baseExchange = this.chain.ATOLA_BASE_EXCHANGE
    return this.contract.deploy(baseToken, baseExchange)
  }

  attach(address) {
    address = settings.chain['ropsten'].demoContract
    return this.contract.connect(address)
  }

  connect(address) {

  }

}

export default SwapService

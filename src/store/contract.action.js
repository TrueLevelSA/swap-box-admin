import { utils } from 'ethers'
import { SwapService } from 'services'


export function initContract() {
  return async (dispatch, getState) => {
    const { system, auth } = getState()
    const { userAccount, networkName } = auth
    const { web3Service } = system
    const signer = await web3Service.getSigner()

    let contract;
    try {
      contract = await SwapService.init(
        signer,
        userAccount,
        networkName,
        web3Service,
      )
      await dispatch({ type: 'SYSTEM_INIT_CONTRACT', payload: { contract } })
      await dispatch(setContractInfo())
    } catch (e) {
      throw new Error(e)
    }


  }
}
// @TODO clean actions and only call this function to set contract data.
export function setContractInfo() {
  return async (dispatch) => {
    const contract = SwapService
    const { eth, baseToken } = await contract.getBalances()
    const machines = await contract.getBTMs()
    dispatch({
      type: 'SET_CONTRACT_ADDRESS',
      payload: {
        hasContract: contract.hasContract,
        contractAddress: contract.address,
        btms: machines
      }
    })

    dispatch({
      type: 'SET_CONTRACT_BALANCE',
      payload: { eth, baseToken },
    })
  }
}

export function findExistingContract() {
  return async (dispatch) => {
    try {
      await SwapService.findDeployedContractAddress()
      const contractAddress = SwapService.lastestContractAddress()
      dispatch({
        type: 'SET_CONTRACT_ADDRESS',
        payload: { hasContract: true, contractAddress }
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function fetchExistingContract(address) {
  return async (dispatch) => {
    try {
      const deployed = await SwapService.attach(address)
      dispatch({
        type: 'ATTACH_SUCCESS',
        payload: { deployed }
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function deployContract() {
  return async (dispatch) => {
    try {
      const deployed = await SwapService.deploy()
      dispatch({
        type: 'SET_CONTRACT_ADDRESS',
        payload: { hasContract: true, contractAddress: deployed.address }
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}


export function addBTM(btmAddress) {
  return async (dispatch) => {
    try {
      await SwapService.addBTM(btmAddress)
      dispatch({ type: 'ADD_SUCCESS' })
    } finally {}
  }
}

export function deleteBtm(btmAddress) {
  return async (dispatch) => {
    try {
      await SwapService.deleteBTM(btmAddress)
      dispatch({ type: 'DELETE_SUCCESS' })
    } finally {}
  }
}

export function editBTM({ address, buy, sell }) {
  buy = utils.bigNumberify((buy * 100).toString())
  sell = utils.bigNumberify((sell * 100).toString())

  return async (dispatch) => {
    try {
      await SwapService.editBTM(address, buy, sell)
      dispatch({ type: 'EDIT_SUCCESS' })
    } finally {}
  }
}

export function withdraw({ amount, currency }) {
  return async (dispatch) => {
    try {
      await SwapService.withdraw(amount, currency)
      dispatch({ type: 'WITHDRAW_SUCCESS' })
    } finally {}
  }
}

export function transferOwnership(owner) {
  return async (dispatch, getState) => {
    console.log('TRANSFER', owner)
    try {
      await SwapService.transferOwnership(owner)
      dispatch({ type: 'TRANSFER_SUCCESS' })
    } finally {}
  }
}

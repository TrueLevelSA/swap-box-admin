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
        networkName
      )
    } catch (e) {
      throw new Error(e)
    }

    dispatch({
      type: 'SYSTEM_INIT_CONTRACT',
      payload: { contract }
    })

    dispatch(setContractInfo())
  }
}

export function setContractInfo() {
  return async (dispatch) => {
    dispatch({
      type: 'SET_CONTRACT_ADDRESS',
      payload: {
        hasContract: SwapService.hasContract,
        contractAddress: SwapService.address
      }
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

export function fetchExistingContract() {
  return async (dispatch) => {
    try {
      const deployed = await SwapService.attach(address)
      dispatch({
        type: 'ATTACH_SUCCESS',
        payload: {}
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


export function addBTM(btm) {
  return async (dispatch) => {
    console.log('ADD', btm)
    try {
      await SwapService.addBTM(btm)
      dispatch({ type: 'ADD_SUCCESS' })
    } finally {}
  }
}

export function editBTM(btm) {
  return async (dispatch) => {
    console.log('EDIT', btm)
    try {
      await SwapService.editBTM(btm)
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

import { Web3Provider, SwapService } from 'services'
import { initNetworkAction } from './network.action'

export function swapInit() {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_INIT_START' })
    const { provider, name: networkName, signer } = getState().network
    try {
      const factory = new SwapService(signer, networkName)
      dispatch({
        type: 'SWAP_INIT_SUCCESS',
        payload: {
          factory,
          signer,
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  }
}

export function deploy() {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_DEPLOY_START' })
    const { factory } = getState().contract
    try {
      const contract = await factory.deploy()
      dispatch({
        type: 'SWAP_DEPLOY_SUCCESS',
        payload: {
          contract,
        }
      })
    } catch (err) {
      dispatch({
        type: 'SWAP_DEPLOY_FAILURE',
        payload: {}
      })
      throw new Error(err)
    }
  }
}

export function getContract() {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_ATTACH_START' })
    const { factory } = getState().contract
    try {
      const contract = await factory.attach()
      const address = contract.address
      dispatch({
        type: 'SWAP_ATTACH_SUCCESS',
        payload: {
          contract,
          address
        }
      })
    } catch (err) {
      dispatch({
        type: 'SWAP_ATTACH_FAILURE',
        payload: {}
      })
      throw new Error(err)
    }
  }
}


export function addBTM(btm) {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_ADD_START' })

    const contract = getState().contract
    console.log('ADD', contract)
    try {
      dispatch({ type: 'SWAP_ADD_SUCCESS' })
    } catch (e) {

      dispatch({ type: 'SWAP_ADD_FAILURE' })
    }
  }
}

export function editBTM(btm) {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_EDIT_START' })

    const contract = getState().contract
    console.log('EDIT', contract)
    try {
      dispatch({ type: 'SWAP_EDIT_SUCCESS' })
    } catch (e) {

      dispatch({ type: 'SWAP_EDIT_FAILURE' })
    }
  }
}

export function withdraw() {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_WITHDRAW_START' })

    const contract = getState().contract
    console.log('WITHDRAW')
    try {
      dispatch({ type: 'SWAP_WITHDRAW_SUCCESS' })
    } catch (e) {

      dispatch({ type: 'SWAP_WITHDRAW_FAILURE' })
    }
  }
}

export function transfer() {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_TRANSFER_START' })

    const contract = getState().contract
    console.log('TRANSFER')
    try {
      dispatch({ type: 'SWAP_TRANSFER_SUCCESS' })
    } catch (e) {

      dispatch({ type: 'SWAP_TRANSFER_FAILURE' })
    }
  }
}

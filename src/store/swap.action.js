import { Web3Provider, SwapService } from 'services'
import { initNetworkAction } from './network.action'

export function swapInit() {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_INIT_START' })
    const { address, name: networkName, signer } = getState().network
    try {
      const service = new SwapService(signer, address, networkName)
      await service.findDeployedContractAddress()
      dispatch({
        type: 'SWAP_INIT_SUCCESS',
        payload: {
          service,
          signer,
        }
      })
      // @TODO getContract relies on service in store.
      // Remove race condition.
      if (service.hasContract) {
        console.log('Found')
        dispatch(getContract(service.lastestContractAddress()))
      }
    } catch (e) {
      throw new Error(e)
      dispatch({ type: 'SWAP_INIT_FAILURE' })
    }
  }
}

export function deploy() {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_DEPLOY_START' })
    const { service } = getState().contract
    try {
      const deployed = await service.deploy()
      dispatch({
        type: 'SWAP_DEPLOY_SUCCESS',
        payload: {
          address: deployed.address
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

export function getContract(address) {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_ATTACH_START' })
    const { service } = getState().contract
    try {
      const deployed = await service.attach(address)
      dispatch({
        type: 'SWAP_ATTACH_SUCCESS',
        payload: {
          address: deployed.address
        }
      })
    } catch (err) {
      dispatch({ type: 'SWAP_ATTACH_FAILURE' })
      throw new Error(err)
    }
  }
}


export function addBTM(btm) {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_ADD_START' })
    const { service } = getState().contract
    console.log('ADD', service)
    try {
      await service.addBTM(btm)
      dispatch({ type: 'SWAP_ADD_SUCCESS' })
    } catch (e) {

      dispatch({ type: 'SWAP_ADD_FAILURE' })
    }
  }
}

export function editBTM(btm) {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_EDIT_START' })
    const { service } = getState().contract
    console.log('EDIT', service)
    try {
      dispatch({ type: 'SWAP_EDIT_SUCCESS' })
    } catch (e) {
      dispatch({ type: 'SWAP_EDIT_FAILURE' })
    }
  }
}

export function withdraw({ amount, currency }) {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_WITHDRAW_START' })
    const { service } = getState().contract
    try {
      await service.withdraw(amount, currency)
      dispatch({ type: 'SWAP_WITHDRAW_SUCCESS' })
    } catch (e) {
      throw new Error(e)
      dispatch({ type: 'SWAP_WITHDRAW_FAILURE' })
    }
  }
}

export function transferOwnership(owner) {
  return async (dispatch, getState) => {
    dispatch({ type: 'SWAP_TRANSFER_START' })
    const { service } = getState().contract
    console.log('TRANSFER', service)
    try {
      await service.transferOwnership(owner).then(console.log)

      dispatch({ type: 'SWAP_TRANSFER_SUCCESS' })
    } catch (e) {
      dispatch({ type: 'SWAP_TRANSFER_FAILURE' })
      throw new Error(e)
    }
  }
}

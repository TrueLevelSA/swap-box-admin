import { Web3Service } from 'services'
import { initContract } from './contract.action'

export function initSystem(type) {

  return async dispatch => {
    if (type === 'METAMASK') {
      try {
        const service = await new Web3Service().init(window.web3)

        await dispatch(setService(service))
        await dispatch(setAuth(service))

      } catch (err) {
        dispatch({ type: 'AUTH_FAILURE' })
        throw new Error(err)
      }
    }
  }
}

function setService(service) {
  return async dispatch => {
    dispatch({
      type: 'SYSTEM_INIT_WEB3',
      payload: { web3Service: service }
    })
  }
}

function setAuth(service) {
  return async dispatch => {
    const signer = await service.getSigner()
    const networkName = await service.getNetwork()
    const address = await signer.getAddress()

    dispatch({
      type: 'AUTH_SUCCESS',
      payload: {
        userAccount: address,
        networkName,
      }
    })
  }
}

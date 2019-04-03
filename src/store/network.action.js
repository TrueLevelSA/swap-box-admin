import { Web3Provider } from 'services'

export function initNetworkAction(type) {
  return async (dispatch) => {
    if (type === 'METAMASK') {
      try {
        const provider = await new Web3Provider().init(window.web3)
        const signer = provider.getSigner()
        const networkName = provider.getNetwork()
        const address = await signer.getAddress()
        dispatch({
          type: 'AUTH_SUCCESS',
          payload: {
            status: 'authenticated',
            provider,
            address,
            signer,
            networkName,
          }
        })
      } catch (err) {
        dispatch({
          type: 'AUTH_FAILURE',
          payload: { status: 'disconnected' }
        })
        throw new Error(err)
      }
    }
  }
}

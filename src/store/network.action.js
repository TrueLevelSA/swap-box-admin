import { Web3Provider } from 'services'

export function initNetworkAction(type, injectedWeb3) {
  return async (dispatch) => {
    if (type === 'METAMASK') {
      try {
        const provider = await new Web3Provider(injectedWeb3).init()
        const address = provider.getAccount()
        const networkName = provider.getNetwork()
        window.ethers = provider.getProvider()
        dispatch({
          type: 'AUTH_SUCCESS',
          payload: {
            status: 'authenticated',
            provider,
            address,
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


const initialState = {
  provider: {},
  name: '',
  address: '',
  status: false,
  signer: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'AUTH_SUCCESS': {
      const { status, provider, address, signer, networkName } = payload
      return {
        ...state,
        status,
        provider,
        address,
        signer,
        name: networkName
      }
    }
    case 'AUTH_FAILURE': {
      const { status } = payload
      return {
        ...state,
        status
      }
    }
    default:
      return state
  }
}

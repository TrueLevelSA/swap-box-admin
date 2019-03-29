
const initialState = {
  provider: {},
  network: {
    name: '',
    address: '',
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'AUTH_SUCCESS': {
      const { status, provider, address, networkName } = payload
      return {
        ...state,
        status,
        provider,
        address,
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

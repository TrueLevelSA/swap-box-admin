
const initialState = {
  networkName: '',
  authStatus: '',
  userAccount: '',
  isMainnet: false,
  isAuthenticated: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'AUTH_SUCCESS': {
      const { networkName, userAccount } = payload
      const isMainnet = networkName === 'mainnet' // @TODO create utility with case insensitive check
      return {
        ...state,
        networkName,
        userAccount,
        isMainnet,
        authStatus: 'authenticated',
        isAuthenticated: true
      }
    }
    case 'AUTH_FAILURE': {
      return {
        ...state,
        isAuthenticated: false,
        authStatus: 'disconnected'
      }
    }
    default:
      return state
  }
}

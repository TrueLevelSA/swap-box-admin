
const initialState = {
  web3Service: {},
  contract: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SYSTEM_INIT_WEB3': {
      const { web3Service } = payload
      return { ...state, web3Service }
    }
    case 'SYSTEM_INIT_CONTRACT': {
      const { contract } = payload
      return { ...state, contract }
    }
    default:
      return state
  }
}


const initialState = {
  factory: {},
  contract: {},
  signer: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SWAP_INIT_START': {
      return state
    }
    case 'SWAP_INIT_SUCCESS': {
      const { factory, signer } = payload
      return {
        ...state,
        factory,
        signer,
      }
    }
    case 'SWAP_DEPLOY_START': {
      return state
    }
    case 'SWAP_DEPLOY_SUCCESS': {
      const { contract } = payload
      return {
        ...state,
        contract,
      }
    }
    case 'SWAP_DEPLOY_FAILURE': {
      return state
    }
    case 'SWAP_CONNECT_START': {
      return state
    }
    case 'SWAP_CONNECT_SUCCESS': {
      const { contract } = payload
      return {
        ...state,
        contract,
      }
    }
    case 'SWAP_CONNECT_FAILURE': {
      return state
    }
    case 'SWAP_TRANSFER_START': {
      return state
    }
    case 'SWAP_TRANSFER_SUCCESS': {
      const { } = payload
      return {
        ...state,
      }
    }
    case 'SWAP_TRANSFER_FAILURE': {
      return state
    }
    default:
      return state
  }
}

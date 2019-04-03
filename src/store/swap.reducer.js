
const initialState = {
  service: {},
  contract: {},
  signer: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SWAP_INIT_START': {
      return state
    }
    case 'SWAP_INIT_SUCCESS': {
      const { service, signer } = payload
      return {
        ...state,
        service,
        signer,
      }
    }
    case 'SWAP_DEPLOY_START': {
      return state
    }
    case 'SWAP_DEPLOY_SUCCESS': {
      const { contract, address} = payload
      return {
        ...state,
        address,
      }
    }
    case 'SWAP_DEPLOY_FAILURE': {
      return state
    }
    case 'SWAP_ATTACH_START': {
      return state
    }
    case 'SWAP_ATTACH_SUCCESS': {
      const { contract, address } = payload
      return {
        ...state,
        address,
      }
    }
    case 'SWAP_ATTACH_FAILURE': {
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

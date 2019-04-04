
const initialState = {
  service: {},
  contract: {},
  signer: {},
  btms: [
    { address: '0x909f74Ffdc223586d0d30E78016E707B6F5a45E2' , buy: '0.23', sell: '0.53' },
    { address: '0x909f74Fassadsd86d0d30E78016E707B6F5a45E2' , buy: '0.23', sell: '0.53' },
    { address: '0x909f74Ffdcasdsdsdsda0E78016E707B6F5a45E2' , buy: '0.23', sell: '0.53' }
  ]
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

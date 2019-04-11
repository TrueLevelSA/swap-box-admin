
const initialState = {
  hasContract: false,
  btms: [
    {
      address: '0x909f74Ffdc223586d0d30E78016E707B6F5a45E2' ,
      buy: '0.23', // BN.js
      sell: '0.53' // BN.js
    }
  ],
  contractAddress: '',
  contractBalance: {
    eth: null,        // It will actually be a BN.js provided by ether.js
    baseToken: null,  // It will actually be a BN.js provided by ether.js
  },
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_BTMS': {
      const { btms } = payload
      return { ...state, btms }
    }
    case 'SET_CONTRACT_BALANCE': {
      const { eth, baseToken } = payload
      return { ...state, contractBalance: { eth, baseToken } }
    }
    case 'SET_CONTRACT_ADDRESS': {
      const { hasContract, contractAddress, btms } = payload
      console.log(btms)
      return {
        ...state,
        hasContract,
        contractAddress,
        btms
      }
    }
    case 'ADD_SUCCESS': {
      return state
    }
    case 'EDIT_SUCCESS': {
      return state
    }
    case 'TRANSFER_SUCCESS': {
      return state
    }
    case 'WITHDRAW_SUCCESS': {
      return state
    }
    case 'ATTACH_SUCCESS': {
      return state
    }

    default:
      return state
  }
}

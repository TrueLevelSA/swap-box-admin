import { utils } from 'ethers';

const initialState = {
  hasContract: false,
  btms: [
    {
      address: '0x909f74Ffdc223586d0d30E78016E707B6F5a45E2',
      buy: '0.23', // BN.js
      sell: '0.53', // BN.js
    },
  ],
  contractAddress: undefined,
  contractBalance: {
    eth: utils.parseUnits('0.00', 18),
    baseToken: utils.parseUnits('0.00', 18),
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_BTMS': {
      const { btms } = payload;
      return { ...state, btms };
    }
    case 'SET_CONTRACT_BALANCE': {
      const { eth, baseToken } = payload;
      return { ...state, contractBalance: { eth, baseToken } };
    }
    case 'SET_CONTRACT_ADDRESS': {
      const { hasContract, contractAddress, btms } = payload;
      return {
        ...state,
        hasContract,
        contractAddress,
        btms,
      };
    }
    case 'ADD_SUCCESS': {
      return state;
    }
    case 'EDIT_SUCCESS': {
      return state;
    }
    case 'TRANSFER_SUCCESS': {
      return state;
    }
    case 'WITHDRAW_SUCCESS': {
      return state;
    }
    case 'ATTACH_SUCCESS': {
      return state;
    }

    default:
      return state;
  }
};

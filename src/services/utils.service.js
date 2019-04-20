import { utils } from 'ethers'

export const getEtherscanLink = (networkType, hash) => {
  let url;
  switch(networkType) {
    case 'mainnet':
      url = 'https://etherscan.io'
      break;
    case 'ropsten':
      url = 'https://ropsten.etherscan.io'
      break;
    default:
      url = 'https://example.com'
  }
  return `${url}/${hash}`
}

export const formatCurrency = (wei) => {
  return utils.formatUnits(wei, 18, { commify: true })
}

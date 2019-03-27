import React from 'react'
import { Box, Heading } from 'grommet'

import { WalletConnect } from 'components'

const options = [
  {
    type: 'metamask',
    active: true,
    action: () => { console.log('hello') },
  },
  {
    type: 'ledger',
    active: false,
    action: () => {},
  },
  {
    type: 'trezor',
    active: false,
    action: () => {},
  }
]

export default () => (
  <Box pad="medium" align="center" justify="center" fill>
    <Box>
      <Heading level="2">Connect to a wallet to get started</Heading>
    </Box>
    <Box gap="medium">
      {
        options.map((wallet, idx) => (
          <WalletConnect
            key={`wallet-${idx}`}
            type={wallet.type}
            active={wallet.active}
            onClick={wallet.action}
          />
        ))
      }
    </Box>
  </Box>
)

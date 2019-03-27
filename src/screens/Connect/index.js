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
  <>
    <Box align="center" justify="center" fill>
      <Box>
        <Heading level="3" textAlign="center">
          Get started <br/> by connecting one of <br/> the wallets below
        </Heading>
      </Box>
      <Box gap="medium" margin={{ top: 'large' }}>
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
  </>
)

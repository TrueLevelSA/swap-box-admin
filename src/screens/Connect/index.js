import React, { Component, useState } from 'react'
import { Box, Heading } from 'grommet'
import { connect } from 'react-redux'

import { initSystem } from 'store'
import { WalletConnect } from 'components'

class Connect extends Component {

  state = {
    options: [
      {
        type: 'metamask',
        active: true,
        action: async () => {
          try {
            await this.props.initSystem('METAMASK')
          } catch (e) {
            // Emit auth failure notification
            console.debug('Auth failed')
          }
        },
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
  }

  render() {
    return (
      <>
        <Box align="center" justify="center" fill>
          <Box>
            <Heading level="3" textAlign="center">
              Get started <br/> by connecting one of <br/> the wallets below.
            </Heading>
          </Box>
          <Box gap="medium" margin={{ top: 'large' }}>
            {
              this.state.options.map((wallet, idx) => (
                <WalletConnect
                  key={`wallet-${idx}`}
                  type={wallet.type}
                  active={wallet.active}
                  onClick={wallet.action.bind(this)}
                />
              ))
            }
          </Box>
        </Box>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  initSystem: (type) => dispatch(initSystem(type))
})

export default connect(
  null,
  mapDispatchToProps
)(Connect)

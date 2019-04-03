import React, { Component, useState } from 'react'
import { Box, Heading } from 'grommet'
import { connect } from 'react-redux'

import { initNetworkAction } from 'store/network.action'
import { WalletConnect } from 'components'
import { Web3Provider } from 'services'

class Connect extends Component {

  state = {
    options: [
      {
        type: 'metamask',
        active: true,
        action: async () => {
          try {
            await this.props.initNetworkAction('METAMASK')
            this.props.history.push('/dashboard')
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

const mapStateToProps = ({ network }) => ({
  provider: network.provider,
  network: network
})

const mapDispatchToProps = dispatch => ({
  initNetworkAction: (type) => dispatch(initNetworkAction(type))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connect)

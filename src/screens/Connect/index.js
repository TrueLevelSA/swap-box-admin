import React, { Component } from 'react'
import { Box, Heading } from 'grommet'
import { connect } from 'react-redux'

import { initNetworkAction } from 'store/network.action'
import { WalletConnect } from 'components'

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
            console.debug('Auth failed')
            // Emit auth failure notification
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
              Get started <br/> by connecting one of <br/> the wallets below
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

const mapStateToProps = ({ provider }) => ({
  provider
})

const mapDispatchToProps = dispatch => ({
  initNetworkAction: (web3) => dispatch(initNetworkAction(web3))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connect)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Box, Heading } from 'grommet';

import { initSystem } from 'store';
import { WalletConnect } from 'components';

class Connect extends Component {
  state = {
    options: [
      {
        type: 'metamask',
        active: true,
        action: async () => {
          try {
            await this.props.initSystem('METAMASK');
          } catch (e) {
            // @TODO: Emit auth failure notification instead
            console.debug('Auth failed');
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
      },
    ],
  };

  render() {
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <>
        <Box align="center" justify="center" fill>
          <Box>
            <Heading level="3" textAlign="center">
              Get started <br /> by connecting one of <br /> the wallets below.
            </Heading>
          </Box>
          <Box gap="medium" margin={{ top: 'large' }}>
            {this.state.options.map((wallet, idx) => (
              <WalletConnect
                key={`wallet-${idx}`}
                type={wallet.type}
                active={wallet.active}
                onClick={wallet.action.bind(this)}
              />
            ))}
          </Box>
        </Box>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  initSystem: type => dispatch(initSystem(type)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connect);

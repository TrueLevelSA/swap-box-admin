import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from 'grommet';

import { theme } from 'theme';
import { EthAddress, QrCode, Currency } from 'components';
import { AdminPanel, Deploy } from './';
import { initContract } from 'store';

class Dashboard extends Component {
  async componentDidMount() {
    await this.props.contractInit();
  }

  render() {
    const { contractBalance, contractAddress, hasContract } = this.props;
    const { eth, baseToken } = contractBalance;

    return (
      <>
        <Box
          height={`${theme.qrCode.container}px`}
          margin={{ vertical: 'small' }}
          direction="row"
          justify="between"
        >
          <Box>
            <QrCode address={contractAddress} />
            <EthAddress address={contractAddress} />
          </Box>
          <Box>
            <Currency
              color="dark-1"
              label="EthBalance"
              value={eth}
              currency="ETH"
              size="large"
            />
            <Currency
              color="dark-3"
              label="BaseToken"
              value={baseToken}
              currency="xCHF"
            />
          </Box>
        </Box>
        <Box margin={{ vertical: 'small' }} fill>
          {hasContract ? <AdminPanel /> : <Deploy />}
        </Box>
      </>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  contractAddress: data.contractAddress, // @TODO: currently displays account. Should be contract.
  contractBalance: data.contractBalance,
  hasContract: data.hasContract,
});

const mapDispatchToProps = dispatch => ({
  contractInit: () => dispatch(initContract()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

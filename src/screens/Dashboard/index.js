import React, { Component } from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from "react-router-config"
import { Box } from 'grommet'

import { theme } from 'theme'
import { EthAddress, QrCode, Currency } from 'components'
import { swapInit, getContract } from 'store/swap.action'
import { initNetworkAction } from 'store/network.action'

class Dashboard extends Component {
  async componentDidMount() {
    const { authenticated, initNetworkAction, contractInit, getContract } = this.props
    if (!authenticated) {
      await initNetworkAction('METAMASK')
    }
    await contractInit()
    await getContract()
  }

  render() {
    const { route, contractAddress = '' } = this.props
    return (
      <>
        <Box
        height={`${theme.qrCode.container}px`}
        margin={{ vertical: 'medium'}}
        direction="row"
        justify="between">
          <Box>
            <QrCode address={contractAddress} />
            <EthAddress address={contractAddress} />
          </Box>
          <Box>
            <Currency color="dark-1" label="EthBalance" value="100.0002" currency="ETH" size="large"/>
            <Currency color="dark-3" label="BaseToken" value="2345.0003" currency="xCHF"/>
          </Box>
        </Box>
        <Box margin={{ vertical: 'medium'}} fill>
          { renderRoutes(route.routes) }
        </Box>
      </>
    )
  }

}

const mapStateToProps = ({ contract }) => ({
  contractAddress: contract.address // @TODO currently displays account. Should be contract.
})

const mapDispatchToProps = dispatch => ({
  contractInit: () => dispatch(swapInit()),
  getContract: () => dispatch(getContract()),
  initNetworkAction: (type) => dispatch(initNetworkAction(type))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

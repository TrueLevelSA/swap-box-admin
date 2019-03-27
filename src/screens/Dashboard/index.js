import React from 'react'
import { renderRoutes } from "react-router-config"
import { Box } from 'grommet'
import styled from 'styled-components'


import { QrCode, Currency } from 'components'

const SContractInfo = styled('div')`
  display: flex;
  justify-content: space-between;
`

const Dashboard = ({ route }) => (
  <Box pad="medium" fill>
    <Box
      margin={{ vertical: 'medium'}}
      direction="row"
      justify="between">
      <QrCode address="alsjdalsjd" />
      <ul>
        <li><Currency label="EthBalance" value="100" currency="ETH"/></li>
        <li><Currency label="BaseToken" value="2345" currency="xCHF"/></li>
      </ul>
    </Box>
    <Box margin={{ vertical: 'medium'}} fill>
      { renderRoutes(route.routes) }
    </Box>
  </Box>
)

export default Dashboard

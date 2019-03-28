import React from 'react'
import styled from 'styled-components'
import { renderRoutes } from "react-router-config"
import { Box } from 'grommet'

import { QrCode, Currency } from 'components'

const SContractInfo = styled('div')`
  display: flex;
  justify-content: space-between;
`

const addr = '0x909f74Ffdc223586d0d30E78016E707B6F5a45E2'

const Dashboard = ({ route }) => (
  <>
    <Box
      margin={{ vertical: 'medium'}}
      direction="row"
      justify="between">
      <QrCode address={addr} />
      <ul>
        <li><Currency label="EthBalance" value="100" currency="ETH"/></li>
        <li><Currency label="BaseToken" value="2345" currency="xCHF"/></li>
      </ul>
    </Box>
    <Box margin={{ vertical: 'medium'}} fill>
      { renderRoutes(route.routes) }
    </Box>
  </>
)

export default Dashboard

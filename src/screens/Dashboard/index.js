import React from 'react'
import styled from 'styled-components'
import { renderRoutes } from "react-router-config"
import { Box } from 'grommet'

import { theme } from 'theme'
import { EthAddress, QrCode, Currency } from 'components'

const SContractInfo = styled('div')`
  display: flex;
  justify-content: space-between;
`

const addr = '0x909f74Ffdc223586d0d30E78016E707B6F5a45E2'

const Dashboard = ({ route }) => (
  <>
    <Box
      height={`${theme.qrCode.size + 100}px`}
      margin={{ vertical: 'medium'}}
      direction="row"
      justify="between">
      <Box>
        <QrCode address={addr} />
        <EthAddress address={addr} />
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

export default Dashboard

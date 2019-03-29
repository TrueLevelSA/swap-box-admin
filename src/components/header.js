import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'grommet'
import styled from 'styled-components'

import { EthAddress } from 'components'
import { pathByName, routes } from 'routes'
import { theme } from 'theme'

const SLink = styled(Link)`
  text-decoration: none;
  color: ${theme.black};
`
const SInlineUl = styled('ul')`
  list-style: none;
  & li {
    display: inline;
    margin-left: 1em;
  }
`

const SUl = styled('ul')`
  list-style: none;
`

export default ({ network, address }) => {
  const paths = pathByName(routes)
  return (
    <Box direction="row" align="center" justify="between">
      <Box justify="center">
        <h1><SLink to="/">SwapBox</SLink></h1>
      </Box>
      <Box>
        <SInlineUl>
          <li><Link to={paths.deploy}>Deploy</Link></li>
          <li><Link to={paths.admin}>Admin</Link></li>
          <li><Link to={paths.connect}>Connect</Link></li>
        </SInlineUl>
      </Box>
      {
        network && (
          <Box>
            <SUl>
              <li>Network: <span style={{ padding: '0 6px' }}>{network}</span></li>
              <li>Address: <EthAddress address={address} /></li>
            </SUl>
          </Box>
        )
      }
    </Box>
)}

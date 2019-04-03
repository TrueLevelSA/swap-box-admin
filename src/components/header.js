import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Text, Heading } from 'grommet'
import styled from 'styled-components'

import { EthAddress } from 'components'
import { pathByName, routes } from 'routes'
import { theme } from 'theme'

const SLink = styled(Link)`
  text-decoration: none;
  color: ${theme.black};
`

export default ({ network, address }) => {
  const paths = pathByName(routes)
  return (
    <Box direction="row" align="center" justify="between">
      <Box justify="center">
        <Heading level={2} margin={{ vertical: "small"}}><SLink to="/">SwapBox</SLink></Heading>
      </Box>
      <Box direction="row" gap="xsmall">
        <Link to={paths.deploy}>Deploy</Link>
        <Link to={paths.admin}>Admin</Link>
        <Link to={paths.connect}>Connect</Link>
      </Box>
      {
        network && (
          <Box>
            <Text size="small">Network: <span style={{ padding: '0 6px' }}>{network}</span></Text>
            <Text size="small">Address: <EthAddress size="small" address={address} /></Text>
          </Box>
        )
      }
    </Box>
)}

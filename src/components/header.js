import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'grommet'
import styled from 'styled-components'

import { Wrapper } from 'components'
import { getPaths, routes } from 'routes'
import { theme } from 'theme'

const SLink = styled(Link)`
  text-decoration: none;
  color: ${theme.black};
`

const Header = () => {
  const paths = getPaths(routes)
  return (
  <Box tag='header' background='light-2' elevation='xs'  >
    <Wrapper>
      <Box
        direction='row'
        align='center'
        justify='between'
        background='light-2'
        pad={{ vertical: 'small', horizontal: 'medium' }}
      >
        <h1><SLink to="/">SwapBox</SLink></h1>
      </Box>
      <ul>
        <li><Link to={paths.deploy}>Deploy</Link></li>
        <li><Link to={paths.admin}>Admin</Link></li>
        <li><Link to={paths.connect}>Connect</Link></li>
      </ul>
    </Wrapper>
  </Box>
)}

export default Header

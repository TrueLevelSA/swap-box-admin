import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'grommet'
import styled from 'styled-components'

import { Wrapper } from 'components'
import Routes from 'routes'
import theme from 'theme'

const SLink = styled(Link)`
  text-decoration: none;
  color: ${theme.black};
`

const Header = () => (
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
        <li><Link to={Routes.deploy.path}>{Routes.deploy.name}</Link></li>
        <li><Link to={Routes.home.path}>{Routes.home.name}</Link></li>
        <li><Link to={Routes.connect.path}>{Routes.connect.name}</Link></li>
      </ul>
    </Wrapper>
  </Box>
)

export default Header

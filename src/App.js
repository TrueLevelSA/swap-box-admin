import React from 'react'
import { renderRoutes } from "react-router-config"
import styled from 'styled-components'
import {
  Box,
  Grid,
  Grommet,
} from 'grommet'

import { Header } from 'components'
import { GrommetTheme, theme } from 'theme'

const Wrapper = ({ children, ...props }) => (
  <Box pad="medium" { ...props } fill>
    { children }
  </Box>
)

const SWrapper = styled(Wrapper)`
  width: ${theme.wrapper.maxWidth};
`

export default ({ route }) => (
  <Grommet theme={GrommetTheme} full>
    <Grid fill rows={['auto', 'flex', `${theme.footer.height}`]} gap="xsmall">
      <Box id="#header" align="center" background="light-3" elevation="xs">
        <SWrapper pad={{ vertical: "small", horizontal: "medium" }}><Header /></SWrapper>
      </Box>
      <Box id="#main" align="center">
        <SWrapper>{ renderRoutes(route.routes) }</SWrapper>
      </Box>
      <Box id="#footer" align="center">
        <SWrapper pad={{ vertical: "small", horizontal: "medium"}}>Footer</SWrapper>
      </Box>
    </Grid>
  </Grommet>
)

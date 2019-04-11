import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  Box,
  Grid,
  Grommet,
} from 'grommet'

import { Header, Footer } from 'components'
import { GrommetTheme, theme } from 'theme'

const Wrapper = ({ children, ...props }) => (
  <Box pad="medium" { ...props } fill>
    { children }
  </Box>
)

const SWrapper = styled(Wrapper)`
  width: ${theme.wrapper.maxWidth};
`

class App extends Component {

  isAdminPanel(pathname) {
    return pathname === '/dashboard/admin'
  }

  render() {
    const { route, networkName, userAccount, location } = this.props

    // Grid has a unintuitive behaviour.
    // When fill is specified it will refuse overflow and sqaush the content.
    // Since we want the footer to be at the bottom of the page without
    // being sticky, we use `minHeight` instead of `fill`
    return (
      <Grommet theme={GrommetTheme} full>
        <Grid
          style={{ minHeight: '100vh' }}
          rows={['auto', 'flex', `${theme.footer.height}`]}
          gap="xsmall">
          <Box
            id="#header"
            align="center"
            background="light-2"
            elevation="xs">
            <SWrapper pad={{ vertical: "xsmall", horizontal: "medium" }}>
              <Header network={networkName} address={userAccount}/>
            </SWrapper>
          </Box>
          <Box
            id="#main"
            align="center">
            <SWrapper>
              { renderRoutes(route.routes) }
            </SWrapper>
          </Box>
          <Box
            id="#footer"
            align="center"
            background="light-1" >
            <SWrapper pad={{ vertical: "small", horizontal: "medium"}}>
              <Footer />
            </SWrapper>
          </Box>
        </Grid>
      </Grommet>
    )
  }

}

const mapStateToProps = ({ auth }) => ({
  networkName: auth.networkName,
  userAccount: auth.userAccount,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

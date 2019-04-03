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

  render() {
    const { route, network, address } = this.props
    return (
      <Grommet theme={GrommetTheme} full>
        <Grid fill rows={['auto', 'flex', `${theme.footer.height}`]} gap="xsmall" alignContent="between">
          <Box id="#header" align="center" background="light-2" elevation="xs">
            <SWrapper pad={{ vertical: "small", horizontal: "medium" }}>
              <Header network={network} address={address}/>
            </SWrapper>
          </Box>
          <Box id="#main" align="center">
            <SWrapper>
              { renderRoutes(route.routes) }
            </SWrapper>
          </Box>
          <Box id="#footer" align="center" background="light-1" >
            <SWrapper pad={{ vertical: "small", horizontal: "medium"}}>
              <Footer />
            </SWrapper>
          </Box>
        </Grid>

      </Grommet>
    )
  }

}

const mapStateToProps = ({ network }) => ({
  network: network.name,
  address: network.address,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

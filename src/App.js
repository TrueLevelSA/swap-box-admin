import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Box, Grid, Grommet } from 'grommet';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GrommetTheme, theme } from 'theme';
import { Header, Footer } from 'components';
import { ModalSwitch } from 'screens';

const Wrapper = ({ children, ...props }) => (
  <Box pad="medium" {...props} fill>
    {children}
  </Box>
);

const SWrapper = styled(Wrapper)`
  width: ${theme.wrapper.maxWidth};
`;
// const SToastContainer = styled(ToastContainer)`
//   top: ${props => `${props.topPosition + 8}px`} !important;
// `

class App extends Component {
  state = {
    headerHeight: 0,
  };

  componentDidMount() {
    const headerHeight = document.getElementById('header').clientHeight;
    this.setState({ headerHeight });
  }

  render() {
    const { route, networkName, userAccount, isAuthenticated } = this.props;
    const { headerHeight } = this.state;
    // Grid has a unintuitive behaviour.
    // When fill is specified it will refuse overflow and sqaush the content.
    // Since we want the footer to be at the bottom of the page without
    // being sticky, we use `minHeight` instead of `fill`
    return (
      <>
        <Grommet theme={GrommetTheme} full>
          <Grid
            style={{ minHeight: '100vh' }}
            rows={['auto', 'flex', `${theme.footer.height}`]}
            gap="xsmall"
          >
            <Box id="header" align="center" background="light-2" elevation="xs">
              <SWrapper pad={{ vertical: 'xsmall', horizontal: 'medium' }}>
                <Header network={networkName} address={userAccount} />
              </SWrapper>
            </Box>
            <Box id="main" align="center">
              <SWrapper>
                <ModalSwitch />
                {renderRoutes(route.routes, { isAuthenticated })}
              </SWrapper>
            </Box>
            <Box id="footer" align="center" background="light-1">
              <SWrapper pad={{ vertical: 'small', horizontal: 'medium' }}>
                <Footer />
              </SWrapper>
            </Box>
          </Grid>
        </Grommet>
        <ToastContainer
          transition={Slide}
          topPosition={headerHeight}
          toastClassName="grommet-toast"
          position={toast.POSITION.TOP_RIGHT}
          draggablePercent={60}
          pauseOnFocusLoss={true}
          pauseOnHover={true}
          autoClose={8000}
        />
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  networkName: auth.networkName,
  userAccount: auth.userAccount,
  isAuthenticated: auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  null
)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader/root';

import { routes } from 'routes';
import { initSystem } from 'store';

class Root extends Component {
  componentDidMount() {
    // Check if we are already authentified with MM.
    // If so initiaslize the app immediately.
    // also, we're in a CRA project so tell linter to ignore global
    // https://facebook.github.io/create-react-app/docs/using-global-variables
    // eslint-disable-next-line
    if (ethereum && ethereum.selectedAddress) {
      this.props.initSystem('METAMASK');
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <>
        <BrowserRouter>
          {renderRoutes(routes, { isAuthenticated })}
        </BrowserRouter>
      </>
    );
  }
}

// Enable react-hot-loader when in development mode
const RootContainer = process.env.NODE_ENV === 'development' ? hot(Root) : Root;

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  initSystem: type => dispatch(initSystem(type)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { hot } from 'react-hot-loader/root'

import { routes } from 'routes'
import { initSystem, initContract } from 'store'

class Root extends Component {
  async componentDidMount() {
    console.log('Root Mounted')
    await this.props.systemInit()
    await this.props.contractInit()
  }

  render() {
    const { isAuthenticated } = this.props
    return (
      <>
        <BrowserRouter>
          { renderRoutes(routes, { isAuthenticated }) }
        </BrowserRouter>
      </>
    )
  }
}

// Enable react-hot-loader when in development mode
const RootContainer = process.env.NODE_ENV === "development"
  ? hot(Root)
  : (Root)

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated
})

const mapDispatchToProps = (dispatch) => ({
  systemInit: () => dispatch(initSystem('METAMASK')),
  contractInit: () => dispatch(initContract())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer)

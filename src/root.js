import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config"
import { hot } from 'react-hot-loader/root'

import { routes } from 'routes'


const Root = () => (
  <BrowserRouter>
    { renderRoutes(routes) }
  </BrowserRouter>
)

// Enable react-hot-loader when in development mode
const RootContainer = process.env.NODE_ENV === "development"
  ? hot(Root)
  : (Root)

export default RootContainer

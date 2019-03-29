import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config"
import { Provider } from 'react-redux'

import 'normalize.css';
import 'styles.css'
import { routes } from 'routes'
import { configureStore } from './store'
import * as serviceWorker from './serviceWorker'

import 'services/web3.service'

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      { renderRoutes(routes) }
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

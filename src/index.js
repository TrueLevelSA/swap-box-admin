import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css';
import 'styles.css'
import Root from 'root'
import { configureStore } from 'store'

import * as serviceWorker from './serviceWorker'
import 'services/web3.service'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Root />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

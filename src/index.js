import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Grommet } from 'grommet';

import 'normalize.css';

import { configureStore } from './store'
import * as serviceWorker from './serviceWorker'
import App from './App'

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Grommet theme={theme}>
        <App />
      </Grommet>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'

import data from './data.reducer'
import system from './system.reducer'
import auth from './auth.reducer'

const rootReducer = combineReducers({
  data,
  auth,
  system,
})


const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
    : compose


export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
}

import { combineReducers } from 'redux'
import network from './network.reducer'
import contract from './swap.reducer'

export default combineReducers({
  network,
  contract
})

import { combineReducers } from 'redux'
import counter from './counter'
import shopper from './shopper'

export default combineReducers({
  counter,
  shopper
})

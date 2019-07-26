import {combineReducers} from 'redux'
import * as cryptoReducer from './crypto'

export default combineReducers(Object.assign(
  cryptoReducer
))

import { combineReducers } from 'redux'
import data from './data'
import modal from './modal'
import menu from './menu'

export default combineReducers({
  data,
  modal,
  menu,
})

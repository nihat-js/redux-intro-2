import {combineReducers} from  'react-redux'
import {counterReducer} from './reducer'
const rootReducer =  combineReducers({
  counterReducer : counterReducer
})
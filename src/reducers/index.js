import { combineReducers } from 'redux'
import responses from './responses'
import questions from './questions'

const rootReducer = combineReducers({
  responses,
  questions,
})

export default rootReducer
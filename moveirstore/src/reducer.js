import { combineReducers } from 'redux'
import moviesReducer from './reducers'

const reducer = combineReducers({
  movies: moviesReducer
})

export default reducer
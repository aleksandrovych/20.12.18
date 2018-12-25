import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import moviesReducer from './movies'

const rootReducer = (history) => combineReducers({
  movies: moviesReducer,
  router: connectRouter(history)
})

export default rootReducer
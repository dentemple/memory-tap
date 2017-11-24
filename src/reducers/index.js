import { combineReducers } from 'redux'
import games from './games'
import gameSettings from './gameSettings'
import padSettings from './padSettings'

const reducers = combineReducers({
  gameSettings,
  games,
  padSettings
})

export default reducers

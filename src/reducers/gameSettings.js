import { actions } from '../types'

const initialState = {
  isLive: false,
  playerTurn: false,
  strict: false,
  maxRounds: 3
}

function gameSettings(state = initialState, action) {
  switch (action.type) {
    case actions.INITIALIZE_GAME:
      return {
        ...state,
        ...initialState
      }
    case actions.START_GAME:
      return {
        ...state,
        isLive: true,
        playerTurn: false
      }

    case actions.CLEAR_GAME:
      return {
        ...state,
        isLive: false
      }

    default:
      return state
  }
}

export default gameSettings

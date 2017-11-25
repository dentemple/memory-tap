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

    case actions.PASS_CONTROL_TO_PLAYER:
      return {
        ...state,
        playerTurn: true
      }

    case actions.PASS_CONTROL_TO_COMPUTER:
      return {
        ...state,
        playerTurn: false
      }

    default:
      return state
  }
}

export default gameSettings

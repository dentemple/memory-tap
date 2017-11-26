import { actions } from '../types'

const initialState = {
  isLive: false,
  playerTurn: false,
  strict: false,
  maxRounds: 20
}

function gameSettings(state = initialState, action) {
  switch (action.type) {
    case actions.INITIALIZE_GAME:
      return {
        ...state,
        isLive: false,
        playerTurn: false,
        maxRounds: 4
      }
    case actions.START_GAME:
      return {
        ...state,
        isLive: true,
        playerTurn: false
      }

    case actions.END_GAME:
      return {
        ...state,
        isLive: false,
        playerTurn: false
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

    case actions.TOGGLE_STRICT_MODE:
      return {
        ...state,
        strict: !state.strict
      }

    default:
      return state
  }
}

export default gameSettings

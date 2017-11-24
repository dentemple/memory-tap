import { actions } from '../types'

const initialState = {
  gameCount: 0,
  currentGame: [],
  allGames: []
}

function games(state = initialState, action) {
  switch (action.type) {
    case actions.INITIALIZE_GAME:
      return {
        ...state,
        ...initialState
      }

    case actions.CLEAR_GAME:
      return {
        ...state,
        gameCount: state.gameCount + 1,
        allGames: [...state.allGames, state.currentGame],
        currentGame: []
      }

    case actions.GENERATE_MOVE:
      return {
        ...state,
        currentGame: [...state.currentGame, action.name]
      }

    default:
      return state
  }
}

export default games

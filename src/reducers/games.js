import { actions } from '../types'

const initialState = {
  gameCount: 0,
  currentGame: [],
  playerMoves: [],
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
        allGames: [
          ...state.allGames,
          {
            isWin: action.isWin,
            game: [...state.currentGame]
          }
        ],
        currentGame: [],
        playerMoves: []
      }

    case actions.GENERATE_MOVE:
      return {
        ...state,
        currentGame: [...state.currentGame, action.pad]
      }

    case actions.ADD_PLAYER_MOVE:
      return {
        ...state,
        playerMoves: [...state.playerMoves, action.name]
      }

    default:
      return state
  }
}

export default games

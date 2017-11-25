import { actions } from '../types'

const initialState = {
  gameCount: 0,
  currentGame: [],
  playerMoves: [],
  allGames: [],
  allResults: []
}

function games(state = initialState, action) {
  switch (action.type) {
    case actions.INITIALIZE_GAME:
      return {
        ...state,
        currentGame: [],
        gameCount: 0,
        playerMoves: []
      }

    case actions.END_GAME:
      return {
        ...state,
        gameCount: state.gameCount + 1,
        allGames: [...state.allGames, [...state.currentGame]],
        allResults: [...state.allResults, action.result],
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

    case actions.EMPTY_PLAYER_MOVES:
      return {
        ...state,
        playerMoves: []
      }

    default:
      return state
  }
}

export default games

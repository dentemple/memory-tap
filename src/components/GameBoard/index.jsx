import { connect } from 'react-redux'
import { selectRandomPad } from '../../util'
import Presentational from './Presentational'

import {
  initializeGame,
  applyHighlight,
  removeHighlight,
  startGame,
  endGame,
  generateMove,
  passControlToPlayer,
  passControlToComputer,
  addPlayerMove,
  emptyPlayerMoves,
  toggleStrictMode,
  repeatAttempt
} from '../../actions'

const mapStateToProps = ({ padSettings, gameSettings, games }) => ({
  // From gameSettings
  isLive: gameSettings.isLive,
  playerTurn: gameSettings.playerTurn,
  maxRounds: gameSettings.maxRounds,
  strict: gameSettings.strict,
  // From padSettings
  topLeft: padSettings.topLeft,
  topRight: padSettings.topRight,
  bottomLeft: padSettings.bottomLeft,
  bottomRight: padSettings.bottomRight,
  //From games
  playerMoves: games.playerMoves,
  currentGame: games.currentGame,
  gameResult: games.allResults
    ? games.allResults[games.allResults.length - 1]
    : ''
})

const mapDispatchToProps = dispatch => {
  return {
    initializeGame: () => {
      dispatch(initializeGame())
    },

    renderMove: (pad, playerTurn = false) => {
      if (playerTurn) {
        dispatch(addPlayerMove(pad.name))
      }
      dispatch(applyHighlight(pad))
      pad.audio.play()
      setTimeout(() => {
        dispatch(removeHighlight(pad))
      }, playerTurn ? 300 : 600)
    },

    startGame: () => {
      dispatch(initializeGame())
      dispatch(startGame())
      dispatch(generateMove(selectRandomPad()))
    },

    endGame: (isWin = false) => {
      dispatch(endGame(isWin))
    },

    passControlToPlayer: () => {
      dispatch(passControlToPlayer())
    },

    passControlToComputer: () => {
      dispatch(passControlToComputer())
      dispatch(emptyPlayerMoves())
      setTimeout(() => {
        dispatch(generateMove(selectRandomPad()))
      }, 1000)
    },

    toggleStrictMode: () => {
      dispatch(toggleStrictMode())
    },

    repeatAttempt: () => {
      dispatch(repeatAttempt())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentational)

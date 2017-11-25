import { connect } from 'react-redux'
import { selectRandomPad } from '../../util'
import Presentational from './Presentational'

import {
  applyHighlight,
  removeHighlight,
  startGame,
  clearGame,
  generateMove,
  passControlToPlayer,
  passControlToComputer,
  addPlayerMove
} from '../../actions'

const mapStateToProps = ({ padSettings, gameSettings, games }) => ({
  isLive: gameSettings.isLive,
  playerTurn: gameSettings.playerTurn,
  playerMoves: games.playerMoves,
  topLeft: padSettings.topLeft,
  topRight: padSettings.topRight,
  bottomLeft: padSettings.bottomLeft,
  bottomRight: padSettings.bottomRight,
  currentGame: games.currentGame
})

const mapDispatchToProps = dispatch => {
  return {
    renderMove: (pad, playerTurn = false) => {
      if (playerTurn) {
        dispatch(addPlayerMove(pad.name))
      }
      dispatch(applyHighlight(pad))
      setTimeout(() => {
        dispatch(removeHighlight(pad))
      }, playerTurn ? 300 : 600)
    },

    startGame: () => {
      dispatch(startGame())
      dispatch(generateMove(selectRandomPad()))
    },

    clearGame: () => {
      dispatch(clearGame())
    },

    passControlToPlayer: () => {
      dispatch(passControlToPlayer())
    },

    passControlToComputer: () => {
      dispatch(passControlToComputer())
      dispatch(generateMove(selectRandomPad()))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentational)

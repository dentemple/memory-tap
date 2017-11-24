import { connect } from 'react-redux'
import { selectRandomPad } from '../../util'
import Presentational from './Presentational'

import {
  applyHighlight,
  removeHighlight,
  startGame,
  clearGame,
  generateMove
} from '../../actions'

const mapStateToProps = ({ padSettings, gameSettings, games }) => ({
  isLive: gameSettings.isLive,
  playerTurn: gameSettings.playerTurn,
  topLeft: padSettings.topLeft,
  topRight: padSettings.topRight,
  bottomLeft: padSettings.bottomLeft,
  bottomRight: padSettings.bottomRight,
  currentGame: games.currentGame
})

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (pad, playerTurn) => {
      dispatch(applyHighlight(pad))
      setTimeout(() => {
        dispatch(removeHighlight(pad))
      }, playerTurn ? 300 : 800)
    },

    startGame: () => {
      dispatch(startGame())
      dispatch(generateMove(selectRandomPad()))
    },

    clearGame: () => {
      dispatch(clearGame())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentational)

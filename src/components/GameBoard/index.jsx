import React, { Component } from 'react'
import Aux from 'react-aux'
import { connect } from 'react-redux'

// import ReduxTesting from '../ReduxTesting'
import { applyHighlight, removeHighlight } from '../../actions'

import GameRow from './GameRow'
import GamePad from './GamePad'
import Counter from './Counter'
import StartButton from './StartButton'

class GameBoard extends Component {
  handleCounter = () => {
    return this.props.isLive ? 3 : 'S'
  }
  render() {
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      handleClick,
      playerTurn,
      isLive
    } = this.props
    return (
      <Wrapper>
        <GameRow>
          <GamePad
            pad={topLeft}
            callback={handleClick}
            playerTurn={playerTurn}
          />
          <GamePad
            pad={topRight}
            callback={handleClick}
            playerTurn={playerTurn}
          />
        </GameRow>
        <GameRow>
          <Counter value={this.handleCounter()} />
        </GameRow>
        <GameRow>
          <GamePad
            pad={bottomLeft}
            callback={handleClick}
            playerTurn={playerTurn}
          />
          <GamePad
            pad={bottomRight}
            callback={handleClick}
            playerTurn={playerTurn}
          />
        </GameRow>
        <GameRow>
          <StartButton isLive={isLive} />
        </GameRow>
      </Wrapper>
    )
  }
}

const Wrapper = ({ children }) => (
  <Aux>
    <form onSubmit={e => e.preventDefault}>{children}</form>
  </Aux>
)

const mapStateToProps = ({ padSettings, gameSettings }) => ({
  isLive: gameSettings.isLive,
  playerTurn: gameSettings.playerTurn,
  topLeft: padSettings.topLeft,
  topRight: padSettings.topRight,
  bottomLeft: padSettings.bottomLeft,
  bottomRight: padSettings.bottomRight
})

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (pad, playerTurn) => {
      dispatch(applyHighlight(pad))
      setTimeout(() => {
        dispatch(removeHighlight(pad))
      }, playerTurn ? 300 : 800)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)

import React, { Component } from 'react'
import Aux from 'react-aux'

import Row from './Row'
import GamePad from './GamePad'
import MoveCounter from './MoveCounter'
import StartButton from './StartButton'
import ReduxTesting from '../../ReduxTesting'

class GameBoard extends Component {
  constructor() {
    super()
    this.state = {
      playerTurn: false,
      isLive: false,
      currentGame: [],
      playerMoves: [],
      moveCount: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.playerTurn !== nextProps.playerTurn) {
      this.setState({
        playerTurn: nextProps.playerTurn
      })
    }

    if (this.state.isLive !== nextProps.isLive) {
      this.setState({
        isLive: nextProps.isLive
      })
    }

    if (this.state.currentGame !== nextProps.currentGame) {
      this.setState({
        currentGame: nextProps.currentGame,
        moveCount: nextProps.currentGame.length
      })
    }
  }

  componentWillUnmount() {
    this.props.clearGame()
  }

  render() {
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      handleClick,
      startGame
    } = this.props

    const { isLive, playerTurn, moveCount } = this.state

    return (
      <Wrapper>
        <Row>
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
        </Row>
        <Row>
          <MoveCounter value={moveCount} />
        </Row>
        <Row>
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
        </Row>
        <Row>
          <StartButton isLive={isLive} callback={startGame} />
        </Row>
      </Wrapper>
    )
  }
}

const Wrapper = ({ children }) => (
  <Aux>
    <form onSubmit={e => e.preventDefault}>{children}</form>
    <ReduxTesting />
  </Aux>
)

export default GameBoard

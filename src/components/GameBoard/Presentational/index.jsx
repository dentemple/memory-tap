import React, { Component } from 'react'

import {
  delayedLoopExecution,
  arrayIsPartOf,
  mapNamesToArray
} from '../../../util'
import MainWrapper from './MainWrapper'
import Row from './Row'
import GamePad from './GamePad'
import MoveCounter from './MoveCounter'
import StartButton from './StartButton'
import GameOver from './GameOver'

class PresentationalGameBoard extends Component {
  constructor() {
    super()
    this.state = {
      playerTurn: false,
      isLive: false,
      currentGame: [],
      playerMoves: [],
      moveCount: 0,
      gameResult: ''
    }
    this.executeComputerMoves = this.executeComputerMoves.bind()
  }

  componentWillReceiveProps(nextProps) {
    /*
      By reading prop changes, we use this method as our main
        "switchboard" for determining the app's next action.
    */
    const {
      isLive,
      playerTurn,
      currentGame,
      playerMoves,
      gameResult
    } = this.state

    if (isLive !== nextProps.isLive) {
      this.setState({
        isLive: nextProps.isLive
      })
    }

    if (playerTurn !== nextProps.playerTurn) {
      this.setState({
        playerTurn: nextProps.playerTurn
      })
    }

    // This assumes that only the computer will be adding moves
    //  to the currentGame array.
    if (
      currentGame !== nextProps.currentGame &&
      nextProps.currentGame.length > 0
    ) {
      this.setState(
        {
          currentGame: nextProps.currentGame,
          moveCount: nextProps.currentGame.length
        },
        this.executeComputerMoves(
          nextProps.currentGame,
          nextProps.renderMove,
          nextProps.passControlToPlayer
        )
      )

      // This assumes that only the player will be adding moves
      //  to the playerMoves array.
    } else if (playerMoves !== nextProps.playerMoves && playerTurn) {
      const computerMoves = mapNamesToArray(currentGame)

      if (arrayIsPartOf(nextProps.playerMoves, computerMoves)) {
        if (
          nextProps.playerMoves.length === computerMoves.length &&
          computerMoves.length >= this.props.maxRounds
        ) {
          // The player has won the game
          console.log('YOU WIN')
          this.props.endGame(true)
        } else if (nextProps.playerMoves.length === computerMoves.length) {
          // The player's turn is over...
          this.props.passControlToComputer()
        } // Do nothing. The player still needs to make more moves.
      } else {
        console.log('GAME OVER')
        this.props.endGame()
      }
    }

    if (gameResult !== nextProps.gameResult) {
      console.log('gameResult:', nextProps.gameResult)
      this.setState({ gameResult: nextProps.gameResult })
    }
  }

  componentWillUnmount() {
    this.props.endGame()
  }

  executeComputerMoves(moves, renderMove, passControlToPlayer) {
    const delayInMilliseconds = 1300

    delayedLoopExecution(
      moves,
      delayInMilliseconds,
      renderMove,
      passControlToPlayer
    )
  }

  render() {
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      renderMove,
      startGame
    } = this.props

    const { isLive, playerTurn, moveCount, gameResult } = this.state

    return (
      <MainWrapper>
        <Row id="first-row">
          <GamePad
            pad={topLeft}
            callback={renderMove}
            playerTurn={playerTurn}
          />
          <GamePad
            pad={topRight}
            callback={renderMove}
            playerTurn={playerTurn}
          />
        </Row>
        <Row id="second-row">
          <MoveCounter value={moveCount} playerTurn={playerTurn} />
        </Row>
        <Row id="third-row">
          <GamePad
            pad={bottomLeft}
            callback={renderMove}
            playerTurn={playerTurn}
          />
          <GamePad
            pad={bottomRight}
            callback={renderMove}
            playerTurn={playerTurn}
          />
        </Row>
        <Row id="fourth-row">
          <StartButton isLive={isLive} callback={startGame} />
        </Row>
        <Row id="game-over-message">
          <GameOver message={gameResult} render={!isLive} />
        </Row>
      </MainWrapper>
    )
  }
}

export default PresentationalGameBoard

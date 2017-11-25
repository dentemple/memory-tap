import React, { Component } from 'react'

import {
  delayedLoopExecution,
  compareArrays,
  mapNamesToArray
} from '../../../util'
import MainWrapper from './MainWrapper'
import Row from './Row'
import GamePad from './GamePad'
import MoveCounter from './MoveCounter'
import StartButton from './StartButton'

class PresentationalGameBoard extends Component {
  constructor() {
    super()
    this.state = {
      playerTurn: false,
      isLive: false,
      currentGame: [],
      playerMoves: [],
      moveCount: 0,
      triggerPlayerCheck: false
    }
    this.executeComputerMoves = this.executeComputerMoves.bind()
  }

  componentWillReceiveProps(nextProps) {
    /*
      By reading prop changes, we use this method as our main
        "switchboard" for determining the app's next action.
    */
    const { isLive, playerTurn, currentGame, playerMoves } = this.state

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

      if (compareArrays(nextProps.playerMoves, computerMoves)) {
        if (nextProps.playerMoves.length === computerMoves.length) {
          // If the player has made enough presses...
          this.props.passControlToComputer()
        } // Otherwise, do nothing. The player still needs more presses.
      } else {
        // If the two arrays fail the test...
        this.props.clearGame()
      }
    }
  }

  componentWillUnmount() {
    this.props.clearGame()
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

    const { isLive, playerTurn, moveCount } = this.state

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
      </MainWrapper>
    )
  }
}

export default PresentationalGameBoard

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
import MainButton from './MainButton'
import StrictButton from './StrictButton'
import RetryWarning from './RetryWarning'
import GameOver from './GameOver'

class PresentationalGameBoard extends Component {
  constructor() {
    super()
    this.state = {
      audio1: null,
      audio2: null,
      audio3: null,
      audio4: null,
      strict: false,
      playerTurn: false,
      isLive: false,
      currentGame: [],
      playerMoves: [],
      moveCount: 0,
      gameResult: '',
      showRetryMessage: false
    }
    this.executeComputerMoves = this.executeComputerMoves.bind()
  }

  componentDidMount() {
    const audio1 = new Audio(
      'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'
    )
    const audio2 = new Audio(
      'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'
    )
    const audio3 = new Audio(
      'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'
    )
    const audio4 = new Audio(
      'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'
    )
    this.setState({
      audio1,
      audio2,
      audio3,
      audio4
    })
  }

  componentWillReceiveProps(nextProps) {
    /*
      By reading prop changes, we use this method as our main
        "switchboard" for determining the app's next action.
    */
    const {
      isLive,
      strict,
      playerTurn,
      currentGame,
      playerMoves,
      gameResult,
      showRetryMessage
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

    if (strict !== nextProps.strict) {
      this.setState({
        strict: nextProps.strict
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

      // In non-strict mode, the player may be coming in from a failure
      //  message that needs to be removed.
      // We check if the new playerMoves props has entries so that we prevent
      //  removing the failure message too quickly (i.e., before the player
      //  gets a chance to see it).
      if (
        !this.props.strict &&
        showRetryMessage &&
        nextProps.playerMoves.length > 0
      ) {
        this.setState({
          showRetryMessage: false
        })
      }

      if (arrayIsPartOf(nextProps.playerMoves, computerMoves)) {
        if (
          nextProps.playerMoves.length === computerMoves.length &&
          computerMoves.length >= this.props.maxRounds
        ) {
          // The player has won the game
          this.props.endGame(true)
        } else if (nextProps.playerMoves.length === computerMoves.length) {
          // The player's turn is over...
          this.props.passControlToComputer()
        } // Do nothing. The player still needs to make more moves.
      } else {
        if (strict) {
          this.props.endGame()
        } else {
          this.setState({
            showRetryMessage: true
          })
          this.props.repeatAttempt()
        }
      }
    }

    if (
      gameResult !== nextProps.gameResult &&
      nextProps.gameResult !== undefined
    ) {
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
      startGame,
      toggleStrictMode
    } = this.props

    const {
      isLive,
      strict,
      playerTurn,
      moveCount,
      gameResult,
      showRetryMessage
    } = this.state

    return (
      <MainWrapper>
        <Row id="first-row">
          <GamePad
            pad={topLeft}
            callback={renderMove}
            playerTurn={playerTurn}
            audio={this.state.audio1}
          />
          <GamePad
            pad={topRight}
            callback={renderMove}
            playerTurn={playerTurn}
            audio={this.state.audio2}
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
            audio={this.state.audio3}
          />
          <GamePad
            pad={bottomRight}
            callback={renderMove}
            playerTurn={playerTurn}
            audio={this.state.audio4}
          />
        </Row>
        <Row id="main-button-row">
          {isLive ? (
            <MainButton callback={startGame} text="Reset" />
          ) : (
            <MainButton callback={startGame} text="Start" />
          )}
        </Row>
        <Row id="strict-button-row">
          {isLive ? (
            <small />
          ) : (
            <StrictButton
              callback={toggleStrictMode}
              text={strict ? 'Deactivate' : 'Activate'}
            />
          )}
        </Row>
        <Row id="retry-message-row">
          <RetryWarning render={isLive && showRetryMessage} />
        </Row>
        <Row id="final-messages-row">
          <GameOver message={gameResult} render={!isLive} />
        </Row>
      </MainWrapper>
    )
  }
}

export default PresentationalGameBoard

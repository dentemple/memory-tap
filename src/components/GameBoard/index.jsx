import React, { Component } from 'react'
import { connect } from 'react-redux'

import { generateMove, clearGame, initializeGame } from '../../actions'
import StyledContainer from './StyledContainer'
import GameRow from './GameRow'
import ShowJSON from '../../util/ShowJSON'

class GameBoard extends Component {
  render() {
    return (
      <StyledContainer>
        <form onSubmit={e => e.preventDefault}>
          <GameRow>
            <input type="button" style={{ padding: 30 }} />
            <input type="button" style={{ padding: 30 }} />
          </GameRow>
          <GameRow>
            <input type="button" style={{ padding: 30 }} />
            <input type="button" style={{ padding: 30 }} />
          </GameRow>
        </form>
        <h2>Test Actions</h2>
        <button onClick={this.props.testMove}>Move</button>
        <button onClick={this.props.testClear}>Clear</button>
        <button onClick={this.props.testInitialize}>Initialize</button>
        <ShowJSON json={this.props.store} />
      </StyledContainer>
    )
  }
}

const mapStateToProps = state => ({ store: state })

const mapDispatchToProps = dispatch => {
  return {
    testMove: () => {
      dispatch(generateMove())
    },
    testClear: () => {
      dispatch(clearGame())
    },
    testInitialize: () => {
      dispatch(initializeGame())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)

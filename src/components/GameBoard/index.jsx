import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReduxTesting from '../ReduxTesting'
import { applyHighlight, removeHighlight } from '../../actions'

import StyledContainer from './StyledContainer'
import GameRow from './GameRow'
import GamePad from './GamePad'

class GameBoard extends Component {
  render() {
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      handleClick
    } = this.props
    return (
      <Wrapper>
        <GameRow>
          <GamePad pad={topLeft} handleClick={handleClick} />
          <GamePad pad={topRight} handleClick={handleClick} />
        </GameRow>
        <GameRow>
          <GamePad pad={bottomLeft} handleClick={handleClick} />
          <GamePad pad={bottomRight} handleClick={handleClick} />
        </GameRow>
      </Wrapper>
    )
  }
}

const Wrapper = ({ children }) => (
  <StyledContainer>
    <form onSubmit={e => e.preventDefault}>{children}</form>
    <ReduxTesting />
  </StyledContainer>
)

const mapStateToProps = ({ padSettings }) => ({
  topLeft: padSettings.topLeft,
  topRight: padSettings.topRight,
  bottomLeft: padSettings.bottomLeft,
  bottomRight: padSettings.bottomRight
})

const mapDispatchToProps = dispatch => {
  return {
    handleClick: pad => {
      dispatch(applyHighlight(pad))
      setTimeout(() => {
        dispatch(removeHighlight(pad))
      }, 400)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)

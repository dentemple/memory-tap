import React, { Component } from 'react'
import styled from 'styled-components'

class GamePad extends Component {
  handleCallback = () => {
    this.props.callback(this.props.pad, this.props.playerTurn)
    this.props.audio.play()
  }
  render() {
    return (
      <StyledInput
        {...this.props.pad}
        onClick={this.handleCallback}
        type="button"
        value={this.props.pad.highlight ? this.props.pad.value : ''}
        disabled={!this.props.playerTurn}
      />
    )
  }
}

const StyledInput = styled.input`
  width: 120px;
  height: 120px;
  margin: 0 50px;
  font-size: 5em;
  padding: 0;
  color: ${props => props.backgroundColor};
  border-radius: 50%;
  outline: none;
  background-color: ${props =>
    props.highlight ? props.highlightColor : props.backgroundColor};
`

export default GamePad

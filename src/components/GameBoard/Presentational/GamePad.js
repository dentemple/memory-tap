import React, { Component } from 'react'
import styled from 'styled-components'

class GamePad extends Component {
  handleCallback = () => {
    this.props.callback(this.props.pad, this.props.playerTurn)
  }
  render() {
    return (
      <StyledInput
        {...this.props.pad}
        onClick={this.handleCallback}
        type="button"
        value={this.props.pad.highlight ? this.props.pad.value : ''}
      />
    )
  }
}

const StyledInput = styled.input`
  width: 150px;
  height: 150px;
  margin: 0 50px;
  font-size: 6.5em;
  padding: 0;
  color: ${props => props.backgroundColor};
  border-radius: 50%;
  outline: none;
  background-color: ${props =>
    props.highlight ? props.highlightColor : props.backgroundColor};
`

export default GamePad

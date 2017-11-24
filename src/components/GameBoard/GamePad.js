import React, { Component } from 'react'
import styled from 'styled-components'

class GamePad extends Component {
  handleClick = () => {
    this.props.handleClick(this.props.pad)
  }
  render() {
    return (
      <StyledInput
        {...this.props.pad}
        onClick={this.handleClick}
        type="button"
      />
    )
  }
}

const StyledInput = styled.input`
  width: 80px;
  height: 80px;
  margin: 10px;
  border-radius: 50%;
  outline: none;
  background-color: ${props =>
    props.highlight ? props.highlightColor : props.backgroundColor};
`

export default GamePad

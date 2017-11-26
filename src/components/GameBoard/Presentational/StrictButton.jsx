import React, { Component } from 'react'
import styled from 'styled-components'

class StrictButton extends Component {
  handleCallback = e => {
    e.preventDefault()
    this.props.callback()
  }
  render() {
    return (
      <div style={{ fontFamily: 'monospace' }}>
        {`Strict Mode:  `}
        <StyledButton onClick={this.handleCallback}>
          {this.props.text}
        </StyledButton>
      </div>
    )
  }
}

const StyledButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.white};
  border: 0.5px solid ${props => props.theme.white};
  border-radius: 5px;
  font-family: monospace;
  padding: 3px 5px;
  cursor: pointer;
`

export default StrictButton

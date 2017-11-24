import React, { Component } from 'react'
import Aux from 'react-aux'
import WhiteButton, { EmptySpace } from '../../WhiteButton'

class StartButton extends Component {
  handleCallback = e => {
    e.preventDefault()
    this.props.callback()
  }
  render() {
    return (
      <Aux>
        {this.props.isLive ? (
          <EmptySpace />
        ) : (
          <WhiteButton onClick={this.handleCallback}>Start</WhiteButton>
        )}
      </Aux>
    )
  }
}

export default StartButton

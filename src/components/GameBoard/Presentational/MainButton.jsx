import React, { Component } from 'react'
import WhiteButton from '../../WhiteButton'

class MainButton extends Component {
  handleCallback = e => {
    e.preventDefault()
    this.props.callback()
  }
  render() {
    return (
      <WhiteButton onClick={this.handleCallback}>{this.props.text}</WhiteButton>
    )
  }
}

export default MainButton

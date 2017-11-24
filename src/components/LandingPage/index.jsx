import React, { Component } from 'react'
import Aux from 'react-aux'

import StyledLink from '../StyledLink'
import Title from './Title'
import TextBlock from './TextBlock'
import WhiteButton from '../WhiteButton'
import ReduxTesting from '../ReduxTesting'

class LandingPage extends Component {
  render() {
    return (
      <Aux>
        <Title />
        <TextBlock />
        <StyledLink to="/play">
          <WhiteButton>PLAY</WhiteButton>
        </StyledLink>
        <ReduxTesting />
      </Aux>
    )
  }
}

export default LandingPage

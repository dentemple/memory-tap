import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import StyledContainer from './StyledContainer'
import Title from './Title'
import TextBlock from './TextBlock'

class LandingPage extends Component {
  render() {
    return (
      <StyledContainer>
        <Title />
        <TextBlock />
        <button>
          <Link to="/play">Play</Link>
        </button>
      </StyledContainer>
    )
  }
}

export default LandingPage

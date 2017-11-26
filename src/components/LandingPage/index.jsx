import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInRight } from 'react-animations'

import StyledLink from '../StyledLink'
import Title from './Title'
import TextBlock from './TextBlock'
import WhiteButton from '../WhiteButton'

class LandingPage extends Component {
  render() {
    return (
      <StyledSection>
        <Title />
        <TextBlock />
        <StyledLink to="/play">
          <WhiteButton>PLAY</WhiteButton>
        </StyledLink>
      </StyledSection>
    )
  }
}

const fadeInRightAnimation = keyframes`${fadeInRight}`
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  animation: 1s ${fadeInRightAnimation};

  & > * {
    animation: 1s ${fadeInRightAnimation};
  }
`

export default LandingPage

import React from 'react'
import styled from 'styled-components'

const PresentationalGameOver = props => (
  <StyledContainer {...props}>
    {props.render && props.message ? (
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0 }}>{props.message}</p>
        <StyledA href="https://github.com/dentemple/memory-tap">
          View this project on Github
        </StyledA>
      </div>
    ) : (
      <div />
    )}
  </StyledContainer>
)

const StyledContainer = styled.section`
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 3em;
  margin: 20px auto 0;
`

const StyledA = styled.a`
  font-size: 0.3em;
  text-transform: capitalize;
  text-decoration: none;
  margin: 10px auto;

  &:hover,
  &:visited {
    color: ${props => props.theme.white};
  }
`

export default PresentationalGameOver

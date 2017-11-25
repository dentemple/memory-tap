import React from 'react'
import styled from 'styled-components'

const PresentationalGameOver = props => (
  <StyledContainer {...props}>
    <p style={{ marginTop: 0 }}>{props.message}</p>
  </StyledContainer>
)

const StyledContainer = styled.section`
  display: ${props => (props.render ? 'relative' : 'none')};
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 3em;
  margin: 0;
`

export default PresentationalGameOver

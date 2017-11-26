import React from 'react'
import styled from 'styled-components'

const RetryWarning = ({ render }) => (
  <StyledP>{render ? `Wrong Move! Try again.` : <span />}</StyledP>
)

const StyledP = styled.p`
  color: ${props => props.theme.white};
  text-align: center;
  font-size: 1.7em;
  margin: 5px auto;
`

export default RetryWarning

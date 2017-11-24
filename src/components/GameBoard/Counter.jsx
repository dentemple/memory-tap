import React from 'react'
import styled from 'styled-components'

const Counter = ({ value }) => <StyledText>{value}</StyledText>

const StyledText = styled.p`
  color: ${props => props.theme.white};
  margin: 0;
  font-size: 5em;
`

export default Counter

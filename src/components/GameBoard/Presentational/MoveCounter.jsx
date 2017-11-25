import React from 'react'
import styled from 'styled-components'

const MoveCounter = ({ value, playerTurn }) => (
  <StyledText playerTurn={playerTurn}>{value}</StyledText>
)

const StyledText = styled.p`
  color: ${props => (props.playerTurn ? props.theme.white : props.theme.black)};
  cursor: default;
  margin: 0;
  font-size: 3.5em;
`

export default MoveCounter

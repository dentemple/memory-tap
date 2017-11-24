import React from 'react'
import Aux from 'react-aux'
import WhiteButton, { EmptySpace } from '../WhiteButton'

const StartButton = ({ isLive }) => (
  <Aux>{isLive ? <EmptySpace /> : <WhiteButton>Start</WhiteButton>}</Aux>
)

export default StartButton

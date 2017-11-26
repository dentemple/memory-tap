import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import StyledLink from '../StyledLink'

const NavBar = () => (
  <StyledNav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/play">Game Board</StyledLink>
  </StyledNav>
)

const fadeInAnimation = keyframes`${fadeIn}`
const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  font-size: 1.5em;
  margin: 10px auto 50px;
  animation: 0.5s ${fadeInAnimation};
`

export default NavBar

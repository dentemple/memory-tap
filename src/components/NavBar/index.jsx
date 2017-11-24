import React from 'react'
import styled from 'styled-components'
import StyledLink from '../StyledLink'

const NavBar = () => (
  <StyledNav>
    <StyledLink to="/">◀ Home</StyledLink>
    <StyledLink to="/play">Game Board ▶</StyledLink>
  </StyledNav>
)

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5em;
  margin-bottom: 50px;
`

export default NavBar

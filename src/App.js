import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import GameBoard from './components/GameBoard'
import LandingPage from './components/LandingPage'

const routes = (
  <Switch>
    <Route exact path="/play" component={GameBoard} />
    <Route component={LandingPage} />
  </Switch>
)

const App = () => (
  <StyledContainer>
    <NavBar />
    {routes}
  </StyledContainer>
)

const StyledContainer = styled.div`
  color: ${props => props.theme.white};
  font-family: 'Roboto', 'Arial', 'sans-serif';
  /* Duplicate styling in case injectGlobal fails on reload */
  background-color: ${props => props.theme.black};
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* overflow: hidden; */
`

export default App

import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from './util/AsyncComponent'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'

const GameBoard = asyncComponent(() => import('./components/GameBoard'))
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
  /* Duplicate styling in the event that injectGlobal fails to reload */
  background-color: ${props => props.theme.black};
  min-height: 100vh;
`

export default App

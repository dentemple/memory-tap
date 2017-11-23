import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './util/globalStyle'

import LandingPage from './pages/LandingPage'
import GameBoard from './pages/GameBoard'
import EndingPage from './pages/EndingPage'

const App = () => (
  <Switch>
    <Route exact path="/play" component={GameBoard} />
    <Route exact path="/end" component={EndingPage} />
    <Route component={LandingPage} />
  </Switch>
)

export default App

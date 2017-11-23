import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './util/globalStyle'

import GameBoard from './components/GameBoard'
import LandingPage from './pages/LandingPage'
import EndingPage from './pages/EndingPage'

const App = () => (
  <Switch>
    <Route exact path="/play" component={GameBoard} />
    <Route exact path="/end" component={EndingPage} />
    <Route component={LandingPage} />
  </Switch>
)

export default App

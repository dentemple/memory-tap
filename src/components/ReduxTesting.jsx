import React from 'react'
import { connect } from 'react-redux'

import {
  generateMove,
  clearGame,
  initializeGame,
  applyHighlight,
  removeHighlight
} from '../actions'
import { possibilities } from '../types'
import ShowJSON from '../util/ShowJSON'

const ReduxTesting = props => (
  <div>
    <h2>Test Actions</h2>
    <button onClick={props.testMove}>Move</button>
    <button onClick={props.testClear}>Clear</button>
    <button onClick={props.testInitialize}>Initialize</button>
    <ShowJSON json={props.store} />
  </div>
)

const mapStateToProps = state => ({ store: state })

const mapDispatchToProps = dispatch => {
  return {
    testMove: () => {
      const pad =
        possibilities[Math.floor(Math.random() * possibilities.length)]
      dispatch(generateMove(pad))
      dispatch(applyHighlight(pad))
      setTimeout(() => {
        dispatch(removeHighlight(pad))
      }, 400)
    },
    testClear: () => {
      dispatch(clearGame())
    },
    testInitialize: () => {
      dispatch(initializeGame())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTesting)

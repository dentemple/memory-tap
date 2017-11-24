import React from 'react'
import { connect } from 'react-redux'

import { generateMove, clearGame, initializeGame } from '../actions'
import { possibilities } from '../types'
import ShowJSON from '../util/ShowJSON'

const ReduxTesting = props => (
  <div style={{ margin: 0 }}>
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

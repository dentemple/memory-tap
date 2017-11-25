import React from 'react'
import Aux from 'react-aux'
import ReduxTesting from '../../ReduxTesting'

const MainWrapper = ({ children }) => (
  <Aux>
    <form onSubmit={e => e.preventDefault}>{children}</form>
    <ReduxTesting />
  </Aux>
)

export default MainWrapper

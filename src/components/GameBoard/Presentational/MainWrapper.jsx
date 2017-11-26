import React from 'react'
import styled, { keyframes } from 'styled-components'
import { slideInLeft } from 'react-animations'

/* Uncomment for dev mode */
//import ReduxTesting from '../../ReduxTesting'

const MainWrapper = ({ children }) => (
  <StyledContainer>
    <form onSubmit={e => e.preventDefault}>{children}</form>
    {/* <ReduxTesting /> */}
  </StyledContainer>
)

const slideInLeftAnimation = keyframes`${slideInLeft}`
const StyledContainer = styled.section`
  animation: 0.8s ${slideInLeftAnimation};
`

export default MainWrapper

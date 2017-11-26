import { injectGlobal } from 'styled-components'
import 'typeface-roboto'

/*
  The theme object will be available as props to
    any styled-component (via the context api).
*/

const theme = {
  black: '#181818',
  white: '#f5f5f5',
  sizes: {
    small: 400,
    medium: 750,
    large: 1000
  }
}

/*
  Provides a bypass that allows styled-components
    to affect the html & body elements.
*/

injectGlobal`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-height:100vh;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: #181818;
  }
`

export default theme

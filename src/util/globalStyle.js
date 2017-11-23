import { injectGlobal } from 'styled-components'
import 'typeface-roboto'

injectGlobal`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-width:100vh;
    min-height:90vh;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    color: #f5f5f5;
    background-color: #181818;
    font-family: 'Roboto', 'Arial', 'sans-serif';
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height:90vh;
  }
`

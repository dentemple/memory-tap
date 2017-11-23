import { injectGlobal } from 'styled-components'
import 'typeface-roboto'

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    color: #F5F5F5;
    background-color: #181818;
    font-size: 1.3em;
    font-family: 'Roboto', 'sans-serif';
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`

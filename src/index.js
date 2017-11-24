import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import theme from './theme'
import App from './App'
import store from './store'
// import registerServiceWorker from './util/registerServiceWorker'

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
// registerServiceWorker()

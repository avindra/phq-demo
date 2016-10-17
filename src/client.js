/* global rdx_init */
import React from 'react'
import { render } from 'react-dom'
import App from 'containers/App'
import { Provider } from 'react-redux'
import BrowserRouter from 'react-router'

render((
  <BrowserRouter>
    <Provider store={rdx_init}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('rct_root'));
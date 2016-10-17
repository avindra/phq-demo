/* global rdx_init */
import React from 'react'
import { render } from 'react-dom'
import App from 'containers/App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { createStore } from 'redux'
import reducers from 'reducers'

const store = createStore(reducers, rdx_init);

render((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('rct_root'));
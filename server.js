const Koa = require('koa');
const app = new Koa();

import { renderToString } from 'react-dom/server'

import React from 'react'
import App from './src/containers/App'

const fs = require('fs');

const hash = fs.readFileSync('./build');

// Redux related imports
import { createStore } from 'redux'
import reducers from './src/reducers'
import { Provider } from 'react-redux'


// Die if hash is not correct
if(hash.length !== 20) {
  console.log(`Unexpected hash (${ hash }) found. Please run "npm start".`);
  process.exit(1);
}

import { ServerRouter, createServerRenderContext } from 'react-router'

console.log(`Build hash ${ hash } will be used for this instance.`);

/**
 * Serve static assets with Koa.
 * In an actual deployment, this would better be handled by nginx
 * or some other http server optimized for serving static assets.
 * For a simple development experience, we will just use Koa.
*/
app.use(require('koa-static')('www'))

app.use(ctx => {
  const store = createStore(reducers);

  const context = createServerRenderContext();
  const markup = renderToString(
    <ServerRouter
      location={ctx.url}
      context={context}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ServerRouter>
  )

  const result = context.getResult();
  if(result.redirect) {
    // TODO: Handle redirect here
  } else if(result.missed) {
      // TODO: Handle 404s here
  }

  // Get redux state
  const initialState = store.getState();

  ctx.body = `<!DOCTYPE html>
    <html>
      <head>
        <title>PHQ-9 Demo</title>
        <script>
        <!--
        window.rdx_init = ${ JSON.stringify(initialState) }
        --></script>
      </head>
      <body>
        <div id="rct_root">${ markup }</div>
        <script src="/assets/main.${ hash }.js"></script>
      </body>
    </html>`
})

const port = 5000;

app.listen(port)

console.log(`App is listening on port ${ port }`)
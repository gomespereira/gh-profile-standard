import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { ReactQueryDevtools } from 'react-query-devtools'

import './index.css'

import App from './App'

import * as serviceWorker from './serviceWorker'

render(
  <StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
    <App />
  </StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()

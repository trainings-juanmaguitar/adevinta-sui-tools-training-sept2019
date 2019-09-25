/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import Hello from './components/Hello'

// eslint-next-disable-line
import(/* webpackChunkName: "my-chunk-name" */ './foo').then(
  ({default: foo}) => {
    console.log('loaded async chunk')
    foo()
  }
)

const a = {b: 1, c: 4}
const b = {...a, d: 45}

console.log(b)

console.log('about to register...')
import {register} from '@s-ui/bundler/registerServiceWorker'

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})();

ReactDOM.render(
  <App>
    <Hello />
  </App>,
  document.getElementById('⚛️')
)

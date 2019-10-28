import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

const a = {b: 1, c: 4}
const b = {...a, d: 45}

console.log(b)

ReactDOM.render(<App />, document.getElementById('⚛️'))

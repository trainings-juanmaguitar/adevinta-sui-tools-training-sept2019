/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'

import domain from './domain'

ReactDOM.render(<h1>Hola Mundo!</h1>, document.getElementById('⚛️'))

domain
  .get('list_podcasts_use_case')
  .execute()
  .then(console.log)

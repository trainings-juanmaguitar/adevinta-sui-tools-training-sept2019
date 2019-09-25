import React from 'react'
import PropTypes from 'prop-types'

const App = ({children}) => (
  <div className="App">
    <h1>Hola Mundo!!</h1>
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.any
}

export default App

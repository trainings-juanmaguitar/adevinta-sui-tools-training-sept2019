import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

console.log('App..') // eslint-disable-line

const App = (props, {i18n, router}) => {
  const {children} = props

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Helmet application" />
        <title>SPA MOCK</title>
      </Helmet>
      {children}
    </div>
  )
}
App.propTypes = {children: PropTypes.element}

App.contextTypes = {
  i18n: PropTypes.object,
  router: PropTypes.object
}

export default App

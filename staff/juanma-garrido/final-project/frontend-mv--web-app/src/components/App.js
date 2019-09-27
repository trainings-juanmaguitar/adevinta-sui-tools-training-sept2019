import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

console.log('App..') // eslint-disable-line

const App = (props, {i18n, router}) => {
  const {children} = props
  const {
    location: {pathname: currentPath}
  } = router
  console.log(currentPath)
  const changeToEnglish = e => {
    console.log('changeToEnglish')
    i18n.setCulture('en-GB')
    router.push(currentPath)
  }
  const changeToSpanish = e => {
    console.log('changeToSpanish')
    i18n.setCulture('es-ES')
    router.push(currentPath)
  }
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Helmet application" />
        <title>SPA MOCK</title>
      </Helmet>
      <button onClick={changeToEnglish}>English</button>
      <button onClick={changeToSpanish}>Spanish</button>
      <nav>
        <h1>App</h1>
        <Link to="/">Home</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/now_playing">Now Playing</Link>
      </nav>
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

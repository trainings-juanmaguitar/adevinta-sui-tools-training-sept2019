import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Home = (_, {domain, name}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <h1>Home test title</h1>
  </React.Fragment>
)

Home.contextTypes = {
  domain: PropTypes.object,
  name: PropTypes.string
}

export default Home

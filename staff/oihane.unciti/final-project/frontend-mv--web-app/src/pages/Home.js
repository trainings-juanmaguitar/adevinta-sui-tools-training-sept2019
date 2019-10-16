/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import SearchForm from '../components/SearchForm/'

const Home = (_) => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      <h1>Home test title</h1>
      <SearchForm />
    </React.Fragment>
  )
}



export default Home

/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Home = ({title}, {name}) => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      <h1>Home test title</h1>
      {title && <p>{title}</p>}
    </React.Fragment>
  )
}

Home.contextTypes = {
  name: PropTypes.string
}

Home.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context

  const [{title}] = await domain.get('list_popular_movies_use_case').execute()

  return {
    title
  }
}

export default Home

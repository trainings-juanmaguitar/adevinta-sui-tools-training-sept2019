/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const List = ({movies}) => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      <h1>List test title</h1>
      <ul>
        {
          movies && movies.length && movies.map(movie => (
            <li>{movie.title}</li>
          ))
        }
      </ul>
    </React.Fragment>
  )
}


List.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context

  const movies = await domain.get('list_popular_movies_use_case').execute()

  return { movies }
}

export default List

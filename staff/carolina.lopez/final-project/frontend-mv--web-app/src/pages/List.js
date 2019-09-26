/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const List = ({movies, title, year}) => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      <h1>List test title</h1>
      <ul>
        {
          movies && movies.length && movies.map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))
        }
      </ul>
    </React.Fragment>
  )
}


List.getInitialProps = async ({context, routeInfo}) => {
  const {domain, i18n} = context
  console.log({domain, routeInfo})

  const currentPathname = routeInfo.location.pathname
  
  let movies = []
  let title = ''
  
  switch(currentPathname){
    case '/popular':
      movies = await domain.get('list_popular_movies_use_case').execute()
      title = i18n.t('POPULAR_MOVIES_TITLE')
      break;
    case '/now_playing':
      movies = await domain.get('list_now_movies_use_case').execute()
      title = i18n.t('NOW_MOVIES_TITLE')
      break;
    case '/top_rated':
      movies = await domain.get('list_top_movies_use_case').execute()
      title = i18n.t('TOP_MOVIES_TITLE')
      break;
    case '/upcoming':
      movies = await domain.get('list_upcoming_movies_use_case').execute()
      title = i18n.t('UPCOMING_MOVIES_TITLE')
      break;
  }

  return { movies }
}

export default List

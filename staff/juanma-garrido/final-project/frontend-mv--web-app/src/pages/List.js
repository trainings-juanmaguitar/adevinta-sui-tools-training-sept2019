/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const List = ({movies, title}) => {

  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      <h1>{title}</h1>
      <ul>
        {
          movies && movies.length && movies.map((movie, index) => (
            <li onClick={() => alert(movie.overview)} key={index}>{movie.title}</li>
          ))
        }
      </ul>
    </React.Fragment>
  )
}


List.getInitialProps = async ({context, routeInfo}) => {
  const {domain, i18n} = context
  console.log({domain, routeInfo })
  
  const currentPathname = routeInfo.location.pathname
  
  let movies = []
  let title = ''
  
  switch (currentPathname) {
    case '/popular':
        movies = await domain.get('list_popular_movies_use_case').execute()
        title = i18n.t('POPULAR_MOVIES_TITLE')
        break;
    case '/now_playing':
        movies = await domain.get('list_now_playing_movies_use_case').execute()
        title = i18n.t('NOW_PLAYING_MOVIES_TITLE')
        break;
  }

  console.log({ movies, title })
  return { movies, title }
}

export default List

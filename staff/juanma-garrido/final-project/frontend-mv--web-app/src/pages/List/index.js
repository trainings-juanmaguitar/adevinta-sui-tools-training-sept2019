/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import MoleculeNavbar from '../../../../frontend-mv--uilib-components/components/molecule/navbar/src/index'
import './index.scss'

const List = ({movies, title, options, currentOption}, {router}) => {

  console.log({movies, title, options, currentOption})
  const handleChangeOption = (e, {value}) => {
    router.push(`/${value}`)
  }

  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      <MoleculeNavbar onChangeOption={handleChangeOption} options={options} currentOption={currentOption} languages={['es-ES', 'en-GB']}/>
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

List.contextTypes = {
  router: PropTypes.object
}


List.getInitialProps = async ({context, routeInfo}) => {
  const {domain, i18n} = context
  const {params} = routeInfo

  const commonProps = {
    options: [
      {
        key: 'popular',
        text: i18n.t('POPULAR_MOVIES_TITLE')
      },
      {
        key: 'now_playing',
        text: i18n.t('NOW_PLAYING_MOVIES_TITLE')
      }
    ]
  }

  if (params && params.query) {
    const {query} = params
    const searchResultsMovies = await domain.get('search_movies_use_case').execute({query})
    const totalResults = searchResultsMovies.length
    title = i18n.t('SEARCH_RESULTS', {totalResults, query})
    return { ...commonProps, movies: searchResultsMovies, title }
  }
  
  const currentPathname = routeInfo.location.pathname
  let movies = []
  let title = ''
  let currentOption = ''

  switch (currentPathname) {
    case '/popular':
        movies = await domain.get('list_popular_movies_use_case').execute()
        title = i18n.t('POPULAR_MOVIES_TITLE')
        currentOption = 'popular'
        break;
    case '/now_playing':
        movies = await domain.get('list_now_playing_movies_use_case').execute()
        title = i18n.t('NOW_PLAYING_MOVIES_TITLE')
        currentOption = 'now_playing'
        break;
  }

  return { ...commonProps, movies, title, currentOption }
}

export default List

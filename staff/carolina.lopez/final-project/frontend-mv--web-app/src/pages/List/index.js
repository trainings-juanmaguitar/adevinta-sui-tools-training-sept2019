/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'
import MoleculeCard from 'sui-skylab-molecule-card'

import Navbar from '../../components/Navbar/'
import './index.scss'

const LogoLink = <Link to="/">My App</Link>
const BASE_CLASS = `List`
const CLASS_ITEM = `${BASE_CLASS}-item`

const List = (
  {movies, title, categories, languages, currentOption},
  {router, i18n}
) => {
  console.log({i18n})

  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      {<Navbar title={LogoLink} />}
      <h1>{title}</h1>
      <ul className={BASE_CLASS}>
        {movies &&
          movies.length && 
          movies.map(({title, overview, posterPath, language, release}, index) => ( 
            <li onClick={() => alert(movie.overview)} key={index} className={CLASS_ITEM}>
              <MoleculeCard title={title}  description={overview} image={`https://image.tmdb.org/t/p/w500/${posterPath}`} language={language} release={release}/>
            </li>
          ))}
      </ul>
    </React.Fragment>
  )
}

List.contextTypes = {
  router: PropTypes.object,
  i18n: PropTypes.object
}

List.getInitialProps = async ({context, routeInfo}) => {
  const {domain, i18n} = context
  const {params} = routeInfo

  if (params && params.query) {
    const {query} = params
    const searchResultsMovies = await domain
      .get('search_movies_use_case')
      .execute({query})
    const totalResults = searchResultsMovies.length
    title = i18n.t('SEARCH_RESULTS', {totalResults, query})
    return {movies: searchResultsMovies, title}
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
      break
    case '/now_playing':
      movies = await domain.get('list_now_playing_movies_use_case').execute()
      title = i18n.t('NOW_PLAYING_MOVIES_TITLE')
      currentOption = 'now_playing'
      break
    case '/top_rated':
      movies = await domain.get('list_top_movies_use_case').execute()
      title = i18n.t('TOP_MOVIES_TITLE')
      currentOption = 'top_rated'
      break
    case '/upcoming':
      movies = await domain.get('list_upcoming_movies_use_case').execute()
      title = i18n.t('UPCOMING_MOVIES_TITLE')
      currentOption = 'upcoming'
      break
  }
  return {movies, title, currentOption}
}

export default List

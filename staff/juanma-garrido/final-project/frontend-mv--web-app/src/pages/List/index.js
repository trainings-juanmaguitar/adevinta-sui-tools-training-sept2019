/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import MoleculeNavbar from '../../../../frontend-mv--uilib-components/components/molecule/navbar/src/index'
import './index.scss'

const List = ({movies, title}, {router}) => {

  const handleChangeOption = (e, {value}) => {
    router.push(`/${value}`)
  }

  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      <MoleculeNavbar onChangeOption={handleChangeOption} options={['popular', 'now_playing']} languages={['es-ES', 'en-GB']}/>
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

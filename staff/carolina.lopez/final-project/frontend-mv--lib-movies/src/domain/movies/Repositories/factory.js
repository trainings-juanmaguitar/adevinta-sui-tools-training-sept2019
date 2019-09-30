import {FetcherFactory} from '@s-ui/domain'

import MoviesEntitiesFactory from '../Entities/factory'
import RawDataMoviesRepository from './RawDataMoviesRepository'
import HttpMoviesRepository from './HttpMoviesRepository'

export default class MoviesRepositoriesFactory {
  static rawDataMoviesRepository = ({config}) =>
    new RawDataMoviesRepository({
      config,
      movieEntityFactory: MoviesEntitiesFactory.movieEntity
    })

  static httpMoviesRepository = ({config}) =>
    new HttpMoviesRepository({
      config,
      movieEntityFactory: MoviesEntitiesFactory.movieEntity,
      fetcher: FetcherFactory.httpFetcher({config})
    })
}

import MoviesEntitiesFactory from '../Entities/factory'
import RawDataMoviesRepository from './RawDataMoviesRepository'

export default class MoviesRepositoriesFactory {
  static rawDataMoviesRepository = ({config}) =>
    new RawDataMoviesRepository({
      config,
      movieEntityFactory: MoviesEntitiesFactory.movieEntity
    })
}

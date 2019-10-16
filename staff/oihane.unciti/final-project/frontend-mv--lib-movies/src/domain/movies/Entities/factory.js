import MovieEntity from './MovieEntity'

export default class MoviesEntitiesFactory {
  static movieEntity = movie => new MovieEntity(movie)
}

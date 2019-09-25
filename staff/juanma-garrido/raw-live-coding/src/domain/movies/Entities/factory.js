import MovieEntity from './MovieEntity'

export default class PodcastsEntitiesFactory {
  static movieEntity = movie => new MovieEntity(movie)
}

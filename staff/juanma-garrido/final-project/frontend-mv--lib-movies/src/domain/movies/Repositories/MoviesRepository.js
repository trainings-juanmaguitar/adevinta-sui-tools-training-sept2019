import {Repository} from '@s-ui/domain'

export default class MoviesRepository extends Repository {
  popularMovies() {
    throw new Error('[MoviesRepository#popularMovies] mandatory ')
  }

  nowPlayingMovies() {
    throw new Error('[MoviesRepository#nowPlayingMovies] mandatory ')
  }
}

import {Repository} from '@s-ui/domain'

export default class MoviesRepository extends Repository {
  popularMovies() {
    throw new Error('[MoviesRepository#popularMovies] mandatory ')
  }

  nowPlayingMovies() {
    throw new Error('[MoviesRepository#nowPlayingMovies] mandatory ')
  }

  topMovies() {
    throw new Error('[MoviesRepository#topMovies] mandatory ')
  }

  upcomingMovies() {
    throw new Error('[MoviesRepository#upcomingMovies] mandatory ')
  }

  searchMovies() {
    throw new Error('[MoviesRepository#searchMovies] mandatory ')
  }
}

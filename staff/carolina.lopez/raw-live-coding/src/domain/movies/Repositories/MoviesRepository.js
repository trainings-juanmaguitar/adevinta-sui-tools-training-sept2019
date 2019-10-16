import {Repository} from '@s-ui/domain'

export default class MoviesRepository extends Repository {
  popularMovies() {
    throw new Error('[MoviesRepository#popularMovies] mandatory ')
  }

  nowMovies() {
    throw new Error('[MoviesRepository#nowMovies] mandatory ')
  }

  topMovies() {
    throw new Error('[MoviesRepository#topMovies] mandatory ')
  }

  upcomingMovies() {
    throw new Error('[MoviesRepository#upcomingMovies] mandatory ')
  }
}

import MoviesRepositoriesFactory from '../Repositories/factory'
import ListPopularMoviesUseCase from './ListPopularMoviesUseCase'
import ListNowPlayingMoviesUseCase from './ListNowPlayingMoviesUseCase'
import SearchMoviesUseCase from './SearchMoviesUseCase'

export default class MoviesUseCasesFactory {
  static listPopularMoviesUseCase = ({config}) =>
    new ListPopularMoviesUseCase({
      repository: MoviesRepositoriesFactory.httpMoviesRepository({
        config
      })
    })

  static listNowPlayingMoviesUseCase = ({config}) =>
    new ListNowPlayingMoviesUseCase({
      repository: MoviesRepositoriesFactory.httpMoviesRepository({
        config
      })
    })

  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      repository: MoviesRepositoriesFactory.httpMoviesRepository({
        config
      })
    })
}

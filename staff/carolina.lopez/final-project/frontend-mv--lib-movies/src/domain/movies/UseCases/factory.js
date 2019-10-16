import MoviesRepositoriesFactory from '../Repositories/factory'
import ListPopularMoviesUseCase from './ListPopularMoviesUseCase'
import ListNowPlayingMoviesUseCase from './ListNowPlayingMoviesUseCase'
import ListTopMoviesUseCase from './ListTopMoviesUseCase'
import ListUpcomingMoviesUseCase from './ListUpcomingMoviesUseCase'
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

  static listTopMoviesUseCase = ({config}) =>
    new ListTopMoviesUseCase({
      repository: MoviesRepositoriesFactory.httpMoviesRepository({
        config
      })
    })

  static listUpcomingMoviesUseCase = ({config}) =>
    new ListUpcomingMoviesUseCase({
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

import MoviesRepositoriesFactory from '../Repositories/factory'
import ListPopularMoviesUseCase from './ListPopularMoviesUseCase'
import ListNowMoviesUseCase from './ListNowMoviesUseCase'
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

  static listNowMoviesUseCase = ({config}) =>
    new ListNowMoviesUseCase({
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
// se añade un método estático - se pasa el mismo repositorio de movies
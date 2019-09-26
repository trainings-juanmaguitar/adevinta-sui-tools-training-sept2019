import MoviesRepositoriesFactory from '../Repositories/factory'
import ListPopularMoviesUseCase from './ListPopularMoviesUseCase'

export default class MoviesUseCasesFactory {
  static listPopularMoviesUseCase = ({config}) =>
    new ListPopularMoviesUseCase({
      repository: MoviesRepositoriesFactory.httpMoviesRepository({
        config
      })
    })
}

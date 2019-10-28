import {EntryPointFactory} from '@s-ui/domain'
import Config from './config/'

import MoviesUseCasesFactory from './movies/UseCases/factory'

const config = new Config({})

const useCases = {
  list_popular_movies_use_case: MoviesUseCasesFactory.listPopularMoviesUseCase({
    config
  }),
  list_now_playing_movies_use_case: MoviesUseCasesFactory.listNowPlayingMoviesUseCase(
    {
      config
    }
  ),
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({
    config
  })
}

const Domain = EntryPointFactory({useCases})

const instance = new Domain({config})

export default instance

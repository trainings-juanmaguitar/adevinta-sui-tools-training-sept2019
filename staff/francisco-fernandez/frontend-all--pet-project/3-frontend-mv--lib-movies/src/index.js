import {EntryPointFactory} from '@s-ui/domain'

import MoviesUseCasesFactory from './movies/UseCases/factory'
import Config from './config'

const config = new Config()
const useCases = {
  list_movies_use_case: MoviesUseCasesFactory.listMoviesUseCase({config}),
  search_by_name_movies_use_case: MoviesUseCasesFactory.searchByNameMoviesUseCase(
    {config}
  ),
  search_movie_details_use_case: MoviesUseCasesFactory.searchMovieDetailsUseCase(
    {config}
  )
}

console.log('IT WORKS!!!!!') // eslint-disable-line

const Domain = EntryPointFactory({config, useCases})

export default Domain

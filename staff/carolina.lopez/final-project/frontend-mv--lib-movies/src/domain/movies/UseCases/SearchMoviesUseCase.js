import {UseCase} from '@s-ui/domain'

export default class SearchMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute({query}) {
    const searchMoviesEntities = await this._repository.searchMovies({query})
    return searchMoviesEntities.map(movieEntity => movieEntity.toJSON())
  }
}

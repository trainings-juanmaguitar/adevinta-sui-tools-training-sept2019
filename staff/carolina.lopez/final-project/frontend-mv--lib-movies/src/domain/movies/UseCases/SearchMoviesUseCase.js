import {UseCase} from '@s-ui/domain'

export default class SearchMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const searchMoviesEntities = await this._repository.searchMovies({query})
    console.log({searchMoviesEntities}) // eslint-disable-line
    return searchMoviesEntities.map(movieEntity => movieEntity.toJSON())
  }
}

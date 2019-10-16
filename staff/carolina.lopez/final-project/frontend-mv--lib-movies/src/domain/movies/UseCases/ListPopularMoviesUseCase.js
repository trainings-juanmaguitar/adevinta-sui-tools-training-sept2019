import {UseCase} from '@s-ui/domain'

export default class ListPopularMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const popularMoviesEntities = await this._repository.popularMovies()
    return popularMoviesEntities.map(movieEntity => movieEntity.toJSON())
  }
}

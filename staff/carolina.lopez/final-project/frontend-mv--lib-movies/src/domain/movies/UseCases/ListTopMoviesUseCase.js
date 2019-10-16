import {UseCase} from '@s-ui/domain'

export default class TopMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const topMoviesEntities = await this._repository.topMovies()
    return topMoviesEntities.map(movieEntity => movieEntity.toJSON())
  }
}

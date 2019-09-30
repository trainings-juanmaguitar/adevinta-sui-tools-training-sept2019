import {UseCase} from '@s-ui/domain'

export default class ListTopMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const topMoviesEntities = await this._repository.topMovies()
    console.log({topMoviesEntities}) // eslint-disable-line
    return topMoviesEntities.map(movieEntity => movieEntity.toJSON())
  }
}

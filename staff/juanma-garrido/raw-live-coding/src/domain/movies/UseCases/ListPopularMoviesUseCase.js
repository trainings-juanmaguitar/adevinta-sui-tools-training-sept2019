import {UseCase} from '@s-ui/domain'

export default class ListPopularMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const popularMoviesEntities = await this._repository.popularMovies()
    console.log({popularMoviesEntities}) // eslint-disable-line
    return popularMoviesEntities.map(movieEntity => movieEntity.toJSON())
  }
}

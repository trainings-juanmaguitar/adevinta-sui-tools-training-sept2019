import {UseCase} from '@s-ui/domain'

export default class ListNowMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const nowMoviesEntities = await this._repository.nowMovies()
    console.log({nowMoviesEntities}) // eslint-disable-line
    return nowMoviesEntities.map(movieEntity => movieEntity.toJSON())
  }
}

import {UseCase} from '@s-ui/domain'

export default class ListNowPlayingMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const nowPlayingMoviesEntities = await this._repository.nowPlayingMovies()
    return nowPlayingMoviesEntities.map(movieEntity => movieEntity.toJSON())
  }
}

import {UseCase} from '@s-ui/domain'

export default class ListUpcomingMoviesUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const upcomingMoviesEntities = await this._repository.upcomingMovies()
    return upcomingMoviesEntities.map(movieEntity => movieEntity.toJSON())
  }
}

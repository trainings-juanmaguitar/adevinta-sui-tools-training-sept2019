import {UseCase} from '@s-ui/domain'

export default class ListPodcastsUseCase extends UseCase {
  constructor({repository} = {}) {
    super()
    this._repository = repository
  }

  async execute() {
    const podcastEntities = await this._repository.all()
    return podcastEntities.map(podcastEntity => podcastEntity.toJSON())
  }
}

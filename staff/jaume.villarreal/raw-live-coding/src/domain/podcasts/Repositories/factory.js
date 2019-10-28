import PodcastsEntitiesFactory from '../Entities/factory'

import FirebasePodcastsRepository from './PodcastsRepositories'

export default class PodcastsRepositoriesFactory {
  static firebasePodcastsRepository = ({config}) =>
    new FirebasePodcastsRepository({
      config,
      podcasEntityFactory: PodcastsEntitiesFactory.PodcastEntity
    })
}

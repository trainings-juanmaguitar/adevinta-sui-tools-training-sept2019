import PodcastsEntitiesFactory from '../Entities/factory'
import FirebasePodcastsRepository from './FirebasePodcastsRepository'
import RawDataPodcastsRepository from './RawDataPodcastsRepository'

export default class PodcastsRepositoriesFactory {
  static firebasePodcastsRepository = ({config}) =>
    new FirebasePodcastsRepository({
      config,
      podcastEntityFactory: PodcastsEntitiesFactory.podcastEntity
    })

  static rawDataPodcastsRepository = ({config}) =>
    new RawDataPodcastsRepository({
      config,
      podcastEntityFactory: PodcastsEntitiesFactory.podcastEntity
    })
}

import PodcastEntity from './PodcastEntity'

export default class PodcastsEntitiesFactory {
  static PodcastEntity = podcast => new PodcastEntity(podcast)
}

import PodcastsRepository from './PodcastsRepositories'

export default class FirebasePodcastsRepository extends PodcastsRepository {
  constructor({config, podcastEntityFactory}) {
    super()
    this.config = config
    this._podcastEntityFactory = podcastEntityFactory
  }

  all() {
    return Promise.resolve([
      {id: 1, title: 'WebComponents', url: 'http://url.com', date: Date.now()}
    ]).map(this._podcastEntityFactory)
  }
}

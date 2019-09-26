import PodcastsRepository from './PodcastsRepository'

export default class FirebasePodcastsRepository extends PodcastsRepository {
  constructor({config, podcastEntityFactory}) {
    super()
    this._config = config
    this._podcastEntityFactory = podcastEntityFactory
  }

  async all() {
    return [
      {
        id: 1,
        title: 'Find a Job Today!!!',
        url: 'http://me.com',
        date: Date.now()
      }
    ].map(this._podcastEntityFactory)
  }
}

import PodcastsRepository from './PodcastsRepository'

export default class FirebasePodcastsRepository extends PodcastsRepository {
  constructor({config, podcastEntityFactory}) {
    super()
    this._config = config
    this._podcastEntityFactory = podcastEntityFactory
  }

  async all() {
    const db = this._config.get('firebaseDB')
    const podcastsSnapshots = await db.collection('podcasts').get()
    const podcasts = []
    podcastsSnapshots.forEach(doc =>
      podcasts.push(this._podcastEntityFactory(doc.data()))
    )

    return podcasts

    // return [
    //   {
    //     id: 1,
    //     title: 'Web Components',
    //     url: 'http://me.com',
    //     date: Date.now()
    //   }
    // ].map(this._podcastEntityFactory)
  }
}

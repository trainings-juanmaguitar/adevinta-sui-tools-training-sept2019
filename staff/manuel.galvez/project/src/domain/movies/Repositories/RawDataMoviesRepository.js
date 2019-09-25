import MoviesRepository from './MoviesRepository'

export default class RawDataMoviesRepository extends MoviesRepository {
  constructor({config, movieEntityFactory}) {
    super()
    this._config = config
    this._movieEntityFactory = movieEntityFactory
  }

  async all() {
    return [
      {
        id: 1,
        title: 'Fight Club',
        year: 1996,
        director: 'David Fincher'
      },
      {
        id: 2,
        title: 'Matrix',
        year: 1999,
        director: 'The Wachowskis'
      }
    ].map(this._movieEntityFactory)
  }
}

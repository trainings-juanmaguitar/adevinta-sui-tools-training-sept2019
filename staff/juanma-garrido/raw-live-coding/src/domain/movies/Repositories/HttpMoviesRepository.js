/* eslint-disable */
import MoviesRepository from './MoviesRepository'

export default class RawDataMoviesRepository extends MoviesRepository {
  constructor({config, movieEntityFactory, fetcher}) {
    super()
    this._config = config
    this._movieEntityFactory = movieEntityFactory
    this._fetcher = fetcher
  }

  async popularMovies() {
    const BASE_URL = this._config.get('THEMOVIEDB_API_BASE_URL')
    const ENDPOINT_POPULAR = this._config.get('POPULAR_MOVIES_ENDPOINT')
    const API_KEY = this._config.get('API_KEY')

    const URL = `${BASE_URL}${ENDPOINT_POPULAR}?api_key=${API_KEY}`

    const dataMovies = await this._fetcher.get(URL)
    const {data : { results: movies }} = dataMovies
    return movies.map(this._movieEntityFactory)
  }
}

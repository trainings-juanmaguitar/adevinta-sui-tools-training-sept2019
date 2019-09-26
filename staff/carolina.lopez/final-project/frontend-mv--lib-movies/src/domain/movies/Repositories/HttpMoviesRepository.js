/* eslint-disable */
import MoviesRepository from './MoviesRepository'

export default class RawDataMoviesRepository extends MoviesRepository {
  constructor({config, movieEntityFactory, fetcher}) {
    super()
    this._config = config
    this._movieEntityFactory = movieEntityFactory
    this._fetcher = fetcher

    const BASE_URL = this._config.get('THEMOVIEDB_API_BASE_URL')
    const API_KEY = this._config.get('API_KEY')

    this._URL_TEMPLATE = `${BASE_URL}<%ENDPOINT_USE_CASE%>?api_key=${API_KEY}`
  }

  async popularMovies() {
    const ENDPOINT_POPULAR = this._config.get('POPULAR_MOVIES_ENDPOINT')
    const URL = this._URL_TEMPLATE.replace('<%ENDPOINT_USE_CASE%>', ENDPOINT_POPULAR)

    const dataMovies = await this._fetcher.get(URL)
    const {data : { results: movies }} = dataMovies
    return movies.map(this._movieEntityFactory)
  }

  async nowMovies() {
    const ENDPOINT_NOW = this._config.get('NOW_MOVIES_ENDPOINT')
    const URL = this._URL_TEMPLATE.replace('<%ENDPOINT_USE_CASE%>', ENDPOINT_NOW)

    const dataMovies = await this._fetcher.get(URL)
    const {data : { results: movies }} = dataMovies
    return movies.map(this._movieEntityFactory)
  }

  async topMovies() {
    const ENDPOINT_TOP = this._config.get('TOP_MOVIES_ENDPOINT')
    const URL = this._URL_TEMPLATE.replace('<%ENDPOINT_USE_CASE%>', ENDPOINT_TOP)

    const dataMovies = await this._fetcher.get(URL)
    const {data : { results: movies }} = dataMovies
    return movies.map(this._movieEntityFactory)
  }

  async upcomingMovies() {
    const ENDPOINT_UPCOMING = this._config.get('UPCOMING_MOVIES_ENDPOINT')
    const URL = this._URL_TEMPLATE.replace('<%ENDPOINT_USE_CASE%>', ENDPOINT_UPCOMING)

    const dataMovies = await this._fetcher.get(URL)
    const {data : { results: movies }} = dataMovies
    return movies.map(this._movieEntityFactory)
  }
}
// devuelve un array de objetos entidad
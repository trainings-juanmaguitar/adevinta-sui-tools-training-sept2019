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

  async nowPlayingMovies() {
    const ENDPOINT_NOW_PLAYING = this._config.get('NOW_PLAYING_MOVIES_ENDPOINT')
    const URL = this._URL_TEMPLATE.replace('<%ENDPOINT_USE_CASE%>', ENDPOINT_NOW_PLAYING)

    const dataMovies = await this._fetcher.get(URL)
    const {data : { results: movies }} = dataMovies
    return movies.map(this._movieEntityFactory)
  }

  async searchMovies({query}) {
    const ENDPOINT_SEARCH = this._config.get('SEARCH_MOVIES_ENDPOINT')
    let URL = this._URL_TEMPLATE.replace('<%ENDPOINT_USE_CASE%>', ENDPOINT_SEARCH)
    URL += `&query=${query}`
    
    const dataMovies = await this._fetcher.get(URL)
    const {data : { results: movies }} = dataMovies
    return movies.map(this._movieEntityFactory)
  }

}

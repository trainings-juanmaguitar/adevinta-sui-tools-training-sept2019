import MoviesRepository from './MoviesRepository'

export default class RawDataMoviesRepository extends MoviesRepository {
  constructor({config, movieEntityFactory}) {
    super()
    this._config = config
    this._movieEntityFactory = movieEntityFactory
  }

  async popularMovies() {
    return [
      {
        id: 1,
        title: 'Back To The Future',
        overview: 'Marty gets back to the future...',
        language: 'en-EN',
        release: 1985,
        posterPath: 'cover.jpg'
      },
      {
        id: 2,
        title: 'Rocky',
        overview: 'Rocky almost win...',
        language: 'en-EN',
        release: 1976,
        posterPath: 'cover.jpg'
      }
    ].map(this._movieEntityFactory)
  }

  async nowMovies() {
    return [
      {
        id: 1,
        title: 'Back To The Future',
        overview: 'Marty gets back to the future...',
        language: 'en-EN',
        release: 1985,
        posterPath: 'cover.jpg'
      },
      {
        id: 2,
        title: 'Rocky',
        overview: 'Rocky almost win...',
        language: 'en-EN',
        release: 1976,
        posterPath: 'cover.jpg'
      }
    ].map(this._movieEntityFactory)
  }

  async topMovies() {
    return [
      {
        id: 1,
        title: 'Back To The Future',
        overview: 'Marty gets back to the future...',
        language: 'en-EN',
        release: 1985,
        posterPath: 'cover.jpg'
      },
      {
        id: 2,
        title: 'Rocky',
        overview: 'Rocky almost win...',
        language: 'en-EN',
        release: 1976,
        posterPath: 'cover.jpg'
      }
    ].map(this._movieEntityFactory)
  }

  async upcomingMovies() {
    return [
      {
        id: 1,
        title: 'Back To The Future',
        overview: 'Marty gets back to the future...',
        language: 'en-EN',
        release: 1985,
        posterPath: 'cover.jpg'
      },
      {
        id: 2,
        title: 'Rocky',
        overview: 'Rocky almost win...',
        language: 'en-EN',
        release: 1976,
        posterPath: 'cover.jpg'
      }
    ].map(this._movieEntityFactory)
  }
}

/* eslint-disable */
import {Entity} from '@s-ui/domain'

export default class MovieEntity extends Entity {
  constructor({
    id,
    title,
    release_date,
    overview,
    original_language,
    poster_path
  }) {
    super()
    this._id = id
    this._title = title
    this._overview = overview
    this._language = original_language
    this._release = release_date
    this._posterPath = poster_path
  }

  toJSON = () => ({
    id: this._id,
    title: this._title,
    overview: this._overview,
    language: this._language,
    release: this._release,
    posterPath: this._posterPath
  })
}

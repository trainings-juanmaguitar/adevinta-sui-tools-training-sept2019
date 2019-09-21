'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _domain = require('@s-ui/domain');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @export
 * @class MoviesListValueObject
 * @extends {ValueObject}
 * @param {array} moviesList - A list of movies entities
 */
var MoviesListValueObject = function (_ValueObject) {
  (0, _inherits3.default)(MoviesListValueObject, _ValueObject);

  /**
   * @param {Number} page
   * @param {Number} totalResults
   * @param {Number} totalPages
   * @param {Array<MovieEntity>} movies
   */
  function MoviesListValueObject(_ref) {
    var page = _ref.page,
        totalResults = _ref.totalResults,
        totalPages = _ref.totalPages,
        movies = _ref.movies;
    (0, _classCallCheck3.default)(this, MoviesListValueObject);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MoviesListValueObject.__proto__ || (0, _getPrototypeOf2.default)(MoviesListValueObject)).call(this));

    _this.toJSON = function () {
      return {
        page: _this._page,
        totalResults: _this._totalResults,
        totalPages: _this._totalPages,
        movies: _this._movies.map(function (movie) {
          return movie.toJSON();
        })
      };
    };

    _this._page = page;
    _this._totalResults = totalResults;
    _this._totalPages = totalPages;
    _this._movies = movies;
    return _this;
  }

  return MoviesListValueObject;
}(_domain.ValueObject);

exports.default = MoviesListValueObject;
module.exports = exports.default;
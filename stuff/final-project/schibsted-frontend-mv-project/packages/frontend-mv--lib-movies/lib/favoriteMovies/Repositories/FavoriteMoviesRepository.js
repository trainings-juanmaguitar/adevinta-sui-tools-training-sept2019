'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _domain = require('@s-ui/domain');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @interface
 */
var FavoriteMoviesRepository = function (_Repository) {
  (0, _inherits3.default)(FavoriteMoviesRepository, _Repository);

  function FavoriteMoviesRepository() {
    (0, _classCallCheck3.default)(this, FavoriteMoviesRepository);
    return (0, _possibleConstructorReturn3.default)(this, (FavoriteMoviesRepository.__proto__ || (0, _getPrototypeOf2.default)(FavoriteMoviesRepository)).apply(this, arguments));
  }

  (0, _createClass3.default)(FavoriteMoviesRepository, [{
    key: 'getIds',

    /**
     * @method
     * @return {Error}
     */
    value: function getIds() {
      throw new Error('[FavoriteMoviesRepository#getIds] must be implemented');
    }

    /**
     * @method
     * @return {Error}
     */

  }, {
    key: 'getMoviesList',
    value: function getMoviesList() {
      throw new Error('[FavoriteMoviesRepository#getMoviesList] must be implemented');
    }

    /**
     * @method
     * @return {Error}
     */

  }, {
    key: 'addFavoriteMovie',
    value: function addFavoriteMovie() {
      throw new Error('[FavoriteMoviesRepository#addFavoriteMovie] must be implemented');
    }
  }]);
  return FavoriteMoviesRepository;
}(_domain.Repository);

exports.default = FavoriteMoviesRepository;
module.exports = exports.default;
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
var MoviesRepository = function (_Repository) {
  (0, _inherits3.default)(MoviesRepository, _Repository);

  function MoviesRepository() {
    (0, _classCallCheck3.default)(this, MoviesRepository);
    return (0, _possibleConstructorReturn3.default)(this, (MoviesRepository.__proto__ || (0, _getPrototypeOf2.default)(MoviesRepository)).apply(this, arguments));
  }

  (0, _createClass3.default)(MoviesRepository, [{
    key: 'search',

    /**
     * @method
     * @return {Error}
     */
    value: function search() {
      throw new Error('[MoviesRepository#search] must be implemented');
    }

    /**
     * @method
     * @return {Error}
     */

  }, {
    key: 'popular',
    value: function popular() {
      throw new Error('[MoviesRepository#all] must be implemented');
    }

    /**
     * @method
     * @return {Error}
     */

  }, {
    key: 'getMovieById',
    value: function getMovieById() {
      throw new Error('[MoviesRepository#getMovieById] must be implemented');
    }
  }]);
  return MoviesRepository;
}(_domain.Repository);

exports.default = MoviesRepository;
module.exports = exports.default;
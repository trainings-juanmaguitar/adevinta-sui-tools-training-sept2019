'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _MoviesIdsValueObject = require('./MoviesIdsValueObject');

var _MoviesIdsValueObject2 = _interopRequireDefault(_MoviesIdsValueObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FavoriteMoviesValueObjectFactory = (_temp = _class = function FavoriteMoviesValueObjectFactory() {
  (0, _classCallCheck3.default)(this, FavoriteMoviesValueObjectFactory);
}, _class.moviesIdsValueObject = function (ids) {
  return new _MoviesIdsValueObject2.default(ids);
}, _temp);
exports.default = FavoriteMoviesValueObjectFactory;
module.exports = exports.default;
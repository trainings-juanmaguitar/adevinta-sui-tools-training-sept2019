'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require('../Repositories/factory');

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require('../../movies/Repositories/factory');

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require('../../movies/ValueObjects/factory');

var _factory6 = _interopRequireDefault(_factory5);

var _factory7 = require('../../movies/Mappers/factory');

var _factory8 = _interopRequireDefault(_factory7);

var _GetFavoritesMoviesService = require('./GetFavoritesMoviesService');

var _GetFavoritesMoviesService2 = _interopRequireDefault(_GetFavoritesMoviesService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FavoriteMoviesServicesFactory = (_temp = _class = function FavoriteMoviesServicesFactory() {
  (0, _classCallCheck3.default)(this, FavoriteMoviesServicesFactory);
}, _class.getFavoritesMoviesService = function (_ref) {
  var config = _ref.config;
  return new _GetFavoritesMoviesService2.default({
    config: config,
    favoriteMoviesRepository: _factory2.default.httpFavoriteMoviesRepository({ config: config }),
    moviesRepository: _factory4.default.httpMoviesRepository({
      config: config
    }),
    mapper: _factory8.default.movieMapper({ config: config }),
    moviesListValueObject: _factory6.default.moviesListValueObject
  });
}, _temp);
exports.default = FavoriteMoviesServicesFactory;
module.exports = exports.default;
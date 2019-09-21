'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require('../../fetcher/factory');

var _factory2 = _interopRequireDefault(_factory);

var _HTTPFavoriteMoviesRepository = require('./HTTPFavoriteMoviesRepository');

var _HTTPFavoriteMoviesRepository2 = _interopRequireDefault(_HTTPFavoriteMoviesRepository);

var _factory3 = require('../ValueObjects/factory');

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require('../../logger/factory');

var _factory6 = _interopRequireDefault(_factory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FavoriteMoviesRepositoriesFactory = (_temp = _class = function FavoriteMoviesRepositoriesFactory() {
  (0, _classCallCheck3.default)(this, FavoriteMoviesRepositoriesFactory);
}, _class.httpFavoriteMoviesRepository = function (_ref) {
  var config = _ref.config;
  return new _HTTPFavoriteMoviesRepository2.default({
    config: config,
    log: (0, _factory6.default)({ prefix: 'HTTPFavoriteMoviesRepository' }),
    fetcher: _factory2.default.customHttpFetcher({ config: config }),
    favoriteMoviesValueObject: _factory4.default.moviesIdsValueObject
  });
}, _temp);
exports.default = FavoriteMoviesRepositoriesFactory;
module.exports = exports.default;
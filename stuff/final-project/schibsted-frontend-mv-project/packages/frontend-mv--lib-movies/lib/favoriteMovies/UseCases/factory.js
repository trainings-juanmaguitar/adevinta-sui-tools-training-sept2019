'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require('../Repositories/factory');

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require('../Services/factory');

var _factory4 = _interopRequireDefault(_factory3);

var _GetFavoritesMoviesIdsUseCase = require('./GetFavoritesMoviesIdsUseCase');

var _GetFavoritesMoviesIdsUseCase2 = _interopRequireDefault(_GetFavoritesMoviesIdsUseCase);

var _GetFavoritesMoviesUseCase = require('./GetFavoritesMoviesUseCase');

var _GetFavoritesMoviesUseCase2 = _interopRequireDefault(_GetFavoritesMoviesUseCase);

var _AddFavoriteMoviesUseCase = require('./AddFavoriteMoviesUseCase');

var _AddFavoriteMoviesUseCase2 = _interopRequireDefault(_AddFavoriteMoviesUseCase);

var _RemoveFavoriteMoviesUseCase = require('./RemoveFavoriteMoviesUseCase');

var _RemoveFavoriteMoviesUseCase2 = _interopRequireDefault(_RemoveFavoriteMoviesUseCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FavoriteMoviesUseCasesFactory = (_temp = _class = function FavoriteMoviesUseCasesFactory() {
  (0, _classCallCheck3.default)(this, FavoriteMoviesUseCasesFactory);
}, _class.getFavoritesMoviesIdsUseCase = function (_ref) {
  var config = _ref.config;
  return new _GetFavoritesMoviesIdsUseCase2.default({
    repository: _factory2.default.httpFavoriteMoviesRepository({ config: config })
  });
}, _class.getFavoritesMoviesUseCase = function (_ref2) {
  var config = _ref2.config;
  return new _GetFavoritesMoviesUseCase2.default({
    service: _factory4.default.getFavoritesMoviesService({ config: config })
  });
}, _class.addFavoriteMoviesUseCase = function (_ref3) {
  var config = _ref3.config;
  return new _AddFavoriteMoviesUseCase2.default({
    repository: _factory2.default.httpFavoriteMoviesRepository({ config: config })
  });
}, _class.removeFavoriteMoviesUseCase = function (_ref4) {
  var config = _ref4.config;
  return new _RemoveFavoriteMoviesUseCase2.default({
    repository: _factory2.default.httpFavoriteMoviesRepository({ config: config })
  });
}, _temp);
exports.default = FavoriteMoviesUseCasesFactory;
module.exports = exports.default;
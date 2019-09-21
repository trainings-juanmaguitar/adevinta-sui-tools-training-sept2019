'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require('../../fetcher/factory');

var _factory2 = _interopRequireDefault(_factory);

var _HTTPMoviesRepository = require('./HTTPMoviesRepository');

var _HTTPMoviesRepository2 = _interopRequireDefault(_HTTPMoviesRepository);

var _factory3 = require('../Mappers/factory');

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require('../ValueObjects/factory');

var _factory6 = _interopRequireDefault(_factory5);

var _factory7 = require('../../logger/factory');

var _factory8 = _interopRequireDefault(_factory7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesRepositoriesFactory = (_temp = _class = function MoviesRepositoriesFactory() {
  (0, _classCallCheck3.default)(this, MoviesRepositoriesFactory);
}, _class.httpMoviesRepository = function (_ref) {
  var config = _ref.config;
  return new _HTTPMoviesRepository2.default({
    config: config,
    mapper: _factory4.default.movieMapper({ config: config }),
    log: (0, _factory8.default)({ prefix: 'HTTPMoviesRepository' }),
    fetcher: _factory2.default.customHttpFetcher({ config: config }),
    moviesListValueObject: _factory6.default.moviesListValueObject
  });
}, _temp);
exports.default = MoviesRepositoriesFactory;
module.exports = exports.default;
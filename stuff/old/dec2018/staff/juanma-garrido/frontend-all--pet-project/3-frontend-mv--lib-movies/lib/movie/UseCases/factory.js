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

var _GetPopularMoviesUseCase = require('./GetPopularMoviesUseCase');

var _GetPopularMoviesUseCase2 = _interopRequireDefault(_GetPopularMoviesUseCase);

var _SearchMoviesUseCase = require('./SearchMoviesUseCase');

var _SearchMoviesUseCase2 = _interopRequireDefault(_SearchMoviesUseCase);

var _GetMovieDetailsByIdUseCase = require('./GetMovieDetailsByIdUseCase');

var _GetMovieDetailsByIdUseCase2 = _interopRequireDefault(_GetMovieDetailsByIdUseCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesUseCasesFactory = (_temp = _class = function MoviesUseCasesFactory() {
  (0, _classCallCheck3.default)(this, MoviesUseCasesFactory);
}, _class.searchMoviesUseCase = function (_ref) {
  var config = _ref.config;
  return new _SearchMoviesUseCase2.default({
    repository: _factory2.default.httpMoviesRepository({ config: config })
  });
}, _class.getMovieDetailsByIdUseCase = function (_ref2) {
  var config = _ref2.config;
  return new _GetMovieDetailsByIdUseCase2.default({
    repository: _factory2.default.httpMoviesRepository({ config: config })
  });
}, _class.getPopularMoviesUseCase = function (_ref3) {
  var config = _ref3.config;
  return new _GetPopularMoviesUseCase2.default({
    repository: _factory2.default.httpMoviesRepository({ config: config })
  });
}, _temp);
exports.default = MoviesUseCasesFactory;
module.exports = exports.default;
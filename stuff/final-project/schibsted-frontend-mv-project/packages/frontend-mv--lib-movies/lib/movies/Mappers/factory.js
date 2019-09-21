'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _MovieMapper = require('./MovieMapper');

var _MovieMapper2 = _interopRequireDefault(_MovieMapper);

var _factory = require('../Entities/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesMapperFactory = (_temp = _class = function MoviesMapperFactory() {
  (0, _classCallCheck3.default)(this, MoviesMapperFactory);
}, _class.movieMapper = function (_ref) {
  var config = _ref.config;
  return new _MovieMapper2.default({
    config: config,
    movieEntity: _factory2.default.movieEntity
  });
}, _temp);
exports.default = MoviesMapperFactory;
module.exports = exports.default;
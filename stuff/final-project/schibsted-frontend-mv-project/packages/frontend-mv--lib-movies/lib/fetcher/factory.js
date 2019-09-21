'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _cookie = require('@s-ui/js/lib/cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _domain = require('@s-ui/domain');

var _CustomHttpFetcher = require('./CustomHttpFetcher');

var _CustomHttpFetcher2 = _interopRequireDefault(_CustomHttpFetcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomFetcherFactory = (_temp = _class = function CustomFetcherFactory() {
  (0, _classCallCheck3.default)(this, CustomFetcherFactory);
}, _class.customHttpFetcher = function (_ref) {
  var config = _ref.config;
  return new _CustomHttpFetcher2.default({
    config: config,
    cookie: _cookie2.default,
    fetcher: _domain.FetcherFactory.httpFetcher({ config: config })
  });
}, _temp);
exports.default = CustomFetcherFactory;
module.exports = exports.default;
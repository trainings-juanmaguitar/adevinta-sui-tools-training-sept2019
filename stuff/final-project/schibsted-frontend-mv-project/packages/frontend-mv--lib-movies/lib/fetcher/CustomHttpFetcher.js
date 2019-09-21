'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomHttpFetcher = function () {
  function CustomHttpFetcher(_ref) {
    var config = _ref.config,
        cookie = _ref.cookie,
        fetcher = _ref.fetcher;
    (0, _classCallCheck3.default)(this, CustomHttpFetcher);

    this._config = config;
    this._cookie = cookie;
    this._fetcher = fetcher;
  }

  (0, _createClass3.default)(CustomHttpFetcher, [{
    key: 'setHeaders',
    value: function setHeaders() {
      var cookieUserName = this._config.get('COOKIE_SESSION_NAME');
      var cookies = this._config.get('cookies');
      if (cookies) {
        var jsonToken = this._cookie.parse(cookies)[cookieUserName];

        var _JSON$parse = JSON.parse(jsonToken),
            token = _JSON$parse.token;

        this._fetcher._axios.interceptors.request.use(function (config) {
          config.headers = { Authorization: 'Bearer ' + token };
          return config;
        });
      }
    }
  }, {
    key: 'get',
    value: function get(url, options) {
      this.setHeaders();
      return this._fetcher.get(url, options);
    }
  }, {
    key: 'post',
    value: function post(url, body, options) {
      this.setHeaders();
      return this._fetcher.post(url, body, options);
    }
  }, {
    key: 'put',
    value: function put(url, body, options) {
      this.setHeaders();
      return this._fetcher.put(url, body, options);
    }
  }, {
    key: 'delete',
    value: function _delete(url, options) {
      this.setHeaders();
      return this._fetcher.delete(url, options);
    }
  }]);
  return CustomHttpFetcher;
}();

exports.default = CustomHttpFetcher;
module.exports = exports.default;
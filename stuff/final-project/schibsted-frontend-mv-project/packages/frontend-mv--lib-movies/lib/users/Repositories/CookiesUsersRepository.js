'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _UsersRepository2 = require('./UsersRepository');

var _UsersRepository3 = _interopRequireDefault(_UsersRepository2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CookiesUsersRepository = function (_UsersRepository) {
  (0, _inherits3.default)(CookiesUsersRepository, _UsersRepository);

  function CookiesUsersRepository() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        config = _ref.config,
        log = _ref.log,
        cookie = _ref.cookie;

    (0, _classCallCheck3.default)(this, CookiesUsersRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CookiesUsersRepository.__proto__ || (0, _getPrototypeOf2.default)(CookiesUsersRepository)).call(this));

    _this._log = log;
    _this._cookie = cookie;
    _this._cookieUserName = config.get('COOKIE_SESSION_NAME');
    return _this;
  }

  (0, _createClass3.default)(CookiesUsersRepository, [{
    key: 'loginPersist',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
        var token = _ref2.token;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._log('Persisting TOKEN: ' + this._cookieUserName);
                this._cookie && this._cookie.set(this._cookieUserName, { token: token });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loginPersist(_x2) {
        return _ref3.apply(this, arguments);
      }

      return loginPersist;
    }()
  }, {
    key: 'logout',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._log('Removing TOKEN: ' + this._cookieUserName);
                this._cookie.remove(this._cookieUserName);

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function logout() {
        return _ref4.apply(this, arguments);
      }

      return logout;
    }()
  }]);
  return CookiesUsersRepository;
}(_UsersRepository3.default);

exports.default = CookiesUsersRepository;
module.exports = exports.default;
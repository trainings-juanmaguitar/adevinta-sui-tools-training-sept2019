'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _awaitToJs = require('await-to-js');

var _awaitToJs2 = _interopRequireDefault(_awaitToJs);

var _UsersRepository2 = require('./UsersRepository');

var _UsersRepository3 = _interopRequireDefault(_UsersRepository2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTTPUsersRepository = function (_UsersRepository) {
  (0, _inherits3.default)(HTTPUsersRepository, _UsersRepository);

  function HTTPUsersRepository() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        config = _ref.config,
        log = _ref.log,
        fetcher = _ref.fetcher,
        userEntityFactory = _ref.userEntityFactory,
        cookie = _ref.cookie;

    (0, _classCallCheck3.default)(this, HTTPUsersRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HTTPUsersRepository.__proto__ || (0, _getPrototypeOf2.default)(HTTPUsersRepository)).call(this));

    _this._config = config;
    _this._log = log;
    _this._userEntityFactory = userEntityFactory;
    _this._fetcher = fetcher;
    return _this;
  }

  (0, _createClass3.default)(HTTPUsersRepository, [{
    key: 'current',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var host, url, _ref3, _ref4, err, response, user;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._log('Getting CURRENT user');
                host = this._config.get('FIREBASE_API_URL');
                url = host + '/users/current/';
                _context.next = 5;
                return (0, _awaitToJs2.default)(this._fetcher.get(url));

              case 5:
                _ref3 = _context.sent;
                _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
                err = _ref4[0];
                response = _ref4[1];

                if (!err) {
                  _context.next = 12;
                  break;
                }

                console.log(err); // eslint-disable-line
                return _context.abrupt('return');

              case 12:
                user = response.data.user;
                return _context.abrupt('return', user && this._userEntityFactory(user));

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function current() {
        return _ref2.apply(this, arguments);
      }

      return current;
    }()
  }]);
  return HTTPUsersRepository;
}(_UsersRepository3.default);

exports.default = HTTPUsersRepository;
module.exports = exports.default;
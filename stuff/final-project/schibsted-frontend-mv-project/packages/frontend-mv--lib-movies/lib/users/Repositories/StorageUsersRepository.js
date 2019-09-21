'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var StorageUsersRepository = function (_UsersRepository) {
  (0, _inherits3.default)(StorageUsersRepository, _UsersRepository);

  function StorageUsersRepository() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        config = _ref.config,
        log = _ref.log,
        storage = _ref.storage,
        userEntityFactory = _ref.userEntityFactory;

    (0, _classCallCheck3.default)(this, StorageUsersRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StorageUsersRepository.__proto__ || (0, _getPrototypeOf2.default)(StorageUsersRepository)).call(this));
    /* eslint-disable */


    _this._config = config;
    _this._log = log;
    _this._userEntityFactory = userEntityFactory;
    _this._storage = storage;
    _this._storageUserName = _this._config.get('STORAGE_USER_NAME');
    return _this;
  }

  (0, _createClass3.default)(StorageUsersRepository, [{
    key: 'loginPersist',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
        var user = _ref2.user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._log('Persisting USER: ' + this._storageUserName);
                this._storage.setItem(this._storageUserName, (0, _stringify2.default)(user));

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
    key: 'current',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var jsonUser, user;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._log('Getting CURRENT user: ' + this._storageUserName);
                jsonUser = this._storage.getItem(this._storageUserName);

                if (!jsonUser) {
                  _context2.next = 5;
                  break;
                }

                user = JSON.parse(jsonUser);
                return _context2.abrupt('return', this._userEntityFactory(user));

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function current() {
        return _ref4.apply(this, arguments);
      }

      return current;
    }()
  }, {
    key: 'logout',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._log('Removing USER: ' + this._storageUserName);
                this._storage.removeItem(this._storageUserName);

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function logout() {
        return _ref5.apply(this, arguments);
      }

      return logout;
    }()
  }]);
  return StorageUsersRepository;
}(_UsersRepository3.default);

exports.default = StorageUsersRepository;
module.exports = exports.default;
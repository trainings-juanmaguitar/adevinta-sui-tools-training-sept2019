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

var FireBaseUsersRepository = function (_UsersRepository) {
  (0, _inherits3.default)(FireBaseUsersRepository, _UsersRepository);

  function FireBaseUsersRepository() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        config = _ref.config,
        log = _ref.log,
        userEntityFactory = _ref.userEntityFactory;

    (0, _classCallCheck3.default)(this, FireBaseUsersRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FireBaseUsersRepository.__proto__ || (0, _getPrototypeOf2.default)(FireBaseUsersRepository)).call(this));

    _this._config = config;
    _this._log = log;
    _this._userEntityFactory = userEntityFactory;
    return _this;
  }

  (0, _createClass3.default)(FireBaseUsersRepository, [{
    key: 'loginWithGoogle',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var firebase, googleProvider, _ref3, user, token, uid, displayName, email, photoURL;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /* eslint-disable */
                this._log('LOGIN USER with Google Provider');
                firebase = this._config.get('firebase');
                googleProvider = new firebase.auth.GoogleAuthProvider();
                _context.next = 5;
                return firebase.auth().signInWithPopup(googleProvider);

              case 5:
                _ref3 = _context.sent;
                user = _ref3.user;
                _context.next = 9;
                return firebase.auth().currentUser.getIdToken();

              case 9:
                token = _context.sent;
                uid = user.uid, displayName = user.displayName, email = user.email, photoURL = user.photoURL;
                return _context.abrupt('return', this._userEntityFactory({ uid: uid, displayName: displayName, email: email, photoURL: photoURL, token: token }));

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loginWithGoogle() {
        return _ref2.apply(this, arguments);
      }

      return loginWithGoogle;
    }()
  }]);
  return FireBaseUsersRepository;
}(_UsersRepository3.default);

exports.default = FireBaseUsersRepository;
module.exports = exports.default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersRepository = function () {
  function UsersRepository() {
    (0, _classCallCheck3.default)(this, UsersRepository);
  }

  (0, _createClass3.default)(UsersRepository, [{
    key: 'current',
    value: function current() {
      throw Error('[UsersRepository#current] must be implemented');
    }
  }, {
    key: 'loginPersist',
    value: function loginPersist() {
      throw Error('[UsersRepository#persist] must be implemented');
    }
  }, {
    key: 'login',
    value: function login() {
      throw Error('[UsersRepository#login] must be implemented');
    }
  }, {
    key: 'loginWithGoogle',
    value: function loginWithGoogle() {
      throw Error('[UsersRepository#loginWithGoogle] must be implemented');
    }
  }, {
    key: 'logout',
    value: function logout() {
      throw Error('[UsersRepository#logout] must be implemented');
    }
  }]);
  return UsersRepository;
}();

exports.default = UsersRepository;
module.exports = exports.default;
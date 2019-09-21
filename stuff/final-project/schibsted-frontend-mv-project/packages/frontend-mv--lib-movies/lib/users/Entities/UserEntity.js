'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _Entity2 = require('@s-ui/domain/lib/Entity');

var _Entity3 = _interopRequireDefault(_Entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserEntity = function (_Entity) {
  (0, _inherits3.default)(UserEntity, _Entity);

  function UserEntity() {
    (0, _classCallCheck3.default)(this, UserEntity);
    return (0, _possibleConstructorReturn3.default)(this, (UserEntity.__proto__ || (0, _getPrototypeOf2.default)(UserEntity)).apply(this, arguments));
  }

  (0, _createClass3.default)(UserEntity, [{
    key: 'id',
    value: function id() {
      return this._id;
    }
  }, {
    key: 'email',
    value: function email() {
      return this._email;
    }
  }, {
    key: 'isAdmin',
    value: function isAdmin() {
      return Boolean(this._isAdmin);
    }
  }]);
  return UserEntity;
}(_Entity3.default);

exports.default = UserEntity;
module.exports = exports.default;
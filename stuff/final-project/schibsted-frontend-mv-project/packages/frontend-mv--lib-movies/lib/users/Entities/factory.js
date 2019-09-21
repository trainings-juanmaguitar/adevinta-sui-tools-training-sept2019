'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _UserEntity = require('./UserEntity');

var _UserEntity2 = _interopRequireDefault(_UserEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersEntitiesFactory = (_temp = _class = function UsersEntitiesFactory() {
  (0, _classCallCheck3.default)(this, UsersEntitiesFactory);
}, _class.userEntity = function (props) {
  return new _UserEntity2.default(props);
}, _temp);
exports.default = UsersEntitiesFactory;
module.exports = exports.default;
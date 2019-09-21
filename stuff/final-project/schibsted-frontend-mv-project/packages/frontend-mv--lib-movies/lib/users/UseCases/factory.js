'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require('../Services/factory');

var _factory2 = _interopRequireDefault(_factory);

var _CurrentUsersUseCase = require('./CurrentUsersUseCase');

var _CurrentUsersUseCase2 = _interopRequireDefault(_CurrentUsersUseCase);

var _LoginWithGoogleUsersUseCase = require('./LoginWithGoogleUsersUseCase');

var _LoginWithGoogleUsersUseCase2 = _interopRequireDefault(_LoginWithGoogleUsersUseCase);

var _LogoutUsersUseCase = require('./LogoutUsersUseCase');

var _LogoutUsersUseCase2 = _interopRequireDefault(_LogoutUsersUseCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersUseCasesFactory = (_temp = _class = function UsersUseCasesFactory() {
  (0, _classCallCheck3.default)(this, UsersUseCasesFactory);
}, _class.currentUserUseCase = function (_ref) {
  var config = _ref.config;
  return new _CurrentUsersUseCase2.default({
    service: _factory2.default.currentUsersService({ config: config })
  });
}, _class.loginWithGoogleUseCase = function (_ref2) {
  var config = _ref2.config;
  return new _LoginWithGoogleUsersUseCase2.default({
    service: _factory2.default.loginWithGoogleUsersService({ config: config })
  });
}, _class.logoutUseCase = function (_ref3) {
  var config = _ref3.config;
  return new _LogoutUsersUseCase2.default({
    service: _factory2.default.logoutUsersService({ config: config })
  });
}, _temp);
exports.default = UsersUseCasesFactory;
module.exports = exports.default;
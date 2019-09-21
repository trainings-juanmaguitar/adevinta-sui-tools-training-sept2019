'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require('../Repositories/factory');

var _factory2 = _interopRequireDefault(_factory);

var _LoginWithGoogleUsersService = require('./LoginWithGoogleUsersService');

var _LoginWithGoogleUsersService2 = _interopRequireDefault(_LoginWithGoogleUsersService);

var _LogoutUsersService = require('./LogoutUsersService');

var _LogoutUsersService2 = _interopRequireDefault(_LogoutUsersService);

var _CurrentUserUsersService = require('./CurrentUserUsersService');

var _CurrentUserUsersService2 = _interopRequireDefault(_CurrentUserUsersService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersServicesFactory = (_temp = _class = function UsersServicesFactory() {
  (0, _classCallCheck3.default)(this, UsersServicesFactory);
}, _class.loginWithGoogleUsersService = function (_ref) {
  var config = _ref.config;
  return new _LoginWithGoogleUsersService2.default({
    cookiesRepository: _factory2.default.cookiesUsersRepository({
      config: config
    }),
    storageRepository: _factory2.default.storageUsersRepository({
      config: config
    }),
    fireBaseRepository: _factory2.default.fireBaseUsersRepository({
      config: config
    })
  });
}, _class.currentUsersService = function (_ref2) {
  var config = _ref2.config;
  return new _CurrentUserUsersService2.default({
    config: config,
    storageRepository: _factory2.default.storageUsersRepository({
      config: config
    }),
    httpRepository: _factory2.default.httpUsersRepository({
      config: config
    })
  });
}, _class.logoutUsersService = function (_ref3) {
  var config = _ref3.config;
  return new _LogoutUsersService2.default({
    cookiesRepository: _factory2.default.cookiesUsersRepository({
      config: config
    }),
    storageRepository: _factory2.default.storageUsersRepository({
      config: config
    })
  });
}, _temp);
exports.default = UsersServicesFactory;
module.exports = exports.default;
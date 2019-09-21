'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require('../../fetcher/factory');

var _factory2 = _interopRequireDefault(_factory);

var _cookie = require('@s-ui/js/lib/cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _factory3 = require('../Entities/factory.js');

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require('../../logger/factory');

var _factory6 = _interopRequireDefault(_factory5);

var _FireBaseUsersRepository = require('./FireBaseUsersRepository');

var _FireBaseUsersRepository2 = _interopRequireDefault(_FireBaseUsersRepository);

var _HTTPUsersRepository = require('./HTTPUsersRepository');

var _HTTPUsersRepository2 = _interopRequireDefault(_HTTPUsersRepository);

var _StorageUsersRepository = require('./StorageUsersRepository');

var _StorageUsersRepository2 = _interopRequireDefault(_StorageUsersRepository);

var _CookiesUsersRepository = require('./CookiesUsersRepository');

var _CookiesUsersRepository2 = _interopRequireDefault(_CookiesUsersRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersRepositoriesFactory = (_temp = _class = function UsersRepositoriesFactory() {
  (0, _classCallCheck3.default)(this, UsersRepositoriesFactory);
}, _class.fireBaseUsersRepository = function (_ref) {
  var config = _ref.config;
  return new _FireBaseUsersRepository2.default({
    config: config,
    log: (0, _factory6.default)({ prefix: 'FireBaseUsersRepository' }),
    userEntityFactory: _factory4.default.userEntity
  });
}, _class.httpUsersRepository = function (_ref2) {
  var config = _ref2.config;
  return new _HTTPUsersRepository2.default({
    config: config,
    log: (0, _factory6.default)({ prefix: 'HTTPUsersRepository' }),
    userEntityFactory: _factory4.default.userEntity,
    fetcher: _factory2.default.customHttpFetcher({ config: config })
  });
}, _class.storageUsersRepository = function (_ref3) {
  var config = _ref3.config;
  return new _StorageUsersRepository2.default({
    config: config,
    storage: typeof window !== 'undefined' && window.sessionStorage,
    log: (0, _factory6.default)({ prefix: 'StorageUsersRepository' }),
    userEntityFactory: _factory4.default.userEntity
  });
}, _class.cookiesUsersRepository = function (_ref4) {
  var config = _ref4.config;
  return new _CookiesUsersRepository2.default({
    config: config,
    cookie: _cookie2.default,
    log: (0, _factory6.default)({ prefix: 'CookiesUsersRepository' })
  });
}, _temp);
exports.default = UsersRepositoriesFactory;
module.exports = exports.default;
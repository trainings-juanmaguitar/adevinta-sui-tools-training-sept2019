'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _domain = require('@s-ui/domain');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoutUsersService = function (_Service) {
  (0, _inherits3.default)(LogoutUsersService, _Service);

  /**
   * @constructor
   * @param {Object} deps
   * @param {HTTPUsersRepository} deps.httpRepository
   * @param {StorageUsersRepository} deps.storageRepository
   */
  function LogoutUsersService(_ref) {
    var httpRepository = _ref.httpRepository,
        storageRepository = _ref.storageRepository,
        config = _ref.config;
    (0, _classCallCheck3.default)(this, LogoutUsersService);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LogoutUsersService.__proto__ || (0, _getPrototypeOf2.default)(LogoutUsersService)).call(this));

    _this._config = config;
    _this._httpRepository = httpRepository;
    _this._storageRepository = storageRepository;
    return _this;
  }

  (0, _createClass3.default)(LogoutUsersService, [{
    key: 'execute',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var isClient;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isClient = this._config.get('isClient');
                return _context.abrupt('return', isClient ? this._storageRepository.current() : this._httpRepository.current());

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function execute() {
        return _ref2.apply(this, arguments);
      }

      return execute;
    }()
  }]);
  return LogoutUsersService;
}(_domain.Service);

exports.default = LogoutUsersService;
module.exports = exports.default;
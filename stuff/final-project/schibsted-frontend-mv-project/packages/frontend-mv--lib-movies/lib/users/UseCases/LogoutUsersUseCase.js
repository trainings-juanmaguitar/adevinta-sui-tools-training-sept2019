'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/**
 * @implements UseCase
 */
var LogoutUsersUseCase = function (_UseCase) {
  (0, _inherits3.default)(LogoutUsersUseCase, _UseCase);

  function LogoutUsersUseCase() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        service = _ref.service;

    (0, _classCallCheck3.default)(this, LogoutUsersUseCase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LogoutUsersUseCase.__proto__ || (0, _getPrototypeOf2.default)(LogoutUsersUseCase)).call(this));

    _this._service = service;
    return _this;
  }

  (0, _createClass3.default)(LogoutUsersUseCase, [{
    key: 'execute',
    value: function execute() {
      return this._service.execute();
    }
  }]);
  return LogoutUsersUseCase;
}(_domain.UseCase);

exports.default = LogoutUsersUseCase;
module.exports = exports.default;
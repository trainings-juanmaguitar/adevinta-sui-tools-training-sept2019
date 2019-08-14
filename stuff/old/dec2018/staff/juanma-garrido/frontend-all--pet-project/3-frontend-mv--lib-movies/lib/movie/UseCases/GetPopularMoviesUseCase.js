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

var _domain = require('@s-ui/domain');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetPopularMoviesUseCase = function (_UseCase) {
  (0, _inherits3.default)(GetPopularMoviesUseCase, _UseCase);

  function GetPopularMoviesUseCase() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        repository = _ref.repository;

    (0, _classCallCheck3.default)(this, GetPopularMoviesUseCase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GetPopularMoviesUseCase.__proto__ || (0, _getPrototypeOf2.default)(GetPopularMoviesUseCase)).call(this));

    _this._repository = repository;
    return _this;
  }

  (0, _createClass3.default)(GetPopularMoviesUseCase, [{
    key: 'execute',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var results;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._repository.popular();

              case 2:
                results = _context.sent;
                return _context.abrupt('return', results.map(function (movieEntity) {
                  return movieEntity.toJSON();
                }));

              case 4:
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
  return GetPopularMoviesUseCase;
}(_domain.UseCase);

exports.default = GetPopularMoviesUseCase;
module.exports = exports.default;
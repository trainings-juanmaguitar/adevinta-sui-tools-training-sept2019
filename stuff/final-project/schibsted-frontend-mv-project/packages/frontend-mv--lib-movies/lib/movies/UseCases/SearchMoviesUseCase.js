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

var SearchMoviesUseCase = function (_UseCase) {
  (0, _inherits3.default)(SearchMoviesUseCase, _UseCase);

  function SearchMoviesUseCase() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        repository = _ref.repository;

    (0, _classCallCheck3.default)(this, SearchMoviesUseCase);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchMoviesUseCase.__proto__ || (0, _getPrototypeOf2.default)(SearchMoviesUseCase)).call(this));

    _this._repository = repository;
    return _this;
  }

  (0, _createClass3.default)(SearchMoviesUseCase, [{
    key: 'execute',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            query = _ref3.query,
            page = _ref3.page,
            language = _ref3.language,
            region = _ref3.region;

        var resultsSearchMovies;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._repository.search({
                  query: query,
                  page: page,
                  language: language,
                  region: region
                });

              case 2:
                resultsSearchMovies = _context.sent;
                return _context.abrupt('return', resultsSearchMovies.toJSON());

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
  return SearchMoviesUseCase;
}(_domain.UseCase);

exports.default = SearchMoviesUseCase;
module.exports = exports.default;
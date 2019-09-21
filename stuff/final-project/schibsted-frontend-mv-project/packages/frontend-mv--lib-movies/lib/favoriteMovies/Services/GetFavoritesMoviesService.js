'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var GetFavoritesMoviesService = function (_Service) {
  (0, _inherits3.default)(GetFavoritesMoviesService, _Service);

  function GetFavoritesMoviesService(_ref) {
    var favoriteMoviesRepository = _ref.favoriteMoviesRepository,
        moviesRepository = _ref.moviesRepository,
        moviesListValueObject = _ref.moviesListValueObject,
        mapper = _ref.mapper,
        config = _ref.config;
    (0, _classCallCheck3.default)(this, GetFavoritesMoviesService);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GetFavoritesMoviesService.__proto__ || (0, _getPrototypeOf2.default)(GetFavoritesMoviesService)).call(this));

    _this._config = config;
    _this._mapper = mapper;
    _this._favoriteMoviesRepository = favoriteMoviesRepository;
    _this._moviesRepository = moviesRepository;
    _this._moviesListValueObject = moviesListValueObject;
    return _this;
  }

  (0, _createClass3.default)(GetFavoritesMoviesService, [{
    key: 'execute',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var idsFavoritesMovies, _ref3, _ref3$ids, ids, favoriteMovies;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._favoriteMoviesRepository.getIds();

              case 2:
                idsFavoritesMovies = _context.sent;
                _ref3 = idsFavoritesMovies && idsFavoritesMovies.toJSON(), _ref3$ids = _ref3.ids, ids = _ref3$ids === undefined ? [] : _ref3$ids;
                _context.next = 6;
                return _promise2.default.all(ids.map(function (id) {
                  return _this2._moviesRepository.getMovieById({ id: id });
                }));

              case 6:
                favoriteMovies = _context.sent;
                return _context.abrupt('return', this._moviesListValueObject({
                  page: 1,
                  totalResults: favoriteMovies.length,
                  totalPages: 1,
                  movies: favoriteMovies
                }));

              case 8:
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
  return GetFavoritesMoviesService;
}(_domain.Service);

exports.default = GetFavoritesMoviesService;
module.exports = exports.default;
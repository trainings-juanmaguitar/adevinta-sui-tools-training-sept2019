'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _FavoriteMoviesRepository = require('./FavoriteMoviesRepository');

var _FavoriteMoviesRepository2 = _interopRequireDefault(_FavoriteMoviesRepository);

var _awaitToJs = require('await-to-js');

var _awaitToJs2 = _interopRequireDefault(_awaitToJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTTPFavoriteMoviesRepository = function (_FavoriteMoviesReposi) {
  (0, _inherits3.default)(HTTPFavoriteMoviesRepository, _FavoriteMoviesReposi);

  function HTTPFavoriteMoviesRepository() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        config = _ref.config,
        log = _ref.log,
        fetcher = _ref.fetcher,
        favoriteMoviesValueObject = _ref.favoriteMoviesValueObject;

    (0, _classCallCheck3.default)(this, HTTPFavoriteMoviesRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HTTPFavoriteMoviesRepository.__proto__ || (0, _getPrototypeOf2.default)(HTTPFavoriteMoviesRepository)).call(this));

    _this._config = config;
    _this._log = log;
    _this._fetcher = fetcher;
    _this._favoriteMoviesValueObject = favoriteMoviesValueObject;

    _this._host = _this._config.get('FIREBASE_API_URL');
    _this._moviesHost = _this._config.get('THEMOVIEDB_API_BASE_URL');
    return _this;
  }

  (0, _createClass3.default)(HTTPFavoriteMoviesRepository, [{
    key: 'getIds',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var host, url, _ref3, _ref4, err, response, favorites, ids;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._log('Getting ID\'s FAVORITE movies');
                host = this._config.get('FIREBASE_API_URL');
                url = host + '/users/current/favorites';
                _context.next = 5;
                return (0, _awaitToJs2.default)(this._fetcher.get(url));

              case 5:
                _ref3 = _context.sent;
                _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
                err = _ref4[0];
                response = _ref4[1];

                if (!err) {
                  _context.next = 12;
                  break;
                }

                console.log(err); // eslint-disable-line
                return _context.abrupt('return');

              case 12:
                favorites = response.data.favorites;
                ids = (0, _values2.default)(favorites);
                return _context.abrupt('return', ids.length && this._favoriteMoviesValueObject({ ids: ids }));

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getIds() {
        return _ref2.apply(this, arguments);
      }

      return getIds;
    }()
  }, {
    key: 'addFavoriteMovie',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref5) {
        var id = _ref5.id;

        var host, url, _ref7, _ref8, err, response;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._log('Adding movie ' + id + ' as Favorite for this user');
                host = this._config.get('FIREBASE_API_URL');
                url = host + '/favorites/' + id;
                _context2.next = 5;
                return (0, _awaitToJs2.default)(this._fetcher.post(url));

              case 5:
                _ref7 = _context2.sent;
                _ref8 = (0, _slicedToArray3.default)(_ref7, 2);
                err = _ref8[0];
                response = _ref8[1];

                if (!err) {
                  _context2.next = 12;
                  break;
                }

                console.log(err); // eslint-disable-line
                return _context2.abrupt('return');

              case 12:

                this._log('movie ' + id + ' added as Favorite succesfully');

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addFavoriteMovie(_x2) {
        return _ref6.apply(this, arguments);
      }

      return addFavoriteMovie;
    }()
  }, {
    key: 'removeFavoriteMovie',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref9) {
        var id = _ref9.id;

        var host, url, _ref11, _ref12, err, response;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._log('Removing movie ' + id + ' as Favorite for this user');
                host = this._config.get('FIREBASE_API_URL');
                url = host + '/favorites/' + id;
                _context3.next = 5;
                return (0, _awaitToJs2.default)(this._fetcher.delete(url));

              case 5:
                _ref11 = _context3.sent;
                _ref12 = (0, _slicedToArray3.default)(_ref11, 2);
                err = _ref12[0];
                response = _ref12[1];

                if (!err) {
                  _context3.next = 12;
                  break;
                }

                console.log(err); // eslint-disable-line
                return _context3.abrupt('return');

              case 12:

                this._log('movie ' + id + ' removed from Favorites succesfully');

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function removeFavoriteMovie(_x3) {
        return _ref10.apply(this, arguments);
      }

      return removeFavoriteMovie;
    }()
  }]);
  return HTTPFavoriteMoviesRepository;
}(_FavoriteMoviesRepository2.default);

exports.default = HTTPFavoriteMoviesRepository;
module.exports = exports.default;
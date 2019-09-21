'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _dec, _dec2, _dec3, _desc, _value, _class;

var _MoviesRepository2 = require('./MoviesRepository');

var _MoviesRepository3 = _interopRequireDefault(_MoviesRepository2);

var _decorators = require('@s-ui/decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var HTTPMoviesRepository = (_dec = (0, _decorators.cache)({ ttl: '5 minutes', server: true }), _dec2 = (0, _decorators.cache)({ ttl: '5 minutes', server: true }), _dec3 = (0, _decorators.cache)({ ttl: '5 minutes', server: true }), (_class = function (_MoviesRepository) {
  (0, _inherits3.default)(HTTPMoviesRepository, _MoviesRepository);

  function HTTPMoviesRepository() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        config = _ref.config,
        mapper = _ref.mapper,
        log = _ref.log,
        fetcher = _ref.fetcher,
        moviesListValueObject = _ref.moviesListValueObject;

    (0, _classCallCheck3.default)(this, HTTPMoviesRepository);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HTTPMoviesRepository.__proto__ || (0, _getPrototypeOf2.default)(HTTPMoviesRepository)).call(this));

    _this._config = config;
    _this._log = log;
    _this._fetcher = fetcher;
    _this._mapper = mapper;
    _this._moviesListValueObject = moviesListValueObject;

    _this._host = _this._config.get('FIREBASE_API_URL');
    _this._moviesHost = _this._config.get('THEMOVIEDB_API_BASE_URL');
    return _this;
  }

  (0, _createClass3.default)(HTTPMoviesRepository, [{
    key: 'popular',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            pageRequest = _ref3.page,
            language = _ref3.language,
            region = _ref3.region;

        var _host, _moviesHost, url, options, _ref4, _ref4$data, page, totalResults, totalPages, results;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /* eslint-disable */
                this._log('Getting POPULAR movies on page:' + pageRequest + ', language:' + language + ', region:' + region);
                _host = this._host, _moviesHost = this._moviesHost;
                url = _host + '/' + _moviesHost + '/movie/popular';
                options = {
                  params: {}
                };

                if (pageRequest) options.params.page = pageRequest;
                if (language) options.params.language = language;
                if (region) options.params.region = region;

                _context.next = 9;
                return this._fetcher.get(url, options);

              case 9:
                _ref4 = _context.sent;
                _ref4$data = _ref4.data;
                page = _ref4$data.page;
                totalResults = _ref4$data.total_results;
                totalPages = _ref4$data.total_pages;
                results = _ref4$data.results;
                return _context.abrupt('return', this._moviesListValueObject({
                  page: page,
                  totalResults: totalResults,
                  totalPages: totalPages,
                  movies: results.map(this._mapper.map)
                }));

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function popular() {
        return _ref2.apply(this, arguments);
      }

      return popular;
    }()

    // all methods of the domain are named → receives an object w/ properties

  }, {
    key: 'search',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            query = _ref6.query,
            pageRequest = _ref6.page,
            language = _ref6.language,
            region = _ref6.region;

        var _host, _moviesHost, url, options, _ref7, _ref7$data, page, totalResults, totalPages, results;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._log('Getting movies by query:' + query + ', page:' + pageRequest + ', language:' + language + ', region:' + region);

                _host = this._host, _moviesHost = this._moviesHost;
                url = _host + '/' + _moviesHost + '/search/movie?query=' + query;
                options = {
                  params: {}
                };

                if (pageRequest) options.params.page = pageRequest;
                if (language) options.params.language = language;
                if (region) options.params.region = region;

                _context2.next = 9;
                return this._fetcher.get(url, options);

              case 9:
                _ref7 = _context2.sent;
                _ref7$data = _ref7.data;
                page = _ref7$data.page;
                totalResults = _ref7$data.total_results;
                totalPages = _ref7$data.total_pages;
                results = _ref7$data.results;
                return _context2.abrupt('return', this._moviesListValueObject({
                  page: page,
                  totalResults: totalResults,
                  totalPages: totalPages,
                  movies: results.map(this._mapper.map)
                }));

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function search() {
        return _ref5.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: 'getMovieById',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref8) {
        var idMovie = _ref8.id;

        var options, _host, _moviesHost, url, _ref10, result;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._log('Getting movie by query \u2192 ' + idMovie);

                options = {
                  params: {}
                };
                _host = this._host, _moviesHost = this._moviesHost;
                url = _host + '/' + _moviesHost + '/movie/' + idMovie;
                _context3.next = 6;
                return this._fetcher.get(url, options);

              case 6:
                _ref10 = _context3.sent;
                result = _ref10.data;
                return _context3.abrupt('return', this._mapper.map(result));

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getMovieById(_x4) {
        return _ref9.apply(this, arguments);
      }

      return getMovieById;
    }()
  }]);
  return HTTPMoviesRepository;
}(_MoviesRepository3.default), (_applyDecoratedDescriptor(_class.prototype, 'popular', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'popular'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'search', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'search'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getMovieById', [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'getMovieById'), _class.prototype)), _class));
exports.default = HTTPMoviesRepository;
module.exports = exports.default;
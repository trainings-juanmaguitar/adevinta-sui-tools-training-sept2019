'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _MoviesListValueObject = require('./MoviesListValueObject');

var _MoviesListValueObject2 = _interopRequireDefault(_MoviesListValueObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesValueObjectFactory = (_temp = _class = function MoviesValueObjectFactory() {
  (0, _classCallCheck3.default)(this, MoviesValueObjectFactory);
}, _class.moviesListValueObject = function (rawValueObject) {
  return new _MoviesListValueObject2.default(rawValueObject);
}, _temp);
exports.default = MoviesValueObjectFactory;
module.exports = exports.default;
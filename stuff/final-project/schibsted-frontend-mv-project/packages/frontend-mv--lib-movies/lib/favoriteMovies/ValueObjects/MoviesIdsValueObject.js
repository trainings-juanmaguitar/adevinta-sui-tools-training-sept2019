'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _domain = require('@s-ui/domain');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesIdsValueObject = function (_ValueObject) {
  (0, _inherits3.default)(MoviesIdsValueObject, _ValueObject);

  function MoviesIdsValueObject(_ref) {
    var ids = _ref.ids;
    (0, _classCallCheck3.default)(this, MoviesIdsValueObject);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MoviesIdsValueObject.__proto__ || (0, _getPrototypeOf2.default)(MoviesIdsValueObject)).call(this));

    _this.toJSON = function () {
      return {
        ids: _this._ids
      };
    };

    _this._ids = ids;
    return _this;
  }

  return MoviesIdsValueObject;
}(_domain.ValueObject);

exports.default = MoviesIdsValueObject;
module.exports = exports.default;
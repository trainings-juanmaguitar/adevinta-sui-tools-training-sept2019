"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RefsManager = function () {
  function RefsManager() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        firebase = _ref.firebase;

    (0, _classCallCheck3.default)(this, RefsManager);

    this._refs = {};
    this._firebase = firebase;
  }

  (0, _createClass3.default)(RefsManager, [{
    key: "ref",
    value: function ref() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          path = _ref2.path;

      this._refs[path] = this._refs[path] || this._firebase.database().ref(path);
      return this._refs[path];
    }
  }]);
  return RefsManager;
}();

exports.default = RefsManager;
module.exports = exports.default;
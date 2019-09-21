'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firebaseApp = exports.firebase = undefined;

var _app = require('firebase/app');

var firebase = _interopRequireWildcard(_app);

require('firebase/database');

require('firebase/auth');

var _firebaseConfig = require('./firebase-config.json');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var firebaseApp = typeof window !== 'undefined' ? firebase.initializeApp(_firebaseConfig.result) : {};

exports.firebase = firebase;
exports.firebaseApp = firebaseApp;
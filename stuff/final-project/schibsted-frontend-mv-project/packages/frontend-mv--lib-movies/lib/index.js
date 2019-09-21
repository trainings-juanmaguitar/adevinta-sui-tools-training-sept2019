'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domain = require('@s-ui/domain');

var _factory = require('./movies/UseCases/factory');

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require('./users/UseCases/factory');

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require('./favoriteMovies/UseCases/factory');

var _factory6 = _interopRequireDefault(_factory5);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _firebase = require('./config/firebase');

var _RefsManager = require('./config/firebase/RefsManager');

var _RefsManager2 = _interopRequireDefault(_RefsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = new _config2.default({
  firebase: _firebase.firebase,
  firebaseApp: _firebase.firebaseApp,
  refsManager: new _RefsManager2.default({ firebase: _firebase.firebase })
});

var useCases = {
  /* movies */
  search_movies_use_case: _factory2.default.searchMoviesUseCase({ config: config }),
  get_movie_details_by_id_use_case: _factory2.default.getMovieDetailsByIdUseCase({ config: config }),
  get_popular_movies_use_case: _factory2.default.getPopularMoviesUseCase({
    config: config
  }),
  /* users */
  get_logged_user_use_case: _factory4.default.currentUserUseCase({ config: config }),
  login_with_google_use_case: _factory4.default.loginWithGoogleUseCase({
    config: config
  }),
  logout_use_case: _factory4.default.logoutUseCase({ config: config }),
  /* favorite-movies */
  get_ids_favorites_movies_user_use_case: _factory6.default.getFavoritesMoviesIdsUseCase({ config: config }),
  get_favorites_movies_user_use_case: _factory6.default.getFavoritesMoviesUseCase({ config: config }),
  add_favorite_movie_user_use_case: _factory6.default.addFavoriteMoviesUseCase({ config: config }),
  remove_favorite_movie_user_use_case: _factory6.default.removeFavoriteMoviesUseCase({ config: config })
};

var EntryPoint = (0, _domain.EntryPointFactory)({ config: config, useCases: useCases });

exports.default = EntryPoint;
module.exports = exports.default;
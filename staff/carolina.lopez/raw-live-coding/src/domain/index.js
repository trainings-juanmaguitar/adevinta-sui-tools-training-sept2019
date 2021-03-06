// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'

import {EntryPointFactory} from '@s-ui/domain'
import Config from './config/'

import PodcastsUseCasesFactory from './podcasts/UseCases/factory'
import MoviesUseCasesFactory from './movies/UseCases/factory'

// const fb = firebase.initializeApp({
//   apiKey: 'AIzaSyBCi-p6yeuD1T0DELxci0dDnF6sNSW3ZJ8',
//   authDomain: 'demorawlivecoding-juanma.firebaseapp.com',
//   databaseURL: 'https://demorawlivecoding-juanma.firebaseio.com',
//   projectId: 'demorawlivecoding-juanma',
//   storageBucket: '',
//   messagingSenderId: '377846859242',
//   appId: '1:377846859242:web:a70b5e91dd91a971a41e93'
// })

// const firebaseDB = fb.firestore()

const config = new Config({})
// config.set('firebaseDB', firebaseDB)

const useCases = {
  list_podcasts_use_case: PodcastsUseCasesFactory.listPodcastsUseCase({config}),
  list_popular_movies_use_case: MoviesUseCasesFactory.listPopularMoviesUseCase({
    config
  }),
  list_now_movies_use_case: MoviesUseCasesFactory.listNowMoviesUseCase({
    config
  }),
  list_top_movies_use_case: MoviesUseCasesFactory.listTopMoviesUseCase({
    config
  }),
  list_upcoming_movies_use_case: MoviesUseCasesFactory.listUpcomingMoviesUseCase(
    {
      config
    }
  )
}

const Domain = EntryPointFactory({useCases})

const instance = new Domain({config})

export default instance

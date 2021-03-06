const mockedApiResponse = {
  page: 1,
  total_pages: 993,
  total_results: 19845,
  results: [
    {
      id: 353081,
      original_title: 'Mission: Impossible - Fallout',
      poster_path: '/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
      original_language: 'en',
      overview:
        'When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
      release_date: '2018-07-25'
    },
    {
      id: 299536,
      original_title: 'Avengers: Infinity War',
      poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
      original_language: 'en',
      overview:
        'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
      release_date: '2018-04-25'
    }
  ]
}

const expectedUseCaseResponse = [
  {
    id: 353081,
    original_title: 'Mission: Impossible - Fallout',
    poster_path: '/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
    original_language: 'en',
    overview:
      'When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
    release_date: '2018-07-25'
  },
  {
    id: 299536,
    original_title: 'Avengers: Infinity War',
    poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    original_language: 'en',
    overview:
      'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
    release_date: '2018-04-25'
  }
]

export {mockedApiResponse, expectedUseCaseResponse}
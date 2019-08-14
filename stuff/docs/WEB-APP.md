# Web app

This piece of Schibsted architecture projects is in charge of:
- managing the routing
- link the domain to the _pages_ & _components_
- use components from `sui-components` & `uilib-components`

## 1. Project Creation 

#### 1.1  Init project

Create the folder w/ the proper syntax

```
frontend-<marketplace>--web-app
frontend-mv--web-app
```

Initiate proper repo and npm package

```
npm init -y
git init
```

#### 1.2 Install dependencies

Install **DEV** dependencies

```
npm i -D \
  @s-ui/bundler \
  @s-ui/ssr \
  @s-ui/lint \
  @s-ui/mono \
  @s-ui/precommit \
  husky
```

- [@s-ui/bundler](https://github.com/SUI-Components/sui/tree/master/packages/sui-bundler) → The responsible of handle with our bundling with webpack etc...
- [@s-ui/ssr](https://github.com/SUI-Components/sui/tree/master/packages/sui-ssr) → The responsible of set our server side rendering server creating our server folder, passing and getting context and more...
- [@s-ui/lint](https://github.com/SUI-Components/sui/tree/master/packages/sui-lint) → The responsible of handle with our linting
- [@s-ui/mono](https://github.com/SUI-Components/sui/tree/master/packages/sui-mono) → The one that will handle with our commit and release flow
- [@s-ui/precommit](https://github.com/SUI-Components/sui/tree/master/packages/sui-precommit) → Pre-commit hook management
- [husky](https://github.com/typicode/husky#readme) - Git hooks management

Install **PROD** dependencies

```
npm i -S \
  @s-ui/component-peer-dependencies \
  @s-ui/hoc \
  @s-ui/i18n \
  @s-ui/react-initial-props \
```

- [@s-ui/component-peer-dependencies](https://github.com/SUI-Components/sui/tree/master/packages/sui-component-peer-dependencies) - Peer dependencies of frontend projects at schibsted spain, react, react-dom, react-router, proptypes and more...
- [@s-ui/hoc](https://github.com/SUI-Components/sui/tree/master/packages/sui-hoc) - Provide the context to our component tree
- [@s-ui/i18n](https://github.com/SUI-Components/sui/tree/master/packages/sui-i18n) - The isomorphic way to handle with locales.
- [@s-ui/react-initial-props](https://github.com/SUI-Components/sui/tree/master/packages/sui-react-initial-props) - Provides a way to make our app isomorphic standarizing getInitial props on client and server.

#### 1.3 Scripts

Add proper scripts to `package.json`

```
"scripts": {
  "co": "sui-mono commit",
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "sui-bundler dev",
  "ssr": "sui-bundler build -C && sui-ssr build -C && node server"
}
```

#### 1.4 Project Structure

Create the following project structure 

```
src/
  └── components/
      └── .gitkeep
  └── pages/
      └── .gitkeep
  └── routes.js
  └── app.js
  └── contextFactory.js
  └── index.html
└── .gitignore
└── .package.json
```

#### 1.5 `index.html`

Create the following `index.html`

```html
  <html>
    <head></head>
    <body>
      <div id="app"><!-- APP --></div>
    </body>
  </html>
```

This code will be used by both the SPA and the SSR version of the app to _inject_ the proper code

 > ⚠️ &nbsp; NOTE: The usage of `<!-- APP -- >` is not trivial it MUST HAVE THIS COMMENT for server side replacement purposes. More info on the [code of the tool](https://github.com/SUI-Components/sui/blob/master/packages/sui-ssr/server/ssr/index.js#L105)

#### 1.6 `contextFactory.js` (isomorfico)

This `contextFactory.js` returns an _async_ function with the elements (most of the times `i18n` and `domain`) we want to inject into the _context_ of our app so it's available in our react components. 

The convention is to return an `async` function, so this function will always return a Promise _even if it doesn't implement any async operation_

```js
import domain from '<marketplace-domain-package>'

export default async () => ({ domain })
```

#### 1.7 `routes.js` (isomorfico)

```js
import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'
import App from './components/App'

const LoadHomePage = loadPage(contextFactory, () => import(/* webpackChunkName: "Home" */ './pages/Home'))

export default (
  <Router>
    <Route component={App}>
      <Route path='/'>
        <IndexRoute getComponent={LoadHomePage} />
      </Route>
    </Route>
  </Router>
)
```


```js
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'
```

This code imports the context (previously created) and the method [`loadPage`](https://github.com/SUI-Components/sui/blob/master/packages/sui-react-initial-props/src/loadPage.js) to create the proper component Page w/ the context injected

```js
const LoadHomePage = loadPage(contextFactory, () => import(/* webpackChunkName: "Home" */ './pages/Home'))
```

Notice the [webpack dynamic importation](https://webpack.js.org/guides/code-splitting/#dynamic-imports) to only load the _chunk_ if the page (_route_) is required

The method [`loadPage`](https://github.com/SUI-Components/sui/blob/master/packages/sui-react-initial-props/src/loadPage.js) will return a Universal Page (detecting if we're on client or server it will return the proper Page for each case)


#### 1.7 `app.js` (no isomorfico → client, SPA)

This is the starting point for our SPA (client version)

```js
import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import browserHistory from 'react-router/lib/browserHistory'
import routes from './routes'

import withContext from '@s-ui/hoc/lib/withContext'
import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
import contextFactory from './contextFactory'

contextFactory(createClientContextFactoryParams()).then(context => {
  match(
    { routes, history: browserHistory },
    (err, redirectLocation, renderProps) => {
      if (err) {
        console.error(err)
      }

      const App = withContext(context)(Router)

      // componente Router le pasamos las rutas via renderProps
      // renderProps contiene directamente children pasar 

      ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
    }
  )
})
```

##### 1.7.1 `createClientContextFactoryParams`

`createClientContextFactoryParams` will return an object with the next params
```
 {
    cookies: document.cookie,
    isClient: true,
    pathName: window.location.pathname,
    userAgent: window.navigator.userAgent
  }
```
that we could optionally use in our `contextFactory` to return a context based on this info..

```js
const contextFactory = ({ cookies, isClient, pathName, req = {}, userAgent }) => {
  return Promise.resolve({
    isHome: pathName === 'es',
    isLogged: cookies['user-is-logged'],
    isMobile: userAgent.includes('Android')
  })
}
```

##### 1.7.2 `match`

[`match`](https://knowbody.github.io/react-router-docs/api/match.html) have the purpose of be a kind of 'middleware' between a user url access and their final page component.

**`renderProps`**
```
{  
  components: (4) [undefined, ƒ, undefined, ƒ]
  location: {pathname: "/", search: "", hash: "", state: undefined, action: "POP", …}
  matchContext: {}
  params: {}
  router: {...}
  routes: (4) [{…}, {…}, {…}, {…}]
}
```


##### 1.7.3 `withContext`


 [`withContext`](https://github.com/SUI-Components/sui/blob/master/packages/sui-hoc/src/withContext.js) HOC receives 
 
 - `context` returned by `contextFactory`
 - [`Router`](https://reacttraining.com/react-router/web/api/Router) component from [`react-router`](https://reacttraining.com/react-router)

 and returns a component (`App`) w/ the proper context _injected_ 
 
 
 #### 1.8 `Home` page

```js
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Home = (_, { i18n }) => (
  <React.Fragment>
    <Helmet>
      <link rel='canonical' href='http://spa.mock/' />
    </Helmet>
    <h1>Home test title</h1>
  </React.Fragment>
)

Home.contextTypes = { i18n: PropTypes.object }

export default Home
```

Helmet allows to put things in the header of our page

## 2. Adding offline behavior

We can have an offline version of our app (that will be automatically updated when new versions of the code are detected)

By adding the following config to `package.json`

```
"sui-bundler": {
    "offline": {
      "whitelist": [
        "::all::"
      ]
    },
    ...
  },
```

and the following code to our entry point (`app.js`)

```js
import {register} from '@s-ui/bundler/registerServiceWorker'

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})();
```

Check this by:
- disconecting the WIFI and reloading the page
- deploying a new version and reload the page (new offline version will be loaded)

## 3. Adding Hot-Module Replacement (HMR)

Be default webpack will use Hot-Module Reloading which means it will load the whole page when a change is detected

We can add Hot-Module Replacement to avoid reloading the whole page, and reload only specific components when changes on them are detected by adding this code...

```js
if (module.hot) {
  module.hot.accept('./hello', () => render(require('./hello').default))
}
```

## 4. Generating our SSR version

By using `@s-ui/ssr` we can generate a SSR version of our SPA

We can do `yarn ssr` and launch this script we added at the begining

```js
"ssr": "sui-bundler build -C && sui-ssr build -C && node server"
```

This script will
- Generate a `public` folder w/ the static version of the page
- Generate a `server` folder w/ the backend code to launch the server
- Launch the `server/index` that will launch the SSR version of the app


## Resources

- Boilerplate → https://github.schibsted.io/carlos-villuendas/spa-mock

- Examples:
  - https://github.schibsted.io/victor-ribero/frontend-mv--web-app
  - https://github.schibsted.io/david-marin/frontend-mv--web-app



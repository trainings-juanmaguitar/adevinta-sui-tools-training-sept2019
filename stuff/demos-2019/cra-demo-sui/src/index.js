import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const obj = {
    foo: {
      bar: {
        baz: 42,
      },
    },
  };
  
  const baz = obj?.foo?.bar?.baz; // 42
  
  const safe = obj?.qux?.baz; // undefined

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

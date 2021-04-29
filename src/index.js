import React from 'react'
import ReactDOM from 'react-dom';

import App from './App'
import './index.less'
import './index.scss'

const render = ()=> {
  ReactDOM.render(<App />, document.getElementById('app'));
}
render();

if (module.hot) {
  module.hot.accept('./App', render)
};
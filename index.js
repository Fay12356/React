import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import App from './App'

render(
  <App name='React.js' x={100} y={200} />,
  document.querySelector('#root')//获取到root
)
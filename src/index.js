import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './modules/routes';

injectTapEventPlugin();

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);

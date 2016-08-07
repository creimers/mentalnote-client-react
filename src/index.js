import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import { Provider  } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App';
import FilterableNotesList from './components/FilterableNotesList';
import NoteDetail from './components/NoteDetail';
import Login from './components/views/Login';

import store, { history } from './store'

import './index.css';

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={FilterableNotesList}/>
        <Route path="/login" component={Login} />
        <Route path="/:noteId" component={NoteDetail} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('root'));

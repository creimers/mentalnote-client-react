import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App';
import FilterableNotesList from './FilterableNotesList';
import NoteDetail from './NoteDetail';
import Login from './views/Login';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={FilterableNotesList}/>
    <Route path="/login" component={Login} />
    <Route path="/:noteId" component={NoteDetail} />
  </Route>
)

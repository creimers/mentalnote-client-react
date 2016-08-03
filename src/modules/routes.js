import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App';
import FilterableNotesList from './FilterableNotesList';
import NoteDetail from './NoteDetail';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={FilterableNotesList}/>
    <Route path="/:noteId" component={NoteDetail} />
  </Route>
)

import React, { Component } from 'react';

import SearchBar from './SearchBar';
import NotesList from './NotesList';
import AddNote from './AddNote';

var NOTES = [
  {id: 1, title: "Nicht vergessen", note: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."},
  {id: 2, title: "Ganz wichtig", note: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."},
  {id: 3, title: "Geburtstagsgeschenk Mama", note: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."},
];


class FilterableNotesList extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <NotesList notes={NOTES} />
        <AddNote />
      </div>
    );
  }
}

export default FilterableNotesList;

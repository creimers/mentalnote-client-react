import React, { Component } from 'react';

import SearchBar from './SearchBar';
import NotesList from './NotesList';
import AddNote from './AddNote';


class FilterableNotesList extends Component {
  componentWillMount(){
    this.props.fetchNotes()
  }

  render() {
    return (
      <div>
        <SearchBar />
        <NotesList notes={this.props.notes} />
        <AddNote {...this.props}/>
      </div>
    );
  }
}

export default FilterableNotesList;

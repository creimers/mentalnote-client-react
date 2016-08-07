import React, { Component } from 'react';

import Note from './Note';


class NotesList extends Component {
  render() {
    var notes = [];
    this.props.notes.forEach((note)=> {
      notes.push(<Note title={note.title} note={note.note} key={note.id}></Note>)
    });
    return (
      <div>
        {notes}
      </div>
    );
  }
}

export default NotesList;

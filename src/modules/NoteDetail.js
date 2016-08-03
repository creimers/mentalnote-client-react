import React, { Component } from 'react';


class NoteDetail extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.params.noteId}</h4>
      </div>
    );
  }
}

export default NoteDetail;

import React, { Component } from 'react';


class Note extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.note}</p>
      </div>
    );
  }
}

export default Note;

import React, { Component } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';


class AddNote extends Component {
  render() {
    return (
      <div>
        <FloatingActionButton>
          <FontIcon className="material-icons">add</FontIcon>
        </FloatingActionButton>
      </div>
    );
  }
}

export default AddNote;

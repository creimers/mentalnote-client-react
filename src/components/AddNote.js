import React, { Component } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';


class AddNote extends Component {
  constructor(props){
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.props.router.push('/add') 
  }

  render() {
    return (
      <div>
        <FloatingActionButton onClick={this.handleOnClick}>
          <FontIcon className="material-icons">add</FontIcon>
        </FloatingActionButton>
      </div>
    );
  }
}

export default AddNote;

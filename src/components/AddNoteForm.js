import React, { Component } from 'react';
import { withRouter  } from 'react-router'

import RaisedButton from 'material-ui/RaisedButton';

import Formsy from 'formsy-react';

import FormsyText from 'formsy-material-ui/lib/FormsyText';


class AddNoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    }

    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  submitForm(model) {
    this.props.addNote(model).then(response=> {
      this.refs.addNoteForm.reset()
      this.props.router.push('/')
    })
  }

  render() {
    return (
      <div id="AddNoteForm">
        <Formsy.Form
          onValid={this.enableButton} 
          onInvalid={this.disableButton} 
          onValidSubmit={this.submitForm} 
          ref="addNoteForm"
        >
        <div>
          <FormsyText
          name="title"
          hintText="title"
          floatingLabelText="Title"
          />
        </div>
        <div>
          <FormsyText
          name="note"
          hintText="Note"
          floatingLabelText="Note"
          type="text"
          autoComplete="new-note"
          required
          />
        </div>
        <div>
          <RaisedButton
            type="submit" 
            label="add"
            primary={true}
            disabled={!this.state.canSubmit}
          /> 
        </div>
        </Formsy.Form>
      </div>
    )
  }
}

export default withRouter(AddNoteForm)

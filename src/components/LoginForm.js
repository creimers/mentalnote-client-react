import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import Formsy from 'formsy-react';

import FormsyText from 'formsy-material-ui/lib/FormsyText';


class LoginForm extends Component {
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
    this.props.loginUser(model).then(response=> this.refs.loginForm.reset())
  }

  render() {
    return (
      <div id="LoginForm">
        <Formsy.Form
          onValid={this.enableButton} 
          onInvalid={this.disableButton} 
          onValidSubmit={this.submitForm} 
          ref="loginForm"
        >
        <div>
          <FormsyText
          name="username"
          hintText="username"
          floatingLabelText="What is your username?"
          required
          />
        </div>
        <div>
          <FormsyText
          name="password"
          hintText="password"
          floatingLabelText="What is your password?"
          required
          type="password"
          autoComplete="new-password"
          />
        </div>
        <div>
          <RaisedButton
            type="submit" 
            label="login"
            primary={true}
            disabled={!this.state.canSubmit}
          /> 
        </div>
        </Formsy.Form>
      </div>
    )
  }
}

export default LoginForm

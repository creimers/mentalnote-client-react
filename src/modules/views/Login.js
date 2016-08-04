import React, { Component } from 'react';

import Paper from 'material-ui/Paper';

import LoginForm from './../LoginForm';


class Login extends Component {
  render() {
    return (
      <div id="Login">
       <Paper zDepth={1}>
        <LoginForm />
       </Paper>
      </div>
    )
  }
}

export default Login

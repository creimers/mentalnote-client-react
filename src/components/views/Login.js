import React, { Component } from 'react';

import Paper from 'material-ui/Paper';

import LoginForm from './../LoginForm';


class Login extends Component {
  render() {
    return (
      <div id="Login">
       <Paper zDepth={1}>
         <p>{this.props.auth.errorMessage}</p>
        <LoginForm {...this.props}/>
       </Paper>
      </div>
    )
  }
}

export default Login

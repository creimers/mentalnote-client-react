import React, { Component } from 'react';
import { withRouter  } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';

import './Main.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header {...this.props}/>
          <div id="main">
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);

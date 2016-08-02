import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <h1>Test</h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';

import FontIcon from 'material-ui/FontIcon';


class SearchBar extends Component {
  render() {
    return (
      <div>
        <FontIcon className="material-icons">search</FontIcon>
        <input type="text" />
      </div>
    );
  }
}

export default SearchBar;

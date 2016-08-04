import React, { Component } from 'react';
import { withRouter  } from 'react-router'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class Header extends Component {
  constructor() {
    super();

    this.handleTitleTap = this.handleTitleTap.bind(this);
  }

  handleTitleTap() {
    this.props.router.push('/');
  }

  render() {
    return (
      <AppBar
        title="mental notes"
        onTitleTouchTap={this.handleTitleTap}
        iconElementRight={
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
      />
    )
  }
}

export default withRouter(Header)

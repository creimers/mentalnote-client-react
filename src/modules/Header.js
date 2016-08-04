import React, { Component } from 'react';
import { withRouter  } from 'react-router'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';


class Header extends Component {
  constructor() {
    super();

    this.state = {isAuthenticated: false};

    this.handleTitleTap = this.handleTitleTap.bind(this);
    this.handleGoToLogin = this.handleGoToLogin.bind(this);
  }

  handleTitleTap() {
    this.props.router.push('/');
  }

  handleGoToLogin(event, object) {
    if (object.props.primaryText === 'Sign in') {
      this.props.router.push('/login');
    }
  }

  render() {
    var authButton;

    if (this.state.isAuthenticated) {
      authButton = <MenuItem primaryText="Sign out" />;
    }
    else {
      authButton = <MenuItem primaryText="Sign in" leftIcon={<FontIcon className="material-icons">lock_open</FontIcon>} />;
    }

    return (
      <AppBar
        title="mental notes"
        onTitleTouchTap={this.handleTitleTap}
        iconElementRight={
          <IconMenu
            onItemTouchTap={this.handleGoToLogin} 
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            {authButton}
          </IconMenu>
        }
      />
    )
  }
}

export default withRouter(Header)

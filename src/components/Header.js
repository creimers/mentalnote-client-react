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
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleTitleTap() {
    this.props.router.push('/');
  }

  handleGoToLogin(event) {
    this.props.router.push('/login');
  }

  handleLogout(event) {
    this.props.logoutUser();
  }

  render() {
    var authButton;

    if (this.props.auth.isAuthenticated) {
      authButton = <MenuItem onClick={this.handleLogout} primaryText="Sign out" />;
    }
    else {
      authButton = <MenuItem onClick={this.handleGoToLogin} primaryText="Sign in" leftIcon={<FontIcon className="material-icons">lock_open</FontIcon>} />;
    }

    return (
      <AppBar
        title="mental notes"
        onTitleTouchTap={this.handleTitleTap}
        iconElementRight={
          <IconMenu
            //onItemTouchTap={this.handleGoToLogin} 
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

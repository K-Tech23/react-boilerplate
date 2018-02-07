import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import configs from './../configs/config';

const LeftIconMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />

    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

class AppBarExampleComposition extends Component {

  constructor(props){
    super(props);
    this.state = {
      logged: true,
    };
  }

  render() {
    return (
      <div>
        <AppBar
          title={this.props.isSideNavOpen?"":configs.APP_TITLE}
          iconElementRight={<LeftIconMenu />}
          onLeftIconButtonTouchTap={this.props.toggleSideNav}
        />
      </div>
    );
  }
}

export default AppBarExampleComposition;

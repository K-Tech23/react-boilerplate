import React from 'react';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';

import IconHome from 'material-ui/svg-icons/action/home';
import IconTodo from 'material-ui/svg-icons/action/list';

import configs from './../configs/config';

export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Drawer open={this.props.open}>
        <FlatButton label={configs.APP_TITLE} primary={true} fullWidth={true} disabled={true}/>
        <div>
          <List>
            <ListItem primaryText="Home" leftIcon={<IconHome/>} />
            <ListItem primaryText="Todo List" leftIcon={<IconTodo/>} />
          </List>
        </div>
      </Drawer>
    );
  }
}

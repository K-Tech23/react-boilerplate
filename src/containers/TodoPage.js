/*
* Todo component
* Integrated with Redux
* */

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import { connect } from  'react-redux';
import {bindActionCreators} from 'redux';
/* Actions */
import { getTodos } from './../actions';


class TodoPage extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.actions.getTodos();
  }

  render(){
    return (
      <div>
        <h4>
          TODOs
        </h4>
        <List>
          <Subheader>General</Subheader>
          {
            this.props.todos.map((todo, index)=>{
              return <ListItem
                key={index}
                primaryText={todo.name}
                secondaryText={todo.description}
              />
            })
          }
        </List>
      </div>
    );
  }

}

/* Map state to props */
function mapStateToProps(state){
  return {
    todos: state.todos,
  };
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators({
      getTodos
    }, dispatch)
  };
}

/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);

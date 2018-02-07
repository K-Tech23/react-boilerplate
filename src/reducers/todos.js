import {
  TODO_GET_REQUEST,
  TODO_GET_SUCCESS,
  TODO_GET_FAIL
} from './../constants/actionTypes';

import initialState from './../store/initialState';

const categories_reducer = (state = initialState.todos, action) => {
  switch(action.type){
    case TODO_GET_REQUEST:
      // TODO: anything important
      return state;
    case TODO_GET_SUCCESS:
      console.log(TODO_GET_SUCCESS);
      return action.data;
    case TODO_GET_FAIL:
      // TODO: some alert may be
      return state;
    default:
      return state;
  }
};

export default categories_reducer;

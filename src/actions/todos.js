/*
* Action for feature todos
* */

import {HTTP} from './../utils/HTTP';

import {
  TODO_GET_REQUEST,
  TODO_GET_SUCCESS,
  TODO_GET_FAIL
} from './../constants/actionTypes';

import dummyData from './../store/initialState';

export function getTodos() {
  return function (dispatch) {
    return new Promise(function(resolve, reject){{
      dispatch({
        type: TODO_GET_REQUEST
      });

      // dummy data
      // remove once API is integrated
      if(dummyData.todos.length>0){
        dispatch({
          type: TODO_GET_SUCCESS,
          data: dummyData.todos
        });
        resolve(dummyData.todos);
      }
      else{
        reject(false);
      }

      // API Example
      /*
      HTTP('get', '/todos/')
        .then(function (response) {
          dispatch({
            type: TODO_GET_SUCCESS,
            data: response.data.data
          });
          resolve(response.data);
        })
        .catch(error => {
          dispatch({
            type: TODO_GET_FAIL,
            error: error
          });
          reject(error);
        });
        */

    }});
  };
}

/*
 * Example Routes
 * */

import React from 'react';

import HomePage from './../containers/HomePage';
import TodoPage from './../containers/TodoPage';
import NotFoundPage from './../containers/NotFoundPage';

let routes = [
  {
    path: '/',
    exact: true,
    component: ()=><HomePage/>
  },
  { path: '/todos',
    exact: true,
    component: ()=><TodoPage/>
  },
  { path: '/notfound',
    exact: true,
    component: ()=><NotFoundPage/>
  }
];

export default routes;

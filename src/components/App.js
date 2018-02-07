/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from '../components/Header';
import Sidenav from '../components/Sidenav';

import Routes from '../routes/index';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isSideNavOpen: true
    };

    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  toggleSideNav(){
    this.setState({
      isSideNavOpen: !this.state.isSideNavOpen
    });
  }

  render() {

    let style = {
      container: {
        'marginLeft': (this.state.isSideNavOpen)?'256px':'0',
        'transition': 'all 0.26s'
      }
    };

    return (
      /* SideNav Layout
       * Change layout here if require
       * */
      <MuiThemeProvider>
        <Router>
          <div>

            <Sidenav open={this.state.isSideNavOpen}/>

            <div style={style.container}>

              <Header toggleSideNav={this.toggleSideNav} isSideNavOpen={this.state.isSideNavOpen}/>

              {Routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}

            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

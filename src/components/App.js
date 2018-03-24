/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router-dom";
import NotFoundPage from './NotFoundPage';
import Layout from './containers/Layout';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (<div>
        <Switch>
          <Route  path="/" component={Layout}/>
          <Route  component={NotFoundPage}/>
        </Switch>
    </div>);
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

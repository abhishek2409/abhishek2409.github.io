/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import NotFoundPage from './NotFoundPage';
import Layout from './containers/Layout';
import Tab1 from './containers/Tab1';
import Tab2 from './containers/Tab2';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (<div>
        <Switch>
          <Route path="/" component={Layout}>
            <Route exact path="tab1" component={Tab1}/>
            <Route exact path="tab2" component={Tab2}/>
          </Route>
          <Route exact component={NotFoundPage}/>
        </Switch>
    </div>);
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

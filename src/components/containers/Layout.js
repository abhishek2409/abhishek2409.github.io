import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavLink, Route} from 'react-router-dom';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

export class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {location, history} = this.props;
    console.log(this.props);
    if (location.pathname === '/') {
      history.push('/tab1')
    }
  }
  render() {
    return (<div className="container project-accord--wrapper">
      <ul className="nav nav-tabs justify-content-end">
        <li className="nav-item">
          <NavLink to="/tab1" activeClassName="active" className="nav-link">Tab1 <span className="active-icon fa fal fa-angle-down"/><span className="fa inactive-icon fal fa-angle-up"/></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/tab2" activeClassName="active" className="nav-link">Tab2 <span className="fa active-icon fal fa-angle-down"/><span className="fa inactive-icon fal fa-angle-up"/></NavLink>
        </li>
      </ul>
      <div className="main-content">
        {this.props.children}
        <Route  path="/tab1" component={Tab1}/>
        <Route  path="/tab2" component={Tab2}/>
      </div>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    // fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, null)(Layout);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, Route} from 'react-router-dom';


export class Layout extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (<div className="wrapper">
      <ul>
        <li>
          <Link to="/tab1">Tab1</Link>
        </li>
        <li>
          <Link to="/tab2">Tab2</Link>
        </li>
      </ul>
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

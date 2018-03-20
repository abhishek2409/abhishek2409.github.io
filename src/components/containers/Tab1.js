import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

export class Tab1 extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (<div className="tab1-wrapper">
      <h1>Tab1</h1>
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

export default connect(null, null)(Tab1);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {departureFlightsConst, returnFlightsConst} from '../../constants/appConstants';
import FlightCard from '../Common/FlightCard';
import {init, selectFlight} from '../../actions/flightActions';
import _ from 'underscore';

export class Tab1 extends React.Component {
  constructor(props) {
      super(props);
  }
  componentWillMount(){
      const {departureFlights, arrivalFlights, init} = this.props;
      if(_.isEmpty(departureFlights) && _.isEmpty()){
          init({departureFlights:departureFlightsConst,arrivalFlights:returnFlightsConst});
      }
  }

  render() {
    const {selectedDeparture,departureFlights,selectedArrival,arrivalFlights,gettingFlights, selectFlight} = this.props;
    return gettingFlights ? (<div>Loading...</div>) :(<div className="tab1-wrapper">
    <div className="departure-section">
        {!_.isEmpty(selectedDeparture) ? (<FlightCard selectFlight={selectFlight} selectedFlight={selectedDeparture} type="departure" options={departureFlights}/>) : null }
    </div>
    <div className="return-section">
    {!_.isEmpty(selectedArrival) ? (<FlightCard selectFlight={selectFlight} selectedFlight={selectedArrival} type="arrival" options={arrivalFlights}/>) : null }
    </div>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    selectedDeparture:state.flights.selectedDeparture,
    departureFlights:state.flights.departureFlights,
    selectedArrival:state.flights.selectedArrival,
    arrivalFlights:state.flights.arrivalFlights,
    gettingFlights:state.flights.gettingFlights
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init: bindActionCreators(init, dispatch),
    selectFlight:bindActionCreators(selectFlight,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);

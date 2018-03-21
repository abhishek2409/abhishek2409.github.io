import React from 'react';
import {connect} from 'react-redux';
import FlightDetail from './FlightDetail';
import FlightList from './FlightList';

export default class FlightCard extends React.Component{
    constructor(props) {
        super(props);
    }
    renderType(type) {
      if (type === 'departure') {
        return (<div className="type-wrapper">
          <span className="type-icon">&rarr;</span>
          Departure</div>);
      } else if (type === 'arrival') {
        return (<div className="type-wrapper">
          <span className="type-icon">&larr;</span>
          Arrival</div>);
      }
    }

    render(){
        const {selectedFlight, options, type, selectFlight} = this.props;
        return(<div className="card-wrapper">
            {this.renderType(type)}
            <FlightDetail flight={selectedFlight}/>
            <FlightList selectedFlight={selectedFlight} options={options} type={type} selectFlight={selectFlight}/>
        </div>);
    }
}

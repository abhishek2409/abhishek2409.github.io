import React from 'react';
import _ from 'underscore';

export default class FlightList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderFlightInfo(flight) {
    return (<p className="flight-info" title={flight.description}>{`${flight.departureCity.name} to ${flight.arrivalCity.name} (${flight.description})`}</p>);
  }
  renderStopages(flight) {
    if (flight.ifNonStop) {
      return (<div className="stopage-wrapper">
      <div className="stopage"><span className="stopage-icon"/></div>
      <div className="non-stopage">{flight.duration} | Non Stop</div>
      <div className="stopage"><span className="stopage-icon"/></div>
      </div>);
    } else {
      return (<div className="stopage-wrapper">
        <div className="stopage"><span className="stopage-icon"/></div>
        <div className="have-stops">{flight.duration} | {flight.stops.length} {`stop${flight.stops.length > 1 ? "s" : ""}`}</div>
        {
          _.map(flight.stops, (stop, i) => {
            return ( <div className="stopage" key={i}><span className="stopage-icon"/><span className="stopage-text">{stop}</span></div>);
          })
        }
        <div className="stopage"><span className="stopage-icon"/></div>
      </div>);
    }
  }
  _onChange(flight,type){
      const {selectFlight} = this.props;
      selectFlight(flight,type);
  }

  renderList(options, selectedFlight, type) {
    console.log(options,selectedFlight);
    return _.map(options, option => {
      return (
          <li className="list-item" key={option.id} onClick={e=>this._onChange(option,type)}>
          <div className="row">
            <div className="col-md-4">
            <span className="float-left"><input id={option.id} type="radio"  onChange={e=>this._onChange(option,type)} checked={option.id === selectedFlight.id}/>
            <label htmlFor={option.id}><span></span></label><span className="city-name">{option.departureCity.code}</span>
            <span className="departure-time">{option.fmtDepartureTime}</span></span>
            </div>
            <div className="col-md-4">
            {this.renderStopages(option)}
            </div>
            <div className="col-md-4">
            <span className="float-right"><span className="city-name">{option.arrivalCity.code}</span>
            <span className="departure-time">{option.fmtArrivalTime}</span></span>
            </div>
          </div>
        </li>
      );
    });
  }
  render() {
    const {selectedFlight, options, type} = this.props;
    return (<div className="list-wrapper">
      {this.renderFlightInfo(selectedFlight)}
      <ul className="flights-list">
        {this.renderList(options, selectedFlight, type)}
      </ul>
    </div>);
  }
}

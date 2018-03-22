import React from 'react';
import moment from 'moment';
import _ from 'underscore';


export default class FlightDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPlace(city, fmtTime, time, tml) {
    return (<div className="place-wrapper">
      <h3>
        <span>{city.code}</span>
        {fmtTime}</h3>
      <p className="place-timings">{moment(time).format("D MMM' YY, ddd")}</p>
      <p className="place-tml">{tml}</p>
    </div>)
  }
  renderStopages(flight) {
    if (flight.ifNonStop) {
      return (<div className="stopage-wrapper">
      <div className="stopage"><span className="stopage-icon"/></div>
      <div className="non-stopage">{flight.duration} | Non Stop</div>
      <div className="stopage"><span className="stopage-icon"/></div>
      </div>)
    } else {
      return (<div className="stopage-wrapper">
        <div className="stopage"><span className="stopage-icon"/></div>
        <div className="have-stops">{flight.duration} | {flight.stops.length} {`stop${flight.stops.length > 1 ? "s" : ""}`}</div>
        {
          _.map(flight.stops, (stop, i) => {
            return ( <div className="stopage" key={i}><span className="stopage-icon"/><span className="stopage-text">{stop}</span></div>)
          })
        }
        <div className="stopage"><span className="stopage-icon"/></div>
      </div>)
    }
  }
  renderBaggageAllowance(bag) {
    return (<div className="allowance-wrapper">
      <div className="allowance-item"><span className="fas fa-shopping-bag"/>
        Check in: {`${bag.adult}${bag.units} for adult`}</div>
        <div className="allowance-item"><span className="fas fa-shopping-bag"/>
          Check in: {`${bag.child}${bag.units} for child`}</div>
    </div>)
  }
  render() {
    const {flight} = this.props;
    return (<div className="detail-wrapper">
      <div className="detail-header">
        <span className="float-left">
          {`${flight.departureCity.name} to ${flight.arrivalCity.name}, ${moment(flight.fmtDateofSearch).format("D MMM")}`}
        </span>
        <span className="float-right">
          {`(${flight.duration})`}
        </span>
      </div>
      <div className="flight-brand">
        <div className="brand-logo"><img src={flight.logo}/></div>
        <div className="brand-code">{flight.flightNumber}</div>
      </div>
      <div className="flight-timings row">
        <div className="departure-city col-md-4">
          {this.renderPlace(flight.departureCity, flight.fmtDepartureTime, flight.departureTime, flight.departureTml)}
        </div>
        <div className="stopages col-md-4">
          {this.renderStopages(flight)}
        </div>
        <div className="arrival-city col-md-4">
          {this.renderPlace(flight.arrivalCity, flight.fmtArrivalTime, flight.arrivalTime, flight.arrivallTml)}
        </div>
      </div>
      <div className="baggage-wrapper">
        <h3>Baggage allowance for adult</h3>
        <h4>Baggage warning in case of Multiple Airlines</h4>
        {this.renderBaggageAllowance(flight.baggageAllowance)}
      </div>
    </div>);
  }
}

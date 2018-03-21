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
        <span>{city.name}</span>
        {fmtTime}</h3>
      <p>{moment(time).format("D MMM' YY, ddd")}</p>
      <p>{tml}</p>
    </div>)
  }
  renderStopages(flight) {
    if (flight.ifNonStop) {
      return (<span className="stopage-wrapper">
        <span className="stopage-start-icon"/>
        <span className="stopages-nonstop">{flight.duration}
          | Nonstop</span>
        <span className="stopage-stop-icon"/>
      </span>)
    } else {
      return (<span className="stopage-wrapper">
        <span className="stopage-start-icon"/>
        <span className="stopages-nonstop">{flight.duration}
          | {flight.stops.length}</span>
        {
          _.map(flight.stops, (stop, i) => {
            return (<span key={i} className="stop"><span className="stop-icon"/>{stop}</span>)
          })
        }
        <span className="stopage-stop-icon"/>
      </span>)
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

import React from 'react';
import _ from 'underscore';

export default class FlightList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderFlightInfo(flight) {
    return (<p>{`${flight.departureCity.name} to ${flight.arrivalCity.name}(${flight.description})`}</p>);
  }
  renderStopages(flight){
      if(flight.ifNonStop){
          return(<span className="stopage-wrapper">
            <span className="stopage-start-icon" />
            <span className="stopages-nonstop">{flight.duration} | Nonstop</span>
            <span className="stopage-stop-icon" />
          </span>)
      }else{
          return(<span className="stopage-wrapper">
            <span className="stopage-start-icon" />
            <span className="stopages-nonstop">{flight.duration} | {flight.stops.length}</span>
                {_.map(flight.stops,(stop,i)=>{
                    return(<span key={i} className="stop"><span className="stop-icon" />{stop}</span>)
                })}
            <span className="stopage-stop-icon" />
          </span>)
      }
  }
  _onChange(flight,type){
      const {selectFlight} = this.props;
      selectFlight(flight,type)
  }

  renderList(options, selectedFlight, type) {
    return _.map(options, option => {
      return (
          <li className="list-item" key={option.id}>
            <input type="radio" name="flight" onChange={e=>this._onChange(option,type)} checked={option.id === selectedFlight.id}/>
            <span className="city-name">{option.departureCity.name}</span>
            <span className="departure-time">{option.fmtDepartureTime}</span>
            {this.renderStopages(option)}
            <span className="city-name">{option.arrivalCity.name}</span>
            <span className="departure-time">{option.fmtArrivalTime}</span>
        </li>
        )
    })
  }
  render() {
    const {selectedFlight, options, type} = this.props;
    return (<div className="list-wrapper">
      {this.renderFlightInfo(selectedFlight)}
      <ul>
        {this.renderList(options, selectedFlight, type)}
      </ul>
    </div>);
  }
}

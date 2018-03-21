import React from 'react';
import _ from 'underscore';

export default class FlightList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderFlightInfo(flight) {
    return (<p className="flight-info" title={flight.description}>{`${flight.departureCity.name} to ${flight.arrivalCity.name} (${flight.description})`}</p>);
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
    console.log(options,selectedFlight);
    return _.map(options, option => {
      return (
          <li className="list-item" key={option.id}>

            <span className="float-left"><input id={option.id} type="radio"  onChange={e=>this._onChange(option,type)} checked={option.id === selectedFlight.id}/>
            <label htmlFor={option.id}><span></span></label><span className="city-name">{option.departureCity.code}</span>
            <span className="departure-time">{option.fmtDepartureTime}</span></span>
            {this.renderStopages(option)}
            <span className="float-right"><span className="city-name">{option.arrivalCity.code}</span>
            <span className="departure-time">{option.fmtArrivalTime}</span></span>



        </li>
        )
    })
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

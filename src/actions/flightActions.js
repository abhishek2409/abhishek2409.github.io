import { createAction } from 'redux-actions';
const PREFIX = 'Flights.'

export const INIT = PREFIX + "INIT";
const initDone = createAction(INIT);

export function init(data) {
    return dispatch=>{
        dispatch(initDone({arrivalFlights:data.arrivalFlights,departureFlights:data.departureFlights}))
        dispatch(selectFlight(data.arrivalFlights[0],"arrival"))
        dispatch(selectFlight(data.departureFlights[0],"departure"))
    }
}

export const SELECT_FLIGHT = PREFIX + "SELECT_FLIGHT";
const selectFlightDone = createAction(SELECT_FLIGHT);

export function selectFlight(flight,type) {
    return dispatch=>{
        dispatch(selectFlightDone({flight,type}))
    }
}

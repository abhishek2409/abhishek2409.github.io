import { handleActions } from 'redux-actions';
import * as actions from '../actions/flightActions';

export const flightReducer = handleActions({
  [actions.INIT]: (state, action) => {
    let newState = Object.assign({}, state);
    const {departureFlights, arrivalFlights} = action.payload
    newState.departureFlights = departureFlights;
    newState.arrivalFlights = arrivalFlights;
    newState.gettingFlights = false;
    return newState
    },
    [actions.SELECT_FLIGHT]:(state,action)=>{
        let newState = Object.assign({},state);
        const {flight,type} = action.payload;
        if(type === 'arrival'){
            newState.selectedArrival = flight
        }else if(type === 'departure'){
            newState.selectedDeparture = flight;
        }
        return newState;
    }
}, {
  selectedDeparture:{},
  departureFlights:[],
  selectedArrival:{},
  arrivalFlights:[],
  gettingFlights:true
})

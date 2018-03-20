import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {questionReducer} from './questionReducer';
import {flightReducer} from './flightReducer';

const rootReducer = combineReducers({routing: routerReducer, questions: questionReducer, flights: flightReducer});

export default rootReducer;

import { combineReducers } from 'redux';
import anyReducer from './anyReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  anyReducer,
  routing: routerReducer
});

export default rootReducer;

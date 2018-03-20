import { handleActions } from 'redux-actions';
import * as actions from '../actions/questionActions';

export const questionReducer = handleActions({
  [actions.INIT]: (state, action) => {
    let newState = Object.assign({}, state)
    newState.init = true
    return newState
  }
}, {
  init:false
})

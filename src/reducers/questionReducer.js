import {handleActions} from 'redux-actions';
import * as actions from '../actions/questionActions';
import objectAssign from 'object-assign';
import _ from 'underscore';
const initialState = {
  init: false,
  selectedQuestion: {}
}
import $ from 'jquery';

export const questionReducer = handleActions({
  [actions.SELECT_QUESTION]: (state, action) => {
    let newState = objectAssign({}, state)
    const {question} = action.payload;
    newState.selectedQuestion = question;
    return newState
  },
  [actions.UPVOTE]: (state,action) => {
      let newState = $.extend(true,{},state);
      const {questionId, replyId, votes} = action.payload;
      let reply = _.findWhere(newState.selectedQuestion.replies, {id:replyId});
      reply.votes = votes;
      return newState
  },
  [actions.DOWNVOTE]: (state,action) => {
      let newState = $.extend(true,{},state);
      const {questionId, replyId, votes} = action.payload;
      let reply = _.findWhere(newState.selectedQuestion.replies, {id:replyId});
      reply.votes = votes;
      return newState
  }
}, initialState)

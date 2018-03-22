import { createAction } from 'redux-actions';
const PREFIX = 'Questions.'

export const SELECT_QUESTION = PREFIX + 'SELECT_QUESTION'
const selectQuestionDone = createAction(SELECT_QUESTION)

export function selectQuestion(question) {
    return dispatch=>{
        dispatch(selectQuestionDone({question}))
    }
}

export const UPVOTE = PREFIX + 'UPVOTE'
const upVoteDone = createAction(UPVOTE)

export function upVoteQuestion(replyId,questionId, votes) {
    return dispatch=>{
        dispatch(upVoteDone({replyId,questionId, votes}))
    }
}

export const DOWNVOTE = PREFIX + 'DOWNVOTE'
const downVoteDone = createAction(DOWNVOTE)

export function downVoteQuestion(replyId,questionId, votes) {
    return dispatch=>{
        dispatch(downVoteDone({replyId,questionId, votes}))
    }
}

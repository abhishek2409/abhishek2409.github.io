import React from 'react';
import ReplyItem from './ReplyItem';
import _ from 'underscore';

export default class QuestionReplies extends React.Component {
  constructor(props) {
    super(props);
  }
  renderReplies(){
    const {question, upVote, downVote} = this.props;
    let repliesSorted =_.sortBy(question.replies, 'votes').reverse();
    return _.map(repliesSorted,reply=>{
        return(<ReplyItem key={reply.id} reply={reply} upVoteQuestion={upVote} downVoteQuestion={downVote} question={question} />);
    });
  }
  render() {
    return (<div className="replies-wrapper">
        {this.renderReplies()}
    </div>);
  }
}

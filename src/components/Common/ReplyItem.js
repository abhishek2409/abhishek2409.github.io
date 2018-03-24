import React from 'react';
import moment from 'moment';

export default class ReplyItem extends React.Component {
  constructor(props) {
    super(props);
  }
  upVote() {
    const {reply, upVoteQuestion, question} = this.props;
    const votes = reply.votes + 1;
    upVoteQuestion(reply.id, question.id, votes);
  }
  downVote() {
    const {reply, downVoteQuestion, question} = this.props;
    const votes = reply.votes - 1;
    downVoteQuestion(reply.id, question.id, votes);
  }

  render() {
    const {reply} = this.props;
    return (<div className="reply-item">
      <div className="vote-section">
        <button onClick={this.upVote.bind(this)}><span className="fas fa fa-caret-up"/></button>
        <span>{reply.votes}</span>
        <button onClick={this.downVote.bind(this)}><span className="fas fa fa-caret-down"/></button>
      </div>
      <div className="desc-section">
        <p className="reply-meta">
          <em>{`Asked by ${reply.author} ${moment(reply.date_replied).fromNow()}`}</em>
        </p>
        <p className="reply-desc">
          {reply.description}
        </p>
        <ul className="reply-info">
            <li>{`${reply.comments} comment${reply.comments > 1 ? "s" : ""}`}</li>
            <li><a href="javascript:void(0)">blog this</a></li>
            <li><strong>category:</strong> <a href="javascript:void(0)">{reply.category}</a></li>
        </ul>
      </div>
    </div>);
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {questionAsked} from '../../constants/appConstants';
import {selectQuestion, upVoteQuestion, downVoteQuestion} from '../../actions/questionActions'
import _ from 'underscore';
import QuestionAsked from '../Common/QuestionAsked'
import QuestionReplies from '../Common/QuestionReplies';

export class Tab2 extends React.Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }
  componentDidMount() {
    const {selectedQuestion, selectQuestion} = this.props
    if (_.isEmpty(selectedQuestion)) {
      selectQuestion(questionAsked)
    }
  }
  upVote(replyId, questionId, votes) {
    const {upVoteQuestion} = this.props;
    upVoteQuestion(replyId,questionId, votes);
  }
  downVote(replyId, questionId, votes) {
    const {downVoteQuestion} = this.props;
    downVoteQuestion(replyId,questionId, votes);
  }
  render() {
    const {selectedQuestion} = this.props
    return (<div>
      {
        !_.isEmpty(selectedQuestion)
          ? (<div className="tab2-wrapper">
            <QuestionAsked question={selectedQuestion}/>
            <QuestionReplies question={selectedQuestion} upVote={this.upVote} downVote={this.downVote}/>
          </div>)
          : null
      }
    </div>);
  }
}

function mapStateToProps(state) {
  return {selectedQuestion: state.questions.selectedQuestion};
}

function mapDispatchToProps(dispatch) {
  return {
    selectQuestion: bindActionCreators(selectQuestion, dispatch),
    downVoteQuestion: bindActionCreators(downVoteQuestion, dispatch),
    upVoteQuestion: bindActionCreators(upVoteQuestion, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab2);

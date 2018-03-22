import React from 'react';
import moment from 'moment';

export default class QuestionAsked extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {question} = this.props
    return (<div className="question-wrapper">
      <h3 className="question-title">{question.title}</h3>
      <p className="question-meta">
        <em>{`Asked by ${question.author} ${moment(question.date_posted).fromNow()}`}</em>
      </p>
      <p className="question-desc">
        {question.description}
      </p>
    </div>);
  }
}

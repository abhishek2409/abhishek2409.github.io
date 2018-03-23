import React from 'react';
import {submitComment} from '../../actions/questionActions'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import uniqid from 'uniqid';

 class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled:true
    }
    this._onSubmit = this._onSubmit.bind(this);
  }
  componentDidMount() {
    const disabled = this.checkValidations();
    this.setState({disabled});
  }
  checkValidations(){
    let disabled = true;
    const {name,email,phone,comment} = this.props.commentForm;
    if((name != '') && (email != '') && (phone != '') && (comment != '')){
      disabled = false;
    }
    return disabled;
  }
  _onSubmit(e){
    e.preventDefault();
    const {name,email,phone,comment,submitComment,selectedQuestion} = this.props.commentForm;
    let params = {
      date_replied: new Date(),
      author: name,
      category: 'Category 2',
      description:comment,
      votes:0,
      comments:0,
      id:uniqid()
    }
    submitComment(params,selectedQuestion.id);
  }

  render() {
    const {disabled} = this.state;
    const {commentForm} = this.props;
    const {name,email,phone,comment} = commentForm;
    return (<div className="form-wrapper">
      <form onSubmit={this._onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input type="text" className="form-control"  placeholder="Enter your name" required/>
          </div>
          <div className="form-group col-md-4">
            <input type="email" className="form-control" placeholder="Enter your email id" required/>
          </div>
          <div className="form-group col-md-4">
            <input type="tel" className="form-control"  placeholder="09090909090" required/>
          </div>
        </div>
        <div className="form-group">
          <textarea className="form-group" placeholder="Enter your comment" required/>
            <small  className="form-text text-muted">50 of 200 characters left</small>
        </div>
        <button type="submit" disabled={disabled} className="btn btn-primary">SUBMIT</button>
      </form>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    commentForm:state.questions.commentForm,
    selectedQuestion:state.questions.selectedQuestion
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitComment:bindActionCreators(submitComment,dispatch)
  };
}

export default connect(mapStateToProps)(QuestionForm);

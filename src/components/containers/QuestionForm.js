import React from 'react';
import {submitComment} from '../../actions/questionActions'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import uniqid from 'uniqid';
import ReactPhoneInput from 'react-phone-input-2';
import $ from 'jquery';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      commentForm:{
        name: '',
        phone: '',
        comment: '',
        email: ''
      },
      errors: {
        name: false,
        phone: false,
        comment: false,
        email: false
      }
    }
    this._onSubmit = this._onSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.checkValidations = this.checkValidations.bind(this);
    this.resetVals = this.resetVals.bind(this);
  }
  resetVals(){
    const commentForm = {
      name:'',
      email:'',
      phone:'',
      comment:''
    };
    this.setState({commentForm});
  }
  componentDidMount() {
    this.checkValidations();
  }
  handlePhoneChange(val){
    const {setValue} = this.props;
    let commentForm = $.extend(true,{},this.state.commentForm);
    commentForm["phone"] = val;
    this.setState({commentForm},()=>{
      this.checkValidations();
    });

  }
  _onChange(e,type){
    const {value} = e.target;
    let commentForm = $.extend(true,{},this.state.commentForm);
    commentForm[type] = value;
    this.setState({commentForm},()=>{
      this.checkValidations();
    });
  }

  checkValidations() {
    let disabled = true;
    const {name, email, phone, comment} = this.state.commentForm;
    if ((name != '') && (email != '') && (phone != '') && (comment != '')) {
      disabled = false;
    }else{
      disabled = true;
    }
    this.setState({disabled});
  }
  _onSubmit(e) {
    e.preventDefault();
    const {name,email,phone,comment} = this.state.commentForm;
    const {submitComment,selectedQuestion} = this.props;
    let params = {
      date_replied: new Date(),
      author: name,
      category: 'Category 2',
      description: comment,
      votes: 0,
      comments: 0,
      id: uniqid()
    }
    submitComment(params, selectedQuestion.id);
    this.resetVals();
  }

  render() {
    const {disabled, errors, commentForm} = this.state;
    const {name, email, phone, comment} = commentForm;
    return (<div className="form-wrapper">
      <form onSubmit={this._onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input type="text" className="form-control" onChange={e=>this._onChange(e,"name")} value={name} placeholder="Enter your name" required="required"/> {
              errors.name
                ? (<div class="invalid-feedback">
                  {errors.name}
                </div>)
                : null
            }
          </div>
          <div className="form-group col-md-4">
            <input onChange={e=>this._onChange(e,"email")} type="email" className="form-control" value={email} placeholder="Enter your email id" required="required"/> {
              errors.email
                ? (<div class="invalid-feedback">
                  {erros.email}
                </div>)
                : null
            }
          </div>
          <div className="form-group col-md-4">
            <ReactPhoneInput value={phone} defaultCountry={'in'} onChange={this.handlePhoneChange}/> {
              errors.phone
                ? (<div class="invalid-feedback">
                  {erros.phone}
                </div>)
                : null
            }
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <textarea className="form-control" onChange={e=>this._onChange(e,"comment")} placeholder="Enter your comment" required="required" value={comment} />
            <small className="form-text text-muted float-right">{comment.length} of 200 characters left</small>
            {
              errors.comment
                ? (<div class="invalid-feedback">
                  {erros.comment}
                </div>)
                : null
            }
          </div>
        </div>
        <button type="submit" disabled={disabled} className="btn btn-primary">SUBMIT</button>
      </form>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    selectedQuestion: state.questions.selectedQuestion
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitComment: bindActionCreators(submitComment, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);

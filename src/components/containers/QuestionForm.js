import React from 'react';
import {submitComment} from '../../actions/questionActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import uniqid from 'uniqid';
import Phone from 'react-phone-number-input';
import { format, parse, isValidNumber } from 'libphonenumber-js';
import $ from 'jquery';
import {ValidateEmail} from '../../utils/validations';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentForm: {
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
    };
    this._onSubmit = this._onSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.checkValidations = this.checkValidations.bind(this);
    this.resetVals = this.resetVals.bind(this);
  }
  resetVals() {
    let {commentForm,errors} = $.extend(true, {}, this.state);
    commentForm['name'] = "";
    commentForm['phone'] = "";
    commentForm['comment'] = "";
    commentForm['email'] = "";
    errors['name'] = false;
    errors['phone'] = false;
    errors['comment'] = false;
    errors['email'] = false;
    this.setState({commentForm,errors});
  }

  handlePhoneChange(val) {
    const {setValue} = this.props;
    let commentForm = $.extend(true, {}, this.state.commentForm);
    commentForm["phone"] = val;
    this.setState({commentForm});

  }
  _onChange(e, type) {
    const {value} = e.target;
    if (type === 'comment' && value.length > 200) {
      return;
    }
    let commentForm = $.extend(true, {}, this.state.commentForm);
    commentForm[type] = value;
    this.setState({commentForm});
  }

  checkValidations() {
    let errors = $.extend(true, {}, this.state.errors);
    let formIsValid = true;
    const {name, email, phone, comment} = this.state.commentForm;
    if (!ValidateEmail(email) || email === '') {
      errors['email'] = "Please enter a valid email id";
      formIsValid = false;
    }
    if (name === '') {
      errors['name'] = "Please enter your name";
      formIsValid = false;
    }
    if (phone === '') {
      errors['phone'] = "Please enter your phone";
      formIsValid = false;
    }else if(!isValidNumber(phone)){
      errors['phone'] = "Please enter a valid phone number";
      formIsValid = false;
    }
    if (comment === '') {
      errors['comment'] = "Please enter your comment";
      formIsValid = false;
    }
    this.setState({errors});
    return formIsValid;
  }
  _onSubmit(e) {
    e.preventDefault();
    const isValid = this.checkValidations();
    const {commentForm} = this.state;
    const {name, email, phone, comment} = commentForm;
    const {submitComment, selectedQuestion} = this.props;
    console.log(name,email,phone,comment,isValid);
    if (isValid) {
      let params = {
        date_replied: new Date(),
        author: name,
        category: 'Category 2',
        description: comment,
        votes: 0,
        comments: 0,
        id: uniqid()
      };
      submitComment(params, selectedQuestion.id);
      this.resetVals();
    }
  }

  render() {
    const {errors, commentForm} = this.state;
    const {name, email, phone, comment} = commentForm;
    let formClassName = '';
    if (errors.name || errors.phone || errors.comment || errors.email) {
      formClassName = "was-validated";
    }
    return (<div className="form-wrapper">
      <form className={`needs-validation ${formClassName}`} onSubmit={this._onSubmit} noValidate>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input type="text" className="form-control" onChange={e => this._onChange(e, "name")} value={name} placeholder="Enter your name" required="required"/> {
              errors.name
                ? (<div className="invalid-feedback">
                  {errors.name}
                </div>)
                : null
            }
          </div>
          <div className="form-group col-md-4">
            <input onChange={e => this._onChange(e, "email")} type="email" className="form-control" value={email} placeholder="Enter your email id" required="required"/> {
              errors.email
                ? (<div className="invalid-feedback">
                  {errors.email}
                </div>)
                : null
            }
          </div>
          <div className="form-group col-md-4">
            <Phone saveOnIcons={false} inputClassName="form-control" error={ phone ? (isValidNumber(phone) ? "" : 'Please enter a valid phone number') : 'Please enter your phone number' } indicateInvalid={errors.phone} required placeholder="Enter phone number" className="phone-input" value={phone} onChange={ this.handlePhoneChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <textarea className="form-control" onChange={e => this._onChange(e, "comment")} placeholder="Enter your comment" required="required" value={comment}/>
            <small className="form-text text-muted float-right">{comment.length}
              of 200 characters left</small>
            {
              errors.comment
                ? (<div className="invalid-feedback">
                  {errors.comment}
                </div>)
                : null
            }
          </div>
        </div>
        <button type="submit"  className="btn btn-primary">SUBMIT</button>
      </form>
    </div>);
  }
}

function mapStateToProps(state) {
  return {selectedQuestion: state.questions.selectedQuestion};
}

function mapDispatchToProps(dispatch) {
  return {
    submitComment: bindActionCreators(submitComment, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);

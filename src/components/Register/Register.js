import React, { Component } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import {connect} from 'react-redux';
import {setTitleHeader} from '../../actions';

export class Register extends Component {
  componentDidMount() {
  	this.props.dispatch(setTitleHeader('Register', 'Register today to start sending out wedding reminders!'));
  }
  render() {
    return (
      <div className="register">
        <RegisterForm />
      </div>
    )
  }
}

export default connect(dispatch =>({dispatch}))(Register);
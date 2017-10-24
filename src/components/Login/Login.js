import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setTitleHeader} from '../../actions';

import LoginForm from '../LoginForm/LoginForm';
import './Login.css';

class Login extends Component {
	componentDidMount() {
		this.props.dispatch(setTitleHeader('Login', 'Log back in and send out additional reminders, view your lists, and more.'));
	}
  render() {
    return (
      <div className="login">
        <div className="login-header">
          <h3>Login to RSVPtext</h3>
          <span>Enter a username and password to log on!</span>
        </div>
      	<LoginForm />
      </div>
    )
  }
}

export default connect(dispatch =>({dispatch}))(Login);
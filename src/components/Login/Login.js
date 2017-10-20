import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setTitleHeader} from '../../actions';

import LoginForm from '../LoginForm/LoginForm';

class Login extends Component {
	componentDidMount() {
		this.props.dispatch(setTitleHeader('Login', 'Log back in and send out additional reminders, view your lists, and more.'));
	}
  render() {
    return (
      <div className="login">
      	<LoginForm />
      </div>
    )
  }
}

export default connect(dispatch =>({dispatch}))(Login);
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setTitleHeader} from '../../actions';
import {Redirect} from 'react-router-dom';

import LoginForm from '../LoginForm/LoginForm';
import './Login.css';

class Login extends Component {
	componentDidMount() {
		this.props.dispatch(setTitleHeader('Login', 'Log back in and send out additional reminders, view your lists, and more.'));
	}

  render() {
    if(this.props.loggedIn) {
      return <Redirect to="/" />;
    }
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

const mapStateToProps = state => ({
  loggedIn: state.rsvp.authToken !== null
});

export default connect(mapStateToProps)(Login);
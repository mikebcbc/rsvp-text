import React, { Component } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import { connect } from "react-redux";
import {Link, Redirect} from 'react-router-dom';
import { setTitleHeader } from "../../actions";

import './Register.css';

export class Register extends Component {
  componentDidMount() {
    this.props.dispatch(
      setTitleHeader(
        "Register",
        "Register today to start sending out wedding reminders!"
      )
    );
  }
  render() {
    if(this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="register">
        <div className="register-header">
          <h3>Register for RSVPtext</h3>
          <span>Enter a username, password, and email to get started!</span>
        </div>
        <RegisterForm />
        <span className="login-disclaimer">Already a member? <Link to="/login">Login</Link></span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.rsvp.authToken !== null
});

export default connect(mapStateToProps)(Register);

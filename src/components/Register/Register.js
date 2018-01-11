import React, { Component } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
import { setTitleHeader } from "../../actions";

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
        <RegisterForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.rsvp.authToken !== null
});

export default connect(mapStateToProps)(Register);

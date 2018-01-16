import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
import { setTitleHeader, fetchGuests, fetchEvent } from "../../actions";

import Sidebar from "../Sidebar/Sidebar";
import Guests from "../Guests/Guests";

import "./Dashboard.css";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(
      setTitleHeader(
        "Dashboard",
        "Manage your guests, set reminders, customize messages, and more!"
      )
    );
    this.props.dispatch(fetchEvent(this.props.authToken));
    this.props.dispatch(fetchGuests(this.props.authToken));
  }
  render() {
    if(!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="dashboard">
        <Guests />
        <Sidebar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.rsvp.authToken,
  loggedIn: state.rsvp.authToken !== null
});

export default connect(mapStateToProps)(Dashboard);
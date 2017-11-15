import React, { Component } from "react";
import { connect } from "react-redux";
import { setTitleHeader } from "../../actions";

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
  }
  render() {
    return (
      <div className="dashboard">
        <Guests />
        <Sidebar />
      </div>
    );
  }
}

export default connect(dispatch =>({dispatch}))(Dashboard);
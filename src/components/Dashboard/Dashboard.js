import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar';

import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
      	<span className="placeholder" />
      	<Sidebar />
      </div>
    )
  }
}

import React, { Component } from 'react';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css';

class Root extends Component {
  render() {
    return (
      <div className="Root">
        <Header />
        <div className="main-container">
          <Dashboard />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Root;

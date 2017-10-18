import React, { Component } from 'react';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Root.css';
import Login from '../Login/Login';

class Root extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
         </div>
      </Router>
    );
  }
}


export default Root;
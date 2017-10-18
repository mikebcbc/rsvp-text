import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navigation">
				<ul className="main-nav">
          <li><Link to="/login">Login</Link></li>
					<li><Link to="/register">Register</Link></li>
				</ul>
      </nav>
    );
  }
}

export default Nav;
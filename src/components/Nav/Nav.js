import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navigation">
				<ul className="main-nav">
					<li><a href="">Login</a></li>
					<li><a href="">Logout</a></li>
				</ul>
      </nav>
    );
  }
}

export default Nav;
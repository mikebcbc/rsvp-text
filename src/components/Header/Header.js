import React, { Component } from 'react';
import './Header.css';

import Nav from '../Nav/Nav';
import Title from '../Title/Title';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<img src="logo.png" />
      	< Nav />
      </div>
    );
  }
}

export default Header;
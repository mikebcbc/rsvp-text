import React, { Component } from 'react';
import './Header.css';

import Nav from '../Nav/Nav';
import Title from '../Title/Title';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<Link to="/"><img src="logo.png" /></Link>
      	< Nav />
      </div>
    );
  }
}

export default Header;
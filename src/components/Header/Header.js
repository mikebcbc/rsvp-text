import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Header.css';

import Nav from '../Nav/Nav';
import Title from '../Title/Title';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<Link to="/"><img src="logo.png" alt="Logo" /></Link>
      	< Nav />
      </div>
      <Title title={this.props.title} />
    );
  }
}

const mapStateToProps = state => ({
	title: state.rsvp.title
});

export default connect(mapStateToProps)(Header);
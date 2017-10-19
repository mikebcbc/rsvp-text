import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Header.css';

import Nav from '../Nav/Nav';
import Title from '../Title/Title';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return [
      <div className="Header" key="A">
      	<Link to="/"><img src="logo.png" alt="Logo" /></Link>
      	< Nav />
      </div>,
      <Title title={this.props.title} subTitle={this.props.subTitle} key="B"/>
    ];
  }
}

const mapStateToProps = state => ({
	title: state.rsvp.title,
	subTitle: state.rsvp.subTitle
});

export default connect(mapStateToProps)(Header);
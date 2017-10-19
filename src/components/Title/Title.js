import React, { Component } from 'react';

import './Title.css';

export default class Title extends Component {
  render() {
    return (
      <div className="title">
      	<span className="greeting">{this.props.title}</span>
      	<hr />
      	<span className="sub-greeting">Manage your guests, set reminders, customize messages, and more!</span>
      </div>
    )
  }
}

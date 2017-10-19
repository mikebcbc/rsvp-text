import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setTitleHeader} from '../../actions';

class Login extends Component {
	componentDidMount() {
		this.props.dispatch(setTitleHeader('Login', 'Log back in and send out additional reminders, view your lists, and more.'));
	}
  render() {
    return (
      <div className="login">
      </div>
    )
  }
}

export default connect(dispatch =>({dispatch}))(Login);
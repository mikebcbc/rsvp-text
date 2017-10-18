import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {registerUser} from '../../actions';

import './RegisterForm.css';

export class RegisterForm extends Component {
  onSubmit(values) {
  	const {name, username, password} = values;
  	const user = {name, username, password};
  	return this.props.dispatch(registerUser({"user": user}));
  }

  render() {
    return (
      <form className="register-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
      	<Field component="input" type="text" name="name" />
      	<Field component="input" type="text" name="username" />
      	<Field component="input" type="text" name="password" />
      	<button type="submit">Register</button>
      </form>
    )
  }
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) => console.log(errors)
})(RegisterForm);
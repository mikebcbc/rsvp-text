import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {login} from '../../actions';
import {required, nonEmpty} from '../validators.js';

import Input from '../Input/Input';

export class LoginForm extends Component {
	onSubmit(values) {
		const {email, password} = values;
  	const user = {email, password};
  	return this.props.dispatch(login(user));
	}

  render() {
    return (
      <form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
      	<Field component={Input} type="email" name="email" validate={[required, nonEmpty]} />
      	<Field component={Input} type="text" name="password" validate={[required, nonEmpty]} />
      	<button type="submit" disabled={this.props.pristine || this.props.submitting}>Login</button>
      </form>
    )
  }
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (err, dispatch) => console.log(err)
})(LoginForm);
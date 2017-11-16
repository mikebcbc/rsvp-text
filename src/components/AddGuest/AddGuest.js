import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import Input from '../Input/Input';
import {required, nonEmpty} from '../validators';

import './AddGuest.css';

export class AddGuest extends Component {
  render() {
    return (
      <div className="addguest">
				<form className="add-guest-form">
					<label htmlFor="first">First Name</label>
					<Field component={Input} type="text" name="first" id="first" validate={[required, nonEmpty]} />
					<label htmlFor="last">Last Name</label>
					<Field component={Input} type="text" name="last" id="last" validate={[required, nonEmpty]} />
					<label htmlFor="phone">Phone Number</label>
					<Field component={Input} type="text" name="phone" id="phone" validate={[required, nonEmpty]} />
					<label htmlFor="group">Group</label>
					<Field component={Input} type="text" name="group" id="group" />
				</form>
      </div>
    )
  }
}

export default reduxForm({
    form: 'addGuest',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(AddGuest);
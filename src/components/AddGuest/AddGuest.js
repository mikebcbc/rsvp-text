import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import {addGuest} from '../../actions';
import Input from '../Input/Input';
import {required, nonEmpty} from '../validators';

import './AddGuest.css';

export class AddGuest extends Component {
	
	onSubmit(values) {
		let guest = {
			name: {
				first: values.first,
				last: values.last
			},
			phone: values.phone,
			rsvp: 'n',
			group: values.group
		};
		this.props.dispatch(addGuest(guest));
	}

  render() {
    return (
      <div className="addguest">
				<form className="add-guest-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<label htmlFor="first">First Name</label>
					<Field component={Input} type="text" name="first" id="first" validate={[required, nonEmpty]} />
					<label htmlFor="last">Last Name</label>
					<Field component={Input} type="text" name="last" id="last" validate={[required, nonEmpty]} />
					<label htmlFor="phone">Phone Number</label>
					<Field component={Input} type="text" name="phone" id="phone" validate={[required, nonEmpty]} />
					<label htmlFor="group">Group</label>
					<Field component={Input} type="text" name="group" id="group" />
					<button type="submit">Add Guest</button>
				</form>
      </div>
    )
  }
}

export default reduxForm({
    form: 'addGuest',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(AddGuest);
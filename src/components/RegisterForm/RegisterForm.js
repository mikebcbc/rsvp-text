import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { registerUser } from "../../actions";

import Input from "../Input/Input";
import { required, nonEmpty, matches, isTrimmed } from "../validators.js";

import "./RegisterForm.css";

export class RegisterForm extends Component {
  onSubmit(values) {
    const { name, email, password } = values;
    const user = { name, email, password };
    return this.props.dispatch(registerUser({ user: user }));
  }

  render() {
    return (
      <form
        className="register-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="name">Your Name</label>
        <Field component={Input} type="text" name="name" placeholder="Your Name" validate={required} />
        <label htmlFor="email">Your Email</label>
        <Field
          component={Input}
          type="email"
          name="email"
          placeholder="Your Email"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          placeholder="Password"
          name="password"
          validate={[required, isTrimmed]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Register
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) => console.log(errors)
})(RegisterForm);

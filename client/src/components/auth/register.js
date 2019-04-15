import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class Register extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="">Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <Field
            name="password2"
            component="input"
            type="password"
            placeholder="confirm password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

Register = reduxForm({
  form: "register",
  destroyOnUnmount: false
})(Register);

export default Register;

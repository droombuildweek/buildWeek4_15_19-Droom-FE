import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Login extends Component {
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
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

Login = reduxForm({
  form: "login",
  destroyOnUnmount: false
})(Login);

export default Login;

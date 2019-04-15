import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Login extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="" />
          <Field />
        </div>
        <div>
          <label htmlFor="" />
          <Field />
        </div>
      </form>
    );
  }
}

Login = reduxForm({
  form: "login"
})(Login);

export default Login;

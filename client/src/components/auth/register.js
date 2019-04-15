import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Register extends Component {
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
        <div>
          <label htmlFor="" />
          <Field />
        </div>
      </form>
    );
  }
}

Register = reduxForm({
  form: "register"
})(Register);

export default Register;

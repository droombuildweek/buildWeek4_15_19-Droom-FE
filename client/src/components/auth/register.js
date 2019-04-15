import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Register extends Component {
  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password2">Confirm Password</Label>
            <Input
              type="password"
              name="password2"
              id="password 2"
              placeholder="confirm password"
            />
          </FormGroup>
          <Button>Sign Up</Button>
        </Form>
      </>
    );
  }
}

export default Register;

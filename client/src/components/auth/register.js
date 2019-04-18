import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions";
import { withRouter } from "react-router-dom";

import "./Register.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: ""
    };
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(userData, this.props.history);
  };

  render() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <div className="form-container">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.inputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.inputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input
                name="password2"
                type="password"
                placeholder="confirm password"
                value={this.state.password2}
                onChange={this.inputChange}
              />
            </div>
            <button type="submit" onClick={this.handleSubmit}>
              Sign Up
            </button>
          </form>
        </div>
      );
    }
    return (
      <div>
        <p>Registered and logged in!</p>
        <a className="link" href="/dashboard">
          Go To Dashboard
        </a>
        <a className="link" href="/matching">
          Start Matching
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

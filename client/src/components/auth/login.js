import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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

    this.props.loginUser(userData, this.props.history);
    this.props.history.push("/dashboard");
  };

  render() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="">Email</label>
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
            <button type="submit" onClick={this.handleSubmit}>
              Login
            </button>
          </form>
        </div>
      );
    }
    return (
      <div>
        <p>Logged in!</p>
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
  { loginUser }
)(withRouter(Login));

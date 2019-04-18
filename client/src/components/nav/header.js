import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";

import "./Header.scss";

class Header extends Component {
  render() {
    let logout;
    let login;
    let signUp;
    let matching;
    if (this.props.auth.isAuthenticated) {
      logout = <button onClick={this.props.logoutUser}>Logout</button>;
      matching = (
        <Link to="/matching" style={{ textDecoration: "none" }}>
          <p className="link">Matching</p>
        </Link>
      );
    } else {
      login = (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p className="link">Login</p>
        </Link>
      );
      signUp = (
        <Link to="/register" style={{ textDecoration: "none" }}>
          <p className="link">Sign Up</p>
        </Link>
      );
    }
    return (
      <div className="navbar">
        <h1>Droom</h1>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <p className="link">Dashboard</p>
        </Link>
        {matching}
        <Link to="/employers" style={{ textDecoration: "none" }}>
          <p className="link">Employers</p>
        </Link>
        <Link to="/jobs" style={{ textDecoration: "none" }}>
          <p className="link">Jobs</p>
        </Link>
        {logout}
        {login}
        {signUp}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);

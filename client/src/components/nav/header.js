import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>Droom</h1>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <p className="link">Home</p>
        </Link>
        <Link to="/employers" style={{ textDecoration: "none" }}>
          <p className="link">Employers</p>
        </Link>
        <Link to="/jobs" style={{ textDecoration: "none" }}>
          <p className="link">Jobs</p>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p className="link">Login</p>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <p className="link">Sign Up</p>
        </Link>
      </div>
    );
  }
}

export default Header;

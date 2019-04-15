import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Sign Up</NavLink>
      </div>
    );
  }
}

export default Header;

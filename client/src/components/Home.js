import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/jobSeeker/dashboard" style={{ textDecoration: "none" }}>
          <p className="home-link">Job Seeker Dashboard</p>
        </Link>
        <Link to="/employer/dashboard" style={{ textDecoration: "none" }}>
          <p className="home-link">Employer Dashboard</p>
        </Link>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class MatchingHome extends Component {
  render() {
    return (
      <div>
        <h2>Matching Home</h2>
        <Link to="/matching/jobSeekers" style={{ textDecoration: "none" }}>
          <p className="link">Matching for Job Seekers</p>
        </Link>
        <Link to="/matching/employers" style={{ textDecoration: "none" }}>
          <p className="link">Matching for Employers</p>
        </Link>
      </div>
    );
  }
}

export default MatchingHome;

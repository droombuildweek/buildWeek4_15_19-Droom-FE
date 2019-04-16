import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link
          to="/jobSeeker/createProfile/personalInfo"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Personal Info Form</p>
        </Link>
        <Link
          to="/jobSeeker/createProfile/experience"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Experience Form</p>
        </Link>
        <Link
          to="/jobSeeker/createProfile/education"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Education Form</p>
        </Link>
        <Link
          to="/jobSeeker/createProfile/skills"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Skills Form</p>
        </Link>
      </div>
    );
  }
}

export default Dashboard;

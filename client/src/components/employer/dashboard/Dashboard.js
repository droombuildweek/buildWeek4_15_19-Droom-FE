import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Dashboard.scss";

class EmployerDashboard extends Component {
  render() {
    return (
      <div>
        <h1>Employer Dashboard</h1>
        <Link
          to="/employer/createProfile/companyInfo"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Personal Info Form</p>
        </Link>
        <Link
          to="/employer/createProfile/jobInfo"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Experience Form</p>
        </Link>
      </div>
    );
  }
}

export default EmployerDashboard;

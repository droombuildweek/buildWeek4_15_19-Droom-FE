import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteEmployerCompany, deleteEmployerJob } from "../../../actions";

import "./Dashboard.scss";

class EmployerDashboard extends Component {
  render() {
    return (
      <div>
        <h2>Employer Dashboard</h2>
        <h3>Matches</h3>
        <Link to="/matches/employers" style={{ textDecoration: "none" }}>
          <p className="dashboard-link">View Matches</p>
        </Link>
        <h3>View Profile</h3>
        <Link to="/employer/company" style={{ textDecoration: "none" }}>
          <p className="dashboard-link">View Company</p>
        </Link>
        <Link to="/employer/jobs" style={{ textDecoration: "none" }}>
          <p className="dashboard-link">View Jobs</p>
        </Link>
        <h3>Create Profile</h3>
        <Link
          to="/employer/createProfile/companyInfo"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Company Info Form</p>
        </Link>
        <Link
          to="/employer/createProfile/jobInfo"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Job Form</p>
        </Link>
        <h3>Edit Profile</h3>
        <Link
          to="/employer/editProfile/companyInfo"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Edit Company Info</p>
        </Link>
        <Link
          to="/employer/editProfile/jobInfo"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Edit Job Info</p>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteEmployerCompany, deleteEmployerJob }
)(EmployerDashboard);

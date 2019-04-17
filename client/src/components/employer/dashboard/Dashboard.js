import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteEmployerCompany, deleteEmployerJob } from "../../../actions";

import "./Dashboard.scss";

class EmployerDashboard extends Component {
  deleteCompany = e => {
    e.preventDefault();
    this.props.deleteEmployerCompany(this.props.auth.user.subject);
  };

  deleteJob = e => {
    e.preventDefault();
    this.props.deleteEmployerJob(this.props.auth.user.subject);
  };

  render() {
    return (
      <div>
        <h1>Employer Dashboard</h1>
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
        <button onClick={this.deleteCompany}>Delete Company</button>
        <button onClick={this.deleteJob}>Delete Job</button>
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

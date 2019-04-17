import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteEmployerProfile } from "../../../actions";

import "./Dashboard.scss";

class EmployerDashboard extends Component {
  deleteClick = e => {
    e.preventDefault();
    deleteEmployerProfile(this.props.auth.user.subject);
  };

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
        <Link to="/employer/editProfile" style={{ textDecoration: "none" }}>
          <p className="dashboard-link">Edit Profile</p>
        </Link>
        <button onClick={this.deleteClick}>Delete Profile</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteEmployerProfile }
)(EmployerDashboard);

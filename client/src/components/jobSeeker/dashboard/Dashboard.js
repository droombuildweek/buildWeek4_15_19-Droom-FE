import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Dashboard.scss";

class SeekerDashboard extends Component {
  render() {
    return (
      <div>
        <h2>Job Seeker Dashboard</h2>
        <h3>View Profile</h3>
        <Link to="/jobSeeker/personalInfo" style={{ textDecoration: "none" }}>
          <p className="dashboard-link">View Personal Info</p>
        </Link>
        <Link to="/jobSeeker/experience" style={{ textDecoration: "none" }}>
          <p className="dashboard-link">View Experience</p>
        </Link>
        <Link to="/jobSeeker/education" style={{ textDecoration: "none" }}>
          <p className="dashboard-link">View Education</p>
        </Link>
        <Link to="/jobSeeker/skills" style={{ textDecoration: "none" }}>
          <p className="dashboard-link">View Skills</p>
        </Link>
        <h3>Create Profile</h3>
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
        <h3>Edit Profile</h3>
        <Link
          to="/jobSeeker/editProfile/editPersonal"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Edit Personal Info</p>
        </Link>
        <Link
          to="/jobSeeker/editProfile/editExperience"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Edit Previous Experience</p>
        </Link>
        <Link
          to="/jobSeeker/editProfile/editEducation"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Edit Education</p>
        </Link>
        <Link
          to="/jobSeeker/editProfile/editSkills"
          style={{ textDecoration: "none" }}
        >
          <p className="dashboard-link">Edit Skills</p>
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
  null
)(SeekerDashboard);

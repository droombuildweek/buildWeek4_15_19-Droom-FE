import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEmployerJob, getEmployerJob } from "../../../actions";

class ViewJobs extends Component {
  componentDidMount() {
    this.props.getEmployerJob(this.props.auth.user.subject);
  }

  deleteJob = e => {
    e.preventDefault();
    alert("Are you sure you want to delete the job?");
    this.props.deleteEmployerJob(this.props.auth.user.subject);
  };

  render() {
    return (
      <div>
        <h2>View Jobs</h2>
        <button onClick={this.deleteJob}>Delete Job</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employer: state.employer,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteEmployerJob, getEmployerJob }
)(ViewJobs);

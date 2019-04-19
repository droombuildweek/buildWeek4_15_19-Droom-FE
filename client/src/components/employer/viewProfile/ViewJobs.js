import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEmployerJob, getEmployerJob } from "../../../actions";
import _ from "lodash";

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
    if (_.isEmpty(this.props.employer.employerProfile)) {
      return <p>loading</p>;
    }
    return (
      <div>
        <h2>View Jobs</h2>
        {/* {this.props.employer.employerProfile.jobs.map(job => {
          return (
            <div>
              <p>{job.jobName}</p>
              <p>{job.jobDescription}</p>
              <p>{job.jobExperienceRequired}</p>
              <p>{job.jobExperiencePreferred}</p>
              <p>{job.jobApplyBy}</p>
            </div>
          );
        })} */}
        <p>{this.props.employer.employerProfile.jobs.jobName}</p>
        <p>{this.props.employer.employerProfile.jobs.jobDescription}</p>
        <p>{this.props.employer.employerProfile.jobs.jobExperienceRequired}</p>
        <p>{this.props.employer.employerProfile.jobs.jobExperiencePreferred}</p>
        <p>{this.props.employer.employerProfile.jobs.jobApplyBy}</p>
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployerJob, getEmployerJobs } from "../../actions";

class Jobs extends Component {
  componentDidMount() {
    this.props.getEmployerJobs();
  }

  render() {
    if (this.props.employer.employerProfiles.length === 0) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <h2>Jobs</h2>
        {this.props.employer.employerProfiles.jobs.map(job => {
          return (
            <div key={job.id}>
              <h3>{job.jobName}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employer: state.employer
});

export default connect(
  mapStateToProps,
  { getEmployerJob, getEmployerJobs }
)(Jobs);

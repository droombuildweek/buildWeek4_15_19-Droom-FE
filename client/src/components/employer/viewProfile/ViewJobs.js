import React, { Component } from "react";

class ViewJobs extends Component {
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

export default ViewJobs;

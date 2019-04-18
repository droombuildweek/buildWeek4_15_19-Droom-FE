import React, { Component } from "react";
import { connect } from "react-redux";
import { editJobInfo, getEmployerJob, getEmployerJobs } from "../../../actions";
import _ from "lodash";

class EditJobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      jobName: "",
      jobDescription: "",
      jobExperienceRequired: "",
      jobExperiencePreferred: "",
      jobApplyBy: "",
      jobSkill: ""
    };
  }

  componentDidMount() {
    this.props.getEmployerJob(this.state.userId);
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const jobData = {
      companyId: "",
      jobName: this.state.jobName,
      jobDescription: this.state.jobDescription,
      jobExperienceRequired: this.state.jobExperienceRequired,
      jobExperiencePreferred: this.state.jobExperiencePreferred,
      jobApplyBy: this.state.jobApplyBy
    };

    this.props.editJobInfo(
      jobData,
      this.props.employer.employerProfile.jobs.id
    );
    console.log(this.state);
    console.log(jobData);
  };

  render() {
    if (_.isEmpty(this.props.employer.employerProfile)) {
      return <p>loading</p>;
    }
    return (
      <div>
        <form>
          <h2>Job Info</h2>
          {/* {this.props.employer.employerProfile.jobs/map} */}
          <p>{this.props.employer.employerProfile.jobs.jobName}</p>
          <p>{this.props.employer.employerProfile.jobs.jobDescription}</p>
          <p>
            {this.props.employer.employerProfile.jobs.jobExperienceRequired}
          </p>
          <p>
            {this.props.employer.employerProfile.jobs.jobExperiencePreferred}
          </p>
          <p>{this.props.employer.employerProfile.jobs.jobApplyBy}</p>
          <div>
            <label>Job Name</label>
            <input
              name="jobName"
              type="text"
              placeholder="edit job name"
              value={this.state.jobName}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Job Description</label>
            <input
              name="jobDescription"
              type="text"
              placeholder="edit job description"
              value={this.state.jobDescription}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Experience Required</label>
            <input
              name="jobExperienceRequired"
              type="text"
              placeholder="edit experience required"
              value={this.state.jobExperienceRequired}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Experience Preferred</label>
            <input
              name="jobExperiencePreferred"
              type="text"
              placeholder="edit experience preferred"
              value={this.state.jobExperiencePreferred}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Apply By</label>
            <input
              name="jobApplyBy"
              type="text"
              placeholder="edit apply by"
              value={this.state.jobApplyBy}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Skills Wanted</label>
            <input
              name="jobSkill"
              type="text"
              placeholder="edit skills wanted"
              value={this.state.jobSkill}
              onChange={this.inputChange}
            />
          </div>

          <button onClick={this.handleSubmit}>Submit Edit</button>
        </form>
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
  { editJobInfo, getEmployerJob, getEmployerJobs }
)(EditJobForm);

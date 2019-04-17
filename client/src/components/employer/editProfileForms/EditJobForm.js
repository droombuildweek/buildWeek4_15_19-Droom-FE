import React, { Component } from "react";
import { connect } from "react-redux";
import { editJobInfo } from "../../../actions";

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
      jobSkills: [],
      jobSkill: ""
    };
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addToArray = e => {
    e.preventDefault();
    const job = {
      name: this.state.jobSkill
    };
    this.setState({
      jobSkill: ""
    });
    this.state.jobSkills.push(job);
  };

  handleSubmit = e => {
    e.preventDefault();
    const jobData = {
      userId: this.state.userId,
      job: {
        jobName: this.state.jobName,
        jobDescription: this.state.jobDescription,
        jobExperienceRequired: this.state.jobExperienceRequired,
        jobExperiencePreferred: this.state.jobExperiencePreferred,
        jobApplyBy: this.state.jobApplyBy
      },
      jobSkills: this.state.jobSkills
    };
    editJobInfo(jobData);
  };

  render() {
    return (
      <div>
        <form>
          <h2>Job Info</h2>
          <div>
            <label>Job Name</label>
            <input
              name="jobName"
              type="text"
              placeholder="job name"
              value={this.state.jobName}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Job Description</label>
            <input
              name="jobDescription"
              type="text"
              placeholder="job description"
              value={this.state.jobDescription}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Experience Required</label>
            <input
              name="jobExperienceRequired"
              type="text"
              placeholder="experience required"
              value={this.state.jobExperienceRequired}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Experience Preferred</label>
            <input
              name="jobExperiencePreferred"
              type="text"
              placeholder="experience preferred"
              value={this.state.jobExperiencePreferred}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Apply By</label>
            <input
              name="jobApplyBy"
              type="text"
              placeholder="apply by"
              value={this.state.jobApplyBy}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Skills Wanted</label>
            <input
              name="jobSkill"
              type="text"
              placeholder="skills wanted"
              value={this.state.jobSkill}
              onChange={this.inputChange}
            />
          </div>

          <button onClick={this.addToArray}>Add Skill</button>
          <button type="submit" onSubmit={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  seeker: state.seeker,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { editJobInfo }
)(EditJobForm);

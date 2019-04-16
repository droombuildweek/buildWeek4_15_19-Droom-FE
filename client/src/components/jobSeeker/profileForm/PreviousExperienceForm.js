import React, { Component } from "react";
import { connect } from "react-redux";
class PreviousExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seekerId: "",
      jobTitle: "",
      jobCompany: "",
      jobDescription: "",
      jobStart: "",
      jobEnd: ""
    };
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form>
        <div>
          <label>Job Title</label>
          <input
            name="jobTitle"
            type="text"
            placeholder="job title"
            value={this.state.jobTitle}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <label>Company</label>
          <input
            name="jobCompnay"
            type="text"
            placeholder="company"
            value={this.state.jobCompany}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            name="jobDescription"
            type="text"
            placeholder="job description"
            value={this.state.jobDescription}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <label>Job Start</label>
          <input
            name="jobStart"
            type="text"
            placeholder="job start"
            value={this.state.jobStart}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <label>Job End</label>
          <input
            name="jobEnd"
            type="text"
            placeholder="job end"
            value={this.state.jobEnd}
            onChange={this.inputChange}
          />
        </div>
        <button type="submit" onSubmit={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.jobSeekerProfile
});

export default connect(
  mapStateToProps,
  null
)(PreviousExperienceForm);

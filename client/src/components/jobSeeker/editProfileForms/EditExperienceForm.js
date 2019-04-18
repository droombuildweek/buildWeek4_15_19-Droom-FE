import React, { Component } from "react";
import { connect } from "react-redux";
import { editSeekerExperience, getSeekerExperience } from "../../../actions";

class EditExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      jobTitle: this.props.seeker.seekerProfile.jobTitle,
      jobCompany: this.props.seeker.seekerProfile.jobCompany,
      jobDescription: this.props.seeker.seekerProfile.jobDescription,
      jobStart: this.props.seeker.seekerProfile.jobStart,
      jobEnd: this.props.seeker.seekerProfile.jobEnd,
      experiences: []
    };
  }

  componentDidMount() {
    this.props.getSeekerExperience(this.props.auth.user.subject);
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addToArray = e => {
    e.preventDefault();
    const experience = {
      jobTitle: this.state.jobTitle,
      jobCompany: this.state.jobCompany,
      jobDescription: this.state.jobDescription,
      jobStart: this.state.jobStart,
      jobEnd: this.state.jobEnd
    };
    this.setState({
      jobTitle: "",
      jobCompany: "",
      jobDescription: "",
      jobStart: "",
      jobEnd: ""
    });
    this.state.experiences.push(experience);
  };

  handleSubmit = e => {
    e.preventDefault();
    const experienceData = {
      userId: this.state.userId,
      seekerExperience: this.state.experiences
    };
    this.props.editSeekerExperience(
      experienceData,
      this.props.seeker.seekerProfile.experience.id
    );
  };

  render() {
    return (
      <div>
        <form>
          <h2>Edit Previous Experience</h2>
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
              name="jobCompany"
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
          <button onClick={this.addToArray}>Add Experience</button>
          <button type="submit" onClick={this.handleSubmit}>
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
  { editSeekerExperience, getSeekerExperience }
)(EditExperienceForm);

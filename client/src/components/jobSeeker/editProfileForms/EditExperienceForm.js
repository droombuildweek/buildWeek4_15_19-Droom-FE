import React, { Component } from "react";
import { connect } from "react-redux";
import { editSeekerExperience, getSeekerExperience } from "../../../actions";
import _ from "lodash";

class EditExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      jobTitle: "",
      jobCompany: "",
      jobDescription: "",
      jobStart: "",
      jobEnd: "",
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

  handleSubmit = id => {
    const experienceData = {
      jobTitle: this.state.jobTitle,
      jobCompany: this.state.jobCompany,
      jobDescription: this.state.jobDescription,
      jobStart: this.state.jobStart,
      jobEnd: this.state.jobEnd
    };
    this.props.editSeekerExperience(experienceData, id);
  };

  render() {
    if (_.isEmpty(this.props.seeker.seekerProfile.experience)) {
      return <p>loading</p>;
    }
    return (
      <div>
        <h2>Edit Previous Experience</h2>
        {this.props.seeker.seekerProfile.experience.map(experience => {
          return (
            <div key={experience.id}>
              <p>{experience.jobTitle}</p>
              <p>{experience.jobCompany}</p>
              <p>{experience.jobDescription}</p>
              <p>{experience.jobStart}</p>
              <p>{experience.jobEnd}</p>
              <div>
                <label>Job Title</label>
                <input
                  name="jobTitle"
                  type="text"
                  placeholder="edit job title"
                  value={this.state.jobTitle}
                  onChange={this.inputChange}
                />
              </div>
              <div>
                <label>Company</label>
                <input
                  name="jobCompany"
                  type="text"
                  placeholder="edit company"
                  value={this.state.jobCompany}
                  onChange={this.inputChange}
                />
              </div>
              <div>
                <label>Description</label>
                <input
                  name="jobDescription"
                  type="text"
                  placeholder="edit job description"
                  value={this.state.jobDescription}
                  onChange={this.inputChange}
                />
              </div>
              <div>
                <label>Job Start</label>
                <input
                  name="jobStart"
                  type="text"
                  placeholder="edit job start"
                  value={this.state.jobStart}
                  onChange={this.inputChange}
                />
              </div>
              <div>
                <label>Job End</label>
                <input
                  name="jobEnd"
                  type="text"
                  placeholder="edit job end"
                  value={this.state.jobEnd}
                  onChange={this.inputChange}
                />
              </div>
              <button onClick={e => this.handleSubmit(experience.id)}>
                Submit Edit
              </button>
            </div>
          );
        })}
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

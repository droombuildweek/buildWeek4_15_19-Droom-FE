import React, { Component } from "react";
import { connect } from "react-redux";
import { editSeekerEducation } from "../../../actions";

class EditEducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      eduSchool: "",
      eduCredential: "",
      eduDescription: "",
      eduStart: "",
      eduEnd: "",
      educations: []
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
    const education = {
      eduSchool: this.state.eduSchool,
      eduCredential: this.state.eduCredential,
      eduDescription: this.state.eduDescription,
      eduStart: this.state.eduStart,
      eduEnd: this.state.eduEnd
    };
    this.setState({
      eduSchool: "",
      eduCredential: "",
      eduDescription: "",
      eduStart: "",
      eduEnd: ""
    });
    this.state.educations.push(education);
  };

  handleSubmit = e => {
    e.preventDefault();
    const educationData = {
      userId: this.state.userId,
      seekerEducation: this.state.educations
    };
    editSeekerEducation(educationData);
  };

  render() {
    return (
      <div>
        <form>
          <h2>Edit Education</h2>
          <div>
            <label>School</label>
            <input
              name="eduSchool"
              type="text"
              placeholder="school"
              value={this.state.eduSchool}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Credential</label>
            <input
              name="eduCredential"
              type="text"
              placeholder="credential"
              value={this.state.eduCredential}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              name="eduDescription"
              type="text"
              placeholder="description"
              value={this.state.eduDescription}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Start</label>
            <input
              name="eduStart"
              type="text"
              placeholder="start"
              value={this.state.eduStart}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>End</label>
            <input
              name="eduEnd"
              type="text"
              placeholder="end"
              value={this.state.eduEnd}
              onChange={this.inputChange}
            />
          </div>
          <button onClick={this.addToArray}>Add Education</button>
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
  { editSeekerEducation }
)(EditEducationForm);

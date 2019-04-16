import React, { Component } from "react";
import { connect } from "react-redux";
class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seekerId: "",
      eduSchool: "",
      eduCredential: "",
      eduDescription: "",
      eduStart: "",
      eduEnd: ""
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
      <div>
        <form>
          <h2>Education</h2>
          <div>
            <label>School</label>
            <input
              name="eduSchool"
              type="text"
              placeholder="credential"
              value={this.state.eduCredential}
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
          <button type="submit" onSubmit={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.jobSeekerProfile
});

export default connect(
  mapStateToProps,
  null
)(EducationForm);

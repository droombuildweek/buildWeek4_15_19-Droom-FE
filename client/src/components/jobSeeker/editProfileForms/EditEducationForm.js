import React, { Component } from "react";
import { connect } from "react-redux";
import { editSeekerEducation, getSeekerEducation } from "../../../actions";
import _ from "lodash";

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

  componentDidMount() {
    this.props.getSeekerEducation(this.props.auth.user.subject);
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = id => {
    const educationData = {
      eduSchool: this.state.eduSchool,
      eduCredential: this.state.eduCredential,
      eduDescription: this.state.eduDescription,
      eduStart: this.state.eduStart,
      eduEnd: this.state.eduEnd
    };
    this.props.editSeekerEducation(educationData, id);
    console.log(educationData);
  };

  render() {
    if (_.isEmpty(this.props.seeker.seekerProfile.education)) {
      return <p>loading</p>;
    }
    return (
      <div>
        <h2>Edit Education</h2>
        {this.props.seeker.seekerProfile.education.map(education => {
          return (
            <div key={education.id}>
              <p>{education.eduSchool}</p>
              <p>{education.eduCredential}</p>
              <p>{education.eduDescription}</p>
              <p>{education.eduStart}</p>
              <p>{education.eduEnd}</p>
              <div>
                <label>School</label>
                <input
                  name="eduSchool"
                  type="text"
                  placeholder="edit school"
                  value={this.state.eduSchool}
                  onChange={this.inputChange}
                />
              </div>
              <div>
                <label>Credential</label>
                <input
                  name="eduCredential"
                  type="text"
                  placeholder="edit credential"
                  value={this.state.eduCredential}
                  onChange={this.inputChange}
                />
              </div>
              <div>
                <label>Description</label>
                <input
                  name="eduDescription"
                  type="text"
                  placeholder="edit description"
                  value={this.state.eduDescription}
                  onChange={this.inputChange}
                />
              </div>
              <div>
                <label>Start</label>
                <input
                  name="eduStart"
                  type="text"
                  placeholder="edit start"
                  value={this.state.eduStart}
                  onChange={this.inputChange}
                />
              </div>
              <div>
                <label>End</label>
                <input
                  name="eduEnd"
                  type="text"
                  placeholder="edit end"
                  value={this.state.eduEnd}
                  onChange={this.inputChange}
                />
              </div>
              <button onClick={e => this.handleSubmit(education.id)}>
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
  { editSeekerEducation, getSeekerEducation }
)(EditEducationForm);

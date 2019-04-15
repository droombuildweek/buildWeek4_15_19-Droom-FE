import React, { Component } from "react";
import { connect } from "react-redux";
class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seekerId: "",
      seekerSkill: ""
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
          <label>Skill</label>
          <input
            name="seekerSkill"
            type="text"
            placeholder="skill"
            value={this.state.seekerSkill}
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
)(EducationForm);

import React, { Component } from "react";
import { connect } from "react-redux";
import { submitSeekerSkills } from "../../../actions";
class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      seekerSkill: "",
      seekerSkills: []
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
    const skill = this.state.seekerSkill;
    this.state.seekerSkills.push(skill);
    this.setState({
      seekerSkill: ""
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    const skillsData = {
      userId: this.state.userId,
      seekerSkills: this.state.seekerSkills
    };
    submitSeekerSkills(skillsData);
  };

  render() {
    return (
      <div>
        <form>
          <h2>Skills</h2>
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
  seeker: state.seeker
});

export default connect(
  mapStateToProps,
  { submitSeekerSkills }
)(EducationForm);

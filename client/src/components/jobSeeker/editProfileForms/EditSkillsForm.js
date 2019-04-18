import React, { Component } from "react";
import { connect } from "react-redux";
import { editSeekerSkills, getSeekerSkills } from "../../../actions";
import _ from "lodash";

class EditSkillsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      seekerSkill: "",
      seekerSkills: []
    };
  }

  componentDidMount() {
    this.props.getSeekerSkills(this.props.auth.user.subject);
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // addToArray = e => {
  //   e.preventDefault();
  //   const skill = this.state.seekerSkill;
  //   this.state.seekerSkills.push(skill);
  //   this.setState({
  //     seekerSkill: ""
  //   });
  // };

  handleSubmit = id => {
    const skillData = {
      seekerSkill: this.state.seekerSkill
    };
    this.props.editSeekerSkills(skillData, id);
  };

  render() {
    if (_.isEmpty(this.props.seeker.seekerProfile.skills)) {
      return <p>loading</p>;
    }
    return (
      <div>
        <h2>Edit Skills</h2>
        {this.props.seeker.seekerProfile.skills.map(skill => {
          return (
            <div key={skill.id}>
              <p>{skill.seekerSkill}</p>
              <input
                name="seekerSkill"
                type="text"
                placeholder="edit skill"
                value={this.state.seekerSkill}
                onChange={this.inputChange}
              />
              <button onClick={e => this.handleSubmit(skill.id)}>
                Submit Edit
              </button>
            </div>
          );
        })}
        {/* <form>
          <h2>Edit Skills</h2>
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
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form> */}
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
  { editSeekerSkills, getSeekerSkills }
)(EditSkillsForm);

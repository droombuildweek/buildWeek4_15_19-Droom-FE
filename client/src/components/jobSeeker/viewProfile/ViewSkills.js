import React, { Component } from "react";
import { connect } from "react-redux";
import { getSeekerSkills, deleteSeekerSkills } from "../../../actions";

class ViewExperience extends Component {
  componentDidMount() {
    this.props.getSeekerSkills(this.props.auth.user.subject);
  }

  deleteSkills = e => {
    e.preventDefault();
    alert("Are you sure you want to delete your skills?");
    this.props.deleteSeekerSkills(this.props.auth.user.subject);
  };

  render() {
    console.log(this.props.seeker.seekerProfile.skills);
    if (this.props.seeker.seekerProfile.skills.length === 0) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <h2>View Skills</h2>
        {/* {this.props.seeker.seekerProfile.skills.map(skill => {
          return (
            <div key={skill.id}>
              <p>{skill.seekerSkill}</p>
            </div>
          );
        })} */}
        <button onClick={this.deleteSkills}>Delete Skills</button>
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
  { getSeekerSkills, deleteSeekerSkills }
)(ViewExperience);

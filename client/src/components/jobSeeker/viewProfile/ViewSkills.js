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
    return (
      <div>
        <h2>View Skills</h2>
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

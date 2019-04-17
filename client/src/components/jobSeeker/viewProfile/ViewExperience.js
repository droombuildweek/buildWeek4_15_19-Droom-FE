import React, { Component } from "react";
import { connect } from "react-redux";
import { getSeekerExperience, deleteSeekerExperience } from "../../../actions";

class ViewExperience extends Component {
  componentDidMount() {
    this.props.getSeekerExperience(this.props.auth.user.subject);
  }

  deleteExperience = e => {
    e.preventDefault();
    alert("Are you sure you want to delete your previous experience?");
    this.props.deleteSeekerExperience(this.props.auth.user.subject);
  };

  render() {
    return (
      <div>
        <h2>View Previous Experience</h2>
        <button onClick={this.deleteExperience}>
          Delete Previous Experience
        </button>
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
  { getSeekerExperience, deleteSeekerExperience }
)(ViewExperience);

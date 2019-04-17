import React, { Component } from "react";
import { connect } from "react-redux";
import { getSeekerEducation, deleteSeekerEducation } from "../../../actions";

class ViewExperience extends Component {
  componentDidMount() {
    this.props.getSeekerEducation(this.props.auth.user.subject);
  }

  deleteEducation = e => {
    e.preventDefault();
    alert("Are you sure you want to delete your education?");
    this.props.deleteSeekerEducation(this.props.auth.user.subject);
  };

  render() {
    return (
      <div>
        <h2>View Education</h2>
        <button onClick={this.deleteExperience}>Delete Education</button>
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
  { getSeekerEducation, deleteSeekerEducation }
)(ViewExperience);

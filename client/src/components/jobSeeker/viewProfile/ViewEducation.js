import React, { Component } from "react";
import { connect } from "react-redux";
import { getSeekerEducation, deleteSeekerEducation } from "../../../actions";
import _ from "lodash";

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
    if (_.isEmpty(this.props.seeker.seekerProfile.education)) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <h2>View Education</h2>
        {this.props.seeker.seekerProfile.education.map(education => {
          return (
            <div key={education.id}>
              <p>{education.eduSchool}</p>
              <p>{education.eduCredential}</p>
              <p>{education.eduDescription}</p>
              <p>{education.eduStart}</p>
              <p>{education.eduEnd}</p>
            </div>
          );
        })}
        <button onClick={this.deleteEducation}>Delete Education</button>
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

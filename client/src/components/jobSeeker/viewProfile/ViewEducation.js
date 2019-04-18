import React, { Component } from "react";
import { connect } from "react-redux";
import { getSeekerEducation, deleteSeekerEducation } from "../../../actions";
import _ from "lodash";

class ViewExperience extends Component {
  componentDidMount() {
    this.props.getSeekerEducation(this.props.auth.user.subject);
  }

  deleteEducation = id => {
    alert("Are you sure you want to delete your education?");
    this.props.deleteSeekerEducation(id);
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
              <button onClick={e => this.deleteEducation(education.id)}>
                Delete Education
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
  { getSeekerEducation, deleteSeekerEducation }
)(ViewExperience);

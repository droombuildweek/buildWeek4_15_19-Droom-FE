import React, { Component } from "react";
import { connect } from "react-redux";
import { getSeekerExperience, deleteSeekerExperience } from "../../../actions";
import _ from "lodash";

class ViewExperience extends Component {
  componentDidMount() {
    this.props.getSeekerExperience(this.props.auth.user.subject);
  }

  deleteExperience = id => {
    alert("Are you sure you want to delete your previous experience?");
    this.props.deleteSeekerExperience(id);
  };

  render() {
    if (_.isEmpty(this.props.seeker.seekerProfile.experience)) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <h2>View Previous Experience</h2>
        {this.props.seeker.seekerProfile.experience.map(experience => {
          console.log(experience.seekerId);
          return (
            <div key={experience.id}>
              <p>{experience.jobTitle}</p>
              <p>{experience.jobCompany}</p>
              <p>{experience.jobDescription}</p>
              <p>{experience.jobStart}</p>
              <p>{experience.jobEnd}</p>
              <button onClick={e => this.deleteExperience(experience.id)}>
                Delete Experience
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
  { getSeekerExperience, deleteSeekerExperience }
)(ViewExperience);

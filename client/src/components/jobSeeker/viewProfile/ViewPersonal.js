import React, { Component } from "react";
import { connect } from "react-redux";
import { getSeekerPersonal, deleteSeekerPersonal } from "../../../actions";
import _ from "lodash";

class ViewPersonal extends Component {
  componentDidMount() {
    this.props.getSeekerPersonal(this.props.auth.user.subject);
  }

  deletePersonal = e => {
    e.preventDefault();
    alert("Are you sure you want to delete your personal info?");
    this.props.deleteSeekerPersonal(this.props.auth.user.subject);
  };

  render() {
    if (_.isEmpty(this.props.seeker.seekerProfile.personal)) {
      return <p>loading</p>;
    }
    return (
      <div>
        <h2>View Personal Info</h2>
        <p>{this.props.seeker.seekerProfile.personal.firstName}</p>
        <p>{this.props.seeker.seekerProfile.personal.lastName}</p>
        <p>{this.props.seeker.seekerProfile.personal.profilePicture}</p>
        <p>{this.props.seeker.seekerProfile.personal.month}</p>
        <p>{this.props.seeker.seekerProfile.personal.day}</p>
        <p>{this.props.seeker.seekerProfile.personal.year}</p>
        <p>{this.props.seeker.seekerProfile.personal.country}</p>
        <p>{this.props.seeker.seekerProfile.personal.state}</p>
        <p>{this.props.seeker.seekerProfile.personal.city}</p>
        <p>{this.props.seeker.seekerProfile.personal.zipcode}</p>
        <button onClick={this.deletePersonal}>Delete Personal Info</button>
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
  { getSeekerPersonal, deleteSeekerPersonal }
)(ViewPersonal);

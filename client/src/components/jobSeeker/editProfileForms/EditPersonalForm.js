import React, { Component } from "react";
import { connect } from "react-redux";
import { editSeekerPersonal, getSeekerPersonal } from "../../../actions";

class EditPersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      firstName: this.props.seeker.seekerProfile.firstName,
      lastName: this.props.seeker.seekerProfile.lastName,
      profilePicture: this.props.seeker.seekerProfile.profilePicture,
      month: this.props.seeker.seekerProfile.month,
      date: this.props.seeker.seekerProfile.date,
      year: this.props.seeker.seekerProfile.year,
      country: this.props.seeker.seekerProfile.country,
      state: this.props.seeker.seekerProfile.state,
      city: this.props.seeker.seekerProfile.city,
      zipcode: this.props.seeker.seekerProfile.zipcode
    };
  }

  componentDidMount() {
    this.props.getSeekerPersonal(this.props.auth.user.subject);
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const personalData = {
      userId: this.state.userId,
      seeker: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        profilePicture: this.state.profilePicture,
        month: this.state.month,
        date: this.state.date,
        year: this.state.year,
        country: this.state.country,
        state: this.state.state,
        city: this.state.city,
        zipcode: this.state.zipcode
      }
    };
    this.props.editSeekerPersonal(personalData, this.props.auth.user.subject);
  };

  render() {
    return (
      <div>
        <form>
          <h2>Edit Personal Info</h2>
          <div>
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              placeholder="first name"
              value={this.state.firstName}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              placeholder="last name"
              value={this.state.lastName}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Profile Picture</label>
            <input
              name="profilePicture"
              type="text"
              placeholder="profile picture url"
              value={this.state.profilePicture}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Date of Birth</label>
            <input
              name="month"
              type="text"
              placeholder="month"
              value={this.state.month}
              onChange={this.inputChange}
            />
            <input
              name="date"
              type="text"
              placeholder="date"
              value={this.state.date}
              onChange={this.inputChange}
            />
            <input
              name="year"
              type="text"
              placeholder="year"
              value={this.state.year}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              name="country"
              type="text"
              placeholder="country"
              value={this.state.country}
              onChange={this.inputChange}
            />
            <input
              name="state"
              type="text"
              placeholder="state"
              value={this.state.state}
              onChange={this.inputChange}
            />
            <input
              name="city"
              type="text"
              placeholder="city"
              value={this.state.city}
              onChange={this.inputChange}
            />
            <input
              name="zipcode"
              type="text"
              placeholder="zipcode"
              value={this.state.zipcode}
              onChange={this.inputChange}
            />
          </div>
          <button type="submit" onSubmit={this.handleSubmit}>
            Submit
          </button>
        </form>
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
  { editSeekerPersonal, getSeekerPersonal }
)(EditPersonalForm);

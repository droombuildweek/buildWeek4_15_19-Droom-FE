import React, { Component } from "react";
import { connect } from "react-redux";
import { submitSeekerPersonal } from "../../../actions";
class PersonalInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      firstName: "",
      lastName: "",
      profilePicture: "",
      month: "",
      day: "",
      year: "",
      country: "",
      state: "",
      city: "",
      zipcode: ""
    };
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
        month: parseInt(this.state.month, 10),
        day: parseInt(this.state.day, 10),
        year: parseInt(this.state.year, 10),
        country: this.state.country,
        state: this.state.state,
        city: this.state.city,
        zipcode: parseInt(this.state.zipcode, 10)
      }
    };
    this.props.submitSeekerPersonal(personalData);
  };

  render() {
    return (
      <div>
        <form>
          <h2>Personal Info</h2>
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
              type="number"
              placeholder="month"
              value={this.state.month}
              onChange={this.inputChange}
            />
            <input
              name="day"
              type="number"
              placeholder="day"
              value={this.state.day}
              onChange={this.inputChange}
            />
            <input
              name="year"
              type="number"
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
              type="number"
              placeholder="zipcode"
              value={this.state.zipcode}
              onChange={this.inputChange}
            />
          </div>
          <button type="submit" onClick={this.handleSubmit}>
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
  { submitSeekerPersonal }
)(PersonalInfoForm);

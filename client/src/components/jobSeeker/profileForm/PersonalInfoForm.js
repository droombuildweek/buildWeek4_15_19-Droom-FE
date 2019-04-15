import React, { Component } from "react";
import { connect } from "react-redux";
class PersonalInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      profilePicture: "",
      dob: {
        month: "",
        date: "",
        year: ""
      },
      location: {
        country: "",
        state: "",
        city: "",
        zipcode: ""
      }
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
  };

  render() {
    return (
      <form>
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
            value={this.state.dob.month}
            onChange={this.inputChange}
          />
          <input
            name="date"
            type="text"
            placeholder="date"
            value={this.state.dob.date}
            onChange={this.inputChange}
          />
          <input
            name="year"
            type="text"
            placeholder="year"
            value={this.state.dob.year}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            name="country"
            type="text"
            placeholder="country"
            value={this.state.location.country}
            onChange={this.inputChange}
          />
          <input
            name="state"
            type="text"
            placeholder="state"
            value={this.state.location.state}
            onChange={this.inputChange}
          />
          <input
            name="city"
            type="text"
            placeholder="city"
            value={this.state.location.city}
            onChange={this.inputChange}
          />
          <input
            name="zipcode"
            type="text"
            placeholder="zipcode"
            value={this.state.location.zipcode}
            onChange={this.inputChange}
          />
        </div>
        <button type="submit" onSubmit={this.handleSubmit}>
          Sign Up
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.jobSeekerProfile
});

export default connect(
  mapStateToProps,
  null
)(PersonalInfoForm);

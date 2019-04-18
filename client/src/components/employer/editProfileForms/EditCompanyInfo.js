import React, { Component } from "react";
import { connect } from "react-redux";
import {
  editCompanyInfo,
  getEmployerProfiles,
  getEmployerProfile
} from "../../../actions";
import _ from "lodash";

class EditCompanyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      companyName: "",
      companyPicture: "",
      companyDescription: "",
      country: "",
      state: "",
      city: "",
      zipcode: ""
      // userId: this.props.auth.user.subject,
      // companyName: this.props.employer.employerProfile.companies.companyName,
      // companyPicture: this.props.employer.employerProfile.companies
      //   .companyPicture,
      // companyDescription: this.props.employer.employerProfile.companies
      //   .companyDescription,
      // country: this.props.employer.employerProfile.companies.country,
      // state: this.props.employer.employerProfile.companies.state,
      // city: this.props.employer.employerProfile.companies.city,
      // zipcode: this.props.employer.employerProfile.companies.zipcode
    };
  }

  componentDidMount() {
    this.props.getEmployerProfile(this.props.auth.user.subject);
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const companyData = {
      userId: this.state.userId,
      companyName: this.state.companyName,
      companyPicture: this.state.companyPicture,
      companyDescription: this.state.companyDescription,
      country: this.state.country,
      state: this.state.state,
      city: this.state.city,
      zipcode: this.state.zipcode
    };

    this.props.editCompanyInfo(
      companyData,
      this.props.employer.employerProfile.companies.id
    );
  };

  render() {
    if (_.isEmpty(this.props.employer.employerProfile)) {
      return <p>loading</p>;
    }
    return (
      <div>
        <form>
          <h2>Edit Company Info</h2>
          <p>{this.props.employer.employerProfile.companies.companyName}</p>
          <p>{this.props.employer.employerProfile.companies.companyPicture}</p>
          <p>
            {this.props.employer.employerProfile.companies.companyDescription}
          </p>
          <p>{this.props.employer.employerProfile.companies.country}</p>
          <p>{this.props.employer.employerProfile.companies.state}</p>
          <p>{this.props.employer.employerProfile.companies.city}</p>
          <p>{this.props.employer.employerProfile.companies.zipcode}</p>
          <div>
            <label>Company Name</label>
            <input
              name="companyName"
              type="text"
              placeholder="edit company name"
              value={this.state.companyName}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Company Picture</label>
            <input
              name="companyPicture"
              type="text"
              placeholder="edit company picture url"
              value={this.state.companyPicture}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Company Description</label>
            <input
              name="companyDescription"
              type="text"
              placeholder="edit company description"
              value={this.state.companyDescription}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              name="country"
              type="text"
              placeholder="edit country"
              value={this.state.country}
              onChange={this.inputChange}
            />
            <input
              name="state"
              type="text"
              placeholder="edit state"
              value={this.state.state}
              onChange={this.inputChange}
            />
            <input
              name="city"
              type="text"
              placeholder="edit city"
              value={this.state.city}
              onChange={this.inputChange}
            />
            <input
              name="zipcode"
              type="text"
              placeholder="edit zipcode"
              value={this.state.zipcode}
              onChange={this.inputChange}
            />
          </div>
          <button onClick={this.handleSubmit}>Submit Edit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employer: state.employer,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { editCompanyInfo, getEmployerProfiles, getEmployerProfile }
)(EditCompanyInfo);

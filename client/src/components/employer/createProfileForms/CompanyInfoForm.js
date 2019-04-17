import React, { Component } from "react";
import { connect } from "react-redux";
import { submitCompanyInfo } from "../../../actions";

class CompanyInfoForm extends Component {
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
    this.props.submitCompanyInfo(companyData);
  };

  render() {
    return (
      <div>
        <form>
          <h2>Company Info</h2>
          <div>
            <label>Company Name</label>
            <input
              name="companyName"
              type="text"
              placeholder="company name"
              value={this.state.companyName}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Company Picture</label>
            <input
              name="companyPicture"
              type="text"
              placeholder="company picture url"
              value={this.state.companyPicture}
              onChange={this.inputChange}
            />
          </div>
          <div>
            <label>Company Description</label>
            <input
              name="companyDescription"
              type="text"
              placeholder="company description"
              value={this.state.companyDescription}
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
  employer: state.employer,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { submitCompanyInfo }
)(CompanyInfoForm);

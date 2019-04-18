import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEmployerCompany, getEmployerProfile } from "../../../actions";
import _ from "lodash";

class ViewCompany extends Component {
  componentDidMount() {
    this.props.getEmployerProfile(this.props.auth.user.subject);
  }

  deleteCompany = e => {
    e.preventDefault();
    alert("Are you sure you want to delete the company?");
    this.props.deleteEmployerCompany(this.props.auth.user.subject);
  };

  render() {
    if (_.isEmpty(this.props.employer.employerProfile)) {
      return <p>loading</p>;
    }
    return (
      <div>
        <h2>View Company</h2>
        <p>{this.props.employer.employerProfile.companies.companyName}</p>
        <p>{this.props.employer.employerProfile.companies.compnayPicture}</p>
        <p>
          {this.props.employer.employerProfile.companies.companyDescription}
        </p>
        <p>{this.props.employer.employerProfile.companies.country}</p>
        <p>{this.props.employer.employerProfile.companies.state}</p>
        <p>{this.props.employer.employerProfile.companies.city}</p>
        <p>{this.props.employer.employerProfile.companies.zipcode}</p>
        <button onClick={this.deleteCompany}>Delete Company</button>
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
  { deleteEmployerCompany, getEmployerProfile }
)(ViewCompany);

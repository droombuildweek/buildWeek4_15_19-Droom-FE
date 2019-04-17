import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEmployerCompany, getEmployerProfile } from "../../../actions";

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
    return (
      <div>
        <h2>View Company</h2>
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

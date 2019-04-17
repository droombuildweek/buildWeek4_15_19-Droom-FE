import React, { Component } from "react";

class ViewCompany extends Component {
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

export default ViewCompany;

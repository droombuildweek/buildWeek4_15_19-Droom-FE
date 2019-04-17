import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployerProfiles, getEmployerProfile } from "../../actions";

class Employers extends Component {
  componentDidMount() {
    this.props.getEmployerProfiles();
  }

  render() {
    console.log(this.props);
    if (this.props.employer.employerProfiles.length === 0) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <h2>Employers</h2>
        {this.props.employer.employerProfiles.companies.map(company => {
          return (
            <div key={company.id}>
              <h3>{company.companyName}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employer: state.employer
});

export default connect(
  mapStateToProps,
  { getEmployerProfiles, getEmployerProfile }
)(Employers);

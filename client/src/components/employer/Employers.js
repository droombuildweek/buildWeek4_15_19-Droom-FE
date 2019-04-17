import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployerProfiles, getEmployerProfile } from "../../actions";

class Employers extends Component {
  componentDidMount() {
    this.props.getEmployerProfiles();
  }

  render() {
    return (
      <div>
        <h2>Employers</h2>
        {/* {this.props.employer.employerProfiles.map(profile => {
          return (
            <div>
              <h3>Company</h3>
            </div>
          );
        })} */}
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

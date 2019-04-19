import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployerMatched, getEmployerJob } from "../../../actions";
import _ from "lodash";

class EmployerMatches extends Component {
  componentDidMount() {
    this.props.getEmployerJob(this.props.auth.user.subject);
  }

  viewMatches = id => {
    this.props.getEmployerMatched(this.props.employer.employerProfile.jobs.id);
  };

  render() {
    if (_.isEmpty(this.props.matches.employerMatched)) {
      return (
        <div>
          <p>Please hit button.</p>
          <button onClick={e => this.viewMatches()}>Refresh Matches</button>
        </div>
      );
    }
    return (
      <div>
        <h2>Employer Matches</h2>
        <button onClick={e => this.viewMatches()}>Refresh Matches</button>
        {this.props.matches.employerMatched.map(match => {
          return (
            <div key={match.seekerId}>
              <p>
                {match.firstName} {match.lastName}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  matches: state.matches,
  employer: state.employer
});

export default connect(
  mapStateToProps,
  { getEmployerMatched, getEmployerJob }
)(EmployerMatches);

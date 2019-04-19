import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployerMatched } from "../../../actions";
import _ from "lodash";

class EmployerMatches extends Component {
  viewMatches = id => {
    this.props.getEmployerMatched();
  };

  render() {
    if (_.isEmpty(this.props.matches.employerMatches)) {
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
              <p>{match.seekerId}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  matches: state.matches
});

export default connect(
  mapStateToProps,
  { getEmployerMatched }
)(EmployerMatches);

import React, { Component } from "react";
import { connect } from "react-redux";
import { getSeekerMatched } from "../../../actions";
import _ from "lodash";

class SeekerMatches extends Component {
  componentDidMount() {
    this.props.getSeekerMatched(this.props.auth.user.subject);
  }

  render() {
    if (_.isEmpty(this.props.matches.seekerMatched)) {
      return <p>No Matches</p>;
    }
    return (
      <div>
        <h2>Seeker Matches</h2>
        {this.props.matches.seekerMatched.map(match => {
          return (
            <div key={match.id}>
              <p>{match.jobName}</p>
              <p>{match.jobDescription}</p>
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
  { getSeekerMatched }
)(SeekerMatches);

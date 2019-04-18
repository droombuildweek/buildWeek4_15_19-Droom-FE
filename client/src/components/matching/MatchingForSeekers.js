import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { getSeekerMatches } from "../../actions";

class MatchingForSeekers extends Component {
  componentDidMount() {
    this.props.getSeekerMatches(this.props.auth.user.subject);
  }

  addMatch = e => {};

  render() {
    const settings = {
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    if (this.props.matches.seekerMatches.length === 0) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <h2>Job Seeker Matching</h2>
        <Slider {...settings}>
          {this.props.matches.seekerMatches.map(match => {
            return (
              <div key={match.id}>
                <h3>{match.jobName}</h3>
                <p>{match.jobDescription}</p>
                <button onClick={this.addMatch}>Match</button>
              </div>
            );
          })}
        </Slider>
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
  { getSeekerMatches }
)(MatchingForSeekers);

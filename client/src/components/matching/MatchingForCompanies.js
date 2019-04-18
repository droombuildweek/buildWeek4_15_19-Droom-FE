import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { getEmployerMatches } from "../../actions";

class MatchingForCompanies extends Component {
  componentDidMount() {
    this.props.getEmployerMatches(this.props.auth.user.subject);
  }

  addMatch = e => {};

  render() {
    const settings = {
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    if (this.props.matches.employerMatches.length === 0) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <h2>Employer Matching</h2>
        <Slider {...settings}>
          {this.props.matches.employerMatches.map(match => {
            return (
              <div key={match.seekerId}>
                {/* <h3>{match.profile.firstName}</h3> */}
                {match.skills.map(skill => {
                  return <p>{skill}</p>;
                })}
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
  {
    getEmployerMatches
  }
)(MatchingForCompanies);

import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { getSeekerMatches, addSeekerPick } from "../../actions";
import styled from "styled-components";

const Container = styled.div`
  color: #6891f9;
  background: white;
  margin: 0 auto;
  text-align: center;
  width: 600px;

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    color: white;
    background-color: #6891f9;
    padding: 10px 20px;
    border-radius: 20px;

    &:hover {
      color: black;
    }
  }
`;

const Name = styled.div`
  text-align: center;
`;

const Job = styled.div`
  border: 1px solid #6891f9;
  padding: 20px;
  text-align: left;
  border-radius: 20px;
`;

class MatchingForSeekers extends Component {
  componentDidMount() {
    this.props.getSeekerMatches(this.props.auth.user.subject);
  }

  addMatch = id => {
    const match = {
      jobId: id
    };
    this.props.addSeekerPick(this.props.auth.user.subject, match.jobId);
  };

  render() {
    const settings = {
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    if (this.props.matches.seekerMatches.length === 0) {
      return <p>Loading</p>;
    }
    return (
      <Container>
        <h2>Job Seeker Matching</h2>
        <p>Click on carousel and use arrows or swipe to navigate.</p>
        <Slider {...settings}>
          {this.props.matches.seekerMatches.map(match => {
            return (
              <div key={match.id}>
                <Job>
                  <Name>
                    <h3>{match.jobName}</h3>
                    <button onClick={e => this.addMatch(match.id)}>
                      Match
                    </button>
                  </Name>
                  <h4>Description</h4>
                  <p>{match.jobDescription}</p>
                  <h4>Required Experience</h4>
                  <p>{match.jobExperienceRequired}</p>
                  <h4>Preferred Experience</h4>
                  <p>{match.jobExperiencePreferred}</p>
                  <h4>Apply By</h4>
                  <p>{match.jobApplyBy}</p>
                </Job>
              </div>
            );
          })}
        </Slider>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  matches: state.matches
});

export default connect(
  mapStateToProps,
  { getSeekerMatches, addSeekerPick }
)(MatchingForSeekers);

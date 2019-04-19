import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { getEmployerMatches, addEmployerPick } from "../../actions";
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
  border-radius: 20px;
`;

class MatchingForCompanies extends Component {
  componentDidMount() {
    this.props.getEmployerMatches(this.props.auth.user.subject);
  }

  addMatch = (jobId, seekerId) => {
    this.props.addEmployerPick(jobId, seekerId);
  };

  submitMatches = e => {
    e.preventDefault();
    this.props.getEmployerPicks(this.state.matches);
  };

  render() {
    const settings = {
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    if (this.props.matches.employerMatches.length === 0) {
      return <p>Loading</p>;
    }
    return (
      <Container>
        <h2>Employer Matching</h2>
        <Slider {...settings}>
          {this.props.matches.employerMatches.map(match => {
            return (
              <div key={match.seekerId}>
                <Job>
                  <Name>
                    <button
                      onClick={e => this.addMatch(match.jobId, match.seekerId)}
                    >
                      Match
                    </button>
                    <h3>Skills</h3>
                  </Name>
                  {match.skills.map(skill => {
                    return <p>{skill}</p>;
                  })}
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
  {
    getEmployerMatches,
    addEmployerPick
  }
)(MatchingForCompanies);

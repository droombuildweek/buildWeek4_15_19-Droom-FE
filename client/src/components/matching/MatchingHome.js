import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkComponent = styled(Link)`
  color: #6891f9;
  text-decoration: none;

  &:hover {
    color: black;
  }

  a {
    color: white;

    :hover {
      color: #222;
    }
  }
`;

const Container = styled.div`
  color: #6891f9;
  background: white;
  text-align: center;

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
`;

class MatchingHome extends Component {
  render() {
    return (
      <Container>
        <h2>Matching Home</h2>
        <LinkComponent
          to="/matching/jobSeekers"
          style={{ textDecoration: "none" }}
        >
          <p className="link">Matching for Job Seekers</p>
        </LinkComponent>
        <LinkComponent
          to="/matching/employers"
          style={{ textDecoration: "none" }}
        >
          <p className="link">Matching for Employers</p>
        </LinkComponent>
      </Container>
    );
  }
}

export default MatchingHome;

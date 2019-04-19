import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";
import styled from "styled-components";

// import "./Header.scss";

const HeaderNav = styled.nav`
  background: #6891f9;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Logo = styled.div`
  color: white;
  width: 100px;
  text-align: center;
`;
const HeaderLink = styled(Link)`
  color: white;
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
const NavLinkCluster = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  align-items: center;
  font-weight: bold;
`;

class Header extends Component {
  render() {
    let logout;
    let login;
    let signUp;
    let matching;
    if (this.props.auth.isAuthenticated) {
      logout = (
        <HeaderLink to="/login" onClick={this.props.logoutUser}>
          Logout
        </HeaderLink>
      );
      matching = (
        <HeaderLink to="/matching/jobSeekers" style={{ textDecoration: "none" }}>
          Matching
        </HeaderLink>
      );
    } else {
      login = (
        <HeaderLink to="/login" style={{ textDecoration: "none" }}>
          Login
        </HeaderLink>
      );
      signUp = (
        <HeaderLink to="/register" style={{ textDecoration: "none" }}>
          Sign Up
        </HeaderLink>
      );
    }
    return (
      <HeaderNav>
          <Logo>
            <h1>Droom</h1>
          </Logo>
          <NavLinkCluster>
            <HeaderLink to="/jobSeeker/createProfile/personalInfo">
                Dashboard
            </HeaderLink>
              {matching}
            {/* <HeaderLink to="/employers">
              Employers
            </HeaderLink> */}
            {/* <HeaderLink to="/jobs">
              Jobs
            </HeaderLink> */}
          {logout}
          {login}
          {signUp}
        </NavLinkCluster>
      </HeaderNav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);

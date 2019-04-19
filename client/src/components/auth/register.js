import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions";
import { withRouter } from "react-router-dom";
import styled from 'styled-components';

// import "./Register.scss";

const LoginForm = styled.form`
  /* position: relative; */
  /* top: 10vh; */
  /* background-color: lightgray; */
  /* border: 1px solid red; */
  margin-top: 80px;
  width: 50vw;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid green; */
`
const LoginPageContainer = styled.div`
  display: flex;
  justify-content:space-between;
  /* border: 1px solid red; */
  height: 100vh;
`
// const LogingImageBG = styled.div`
//   background-image: url("https://res.cloudinary.com/dmdvv8dzx/image/upload/v1555644420/BackgroundVector_register_bqkhhp.png");
//   position: relative;
//   height: 100px;
//   width: 100px;
//   /* left: -100px; */
//   /* background-color: #e8ecfb; */
// `
const LoginImage = styled.img`
  position: relative;
  /* top: 32.5vh;
  left: 15vw; */
  margin-left: 150px;
  margin-top: 100px;
  width: 800px;
  height: 400px;
  z-index: -10;
  /* border: 1px solid blue; */
`

const LoginInput = styled.input`
  height: 40px;
  width: 350px;
  padding: 0 10px;
  margin: 15px 0;
  background-color: #eceff6;
`
const LoginButton = styled.button`
  background-color: #6891f9;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  margin-top: 10px;

  :hover{
    background-color: #3a6ff8; 
  }
`
const LoginTitle = styled.text`
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: normal;
  letter-spacing: -0.5px;
  margin-bottom: 50px;

  color: rgba(19, 20, 24, 0.87);
`



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: ""
    };
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(userData, this.props.history);
  };

  render() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <LoginPageContainer>
          {/* <LogingImageBG> */}
            <LoginImage src="https://res.cloudinary.com/dmdvv8dzx/image/upload/v1555644420/Illustration_register_cergkm.png" alt='signup background' />
          {/* </LogingImageBG> */}
          <LoginForm>
            <LoginTitle>Create a New Account</LoginTitle>
            <div className="form-group">
              {/* <label>Email</label> */}
              <LoginInput
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.inputChange}
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="">Password</label> */}
              <LoginInput
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.inputChange}
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="">Confirm Password</label> */}
              <LoginInput
                name="password2"
                type="password"
                placeholder="Confirm Password"
                value={this.state.password2}
                onChange={this.inputChange}
              />
            </div>
            <LoginButton type="submit" onClick={this.handleSubmit}>
              Sign Up
            </LoginButton>
            </LoginForm>
          </LoginPageContainer>
      );
    }
    return (
      // <div>
      //   <p>Registered and logged in!</p>
      //   <a className="link" href="/dashboard">
      //     Go To Dashboard
      //   </a>
      //   <a className="link" href="/matching">
      //     Start Matching
      //   </a>
      // </div>
      <div>
        {window.location.href = '/jobSeeker/createProfile/personalInfo'}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

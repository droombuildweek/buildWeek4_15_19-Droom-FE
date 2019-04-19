import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { withRouter } from "react-router-dom";
import styled from 'styled-components';

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
const LogingImageBG = styled.div`
  background-image: url("https://res.cloudinary.com/dmdvv8dzx/image/upload/v1555644420/BackgroundVector_register_bqkhhp.png");
  position: relative;
  height: 100px;
  width: 100px;
  /* left: -100px; */
  /* background-color: #e8ecfb; */
`
const LoginImage = styled.img`
  position: relative;
  /* top: 32.5vh;
  left: 15vw; */
  margin-left: 150px;
  margin-top: 50px;
  width: 700px;
  height: 500px;
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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

    this.props.loginUser(userData, this.props.history);
    this.props.history.push("/dashboard");
  };

  render() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <LoginPageContainer>
          {/* <LogingImageBG> */}
            <LoginImage src="https://res.cloudinary.com/dmdvv8dzx/image/upload/v1555644420/undraw_authentication_fsn5_login_c3fvmk.png" alt='login background' />
          {/* </LogingImageBG> */}
          <LoginForm>
            <LoginTitle>Welcome back!</LoginTitle>
              <div className="form-group">
                {/* <label htmlFor="">Email</label> */}
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
              <LoginButton type="submit" onClick={this.handleSubmit}>
                Login
              </LoginButton>
            </LoginForm>
        </LoginPageContainer>
      );
    }
    return (
      <div>
        <p>Logged in!</p>
        <a className="link" href="/dashboard">
          Go To Dashboard
        </a>
        <a className="link" href="/matching">
          Start Matching
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));

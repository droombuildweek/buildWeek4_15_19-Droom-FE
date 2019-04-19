import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { withRouter } from "react-router-dom";
import styled from 'styled-components';

const LoginForm = styled.form`
  position: relative;
  top: 20vh;
  /* background-color: lightgray; */
  /* border: 1px solid red; */
  width: 50vw;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LoginPageContainer = styled.div`
  display: flex;
  justify-content:space-between;
`
const LoginImage = styled.img`
  position: relative;
  top: 20vh;
  left: 20vw;
`
const LogingImageBG = styled.div`
  background-image: url("client\src\components\auth\images\BackgroundVector.png");
`
const LoginInput = styled.input`
  height: 40px;
  width: 250px;
  padding: 0 10px;
  background-color: #eceff6;
`
const LoginButton = styled.button`
  background-color: #6891f9;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  color: white;
  font-weight: bold;

  :hover{
    background-color: #3a6ff8; 
  }
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
          <LogingImageBG>
            <LoginImage src="client\src\components\auth\images\undraw_authentication_fsn5.png" alt='login background' />
          </LogingImageBG>
          <LoginForm>
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

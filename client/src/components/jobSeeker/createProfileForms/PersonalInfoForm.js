import React, { Component } from "react";
import { connect } from "react-redux";
import { submitSeekerPersonal } from "../../../actions";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const DashboardSetupContainer = styled.div`
  background-color: #6891F9;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
const DashboardTitleContainer = styled.div`
  width: 70vw;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const TitleText = styled.text`
  color: white;
  font-size: 34px;
  margin-bottom: 5px;
  font-weight: 200;
`
const SubTitleText = styled.text`
  color: lightgrey;
  letter-spacing: 1.5px;
  font-size: 16px;
`
const DashboardBG = styled.div`
  background-color: #6891F9;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 30px;
`
const DashboardFormContainer = styled.div`
  background-color: rgba(252, 252, 254, 0.54);
  width: 70vw;
  min-width: 800px;
  height: 530px;
`
const DashboardCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`
const InfoLinkContainer = styled.div`
  width: 30vw;
  min-width: 400px;
  max-width: 800px;
  margin: 35px auto;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`
const InfoLink = styled(Link)`
  color: #222;
  text-decoration: none;

  :hover {
    color: black;
    text-decoration: underline;
  }
`
const DashboardInputName = styled.input`
  height: 40px;
  width: 330px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputMonth = styled.input`
  height: 40px;
  width: 180px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputDay = styled.input`
  height: 40px;
  width: 190px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputYear = styled.input`
  height: 40px;
  width: 250px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputCountry = styled.input`
  height: 40px;
  width: 250px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputState = styled.input`
  height: 40px;
  width: 120px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputCity = styled.input`
  height: 40px;
  width: 250px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputZip = styled.input`
  height: 40px;
  width: 600px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputPicture = styled.input`
  height: 40px;
  width: 600px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardButtonNext = styled.button`
  width: 120px;
  height: 40px;
  background-color: #e5c01b;
  border-radius: 20px;
  font-weight: bold;

  :hover{
    background-color: #ecd362;
  }
`
const DashboardButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const DashboardInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`




class PersonalInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      firstName: "",
      lastName: "",
      profilePicture: "",
      month: "",
      day: "",
      year: "",
      country: "",
      state: "",
      city: "",
      zipcode: ""
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
    const personalData = {
      userId: this.state.userId,
      seeker: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        profilePicture: this.state.profilePicture,
        month: parseInt(this.state.month, 10),
        day: parseInt(this.state.day, 10),
        year: parseInt(this.state.year, 10),
        country: this.state.country,
        state: this.state.state,
        city: this.state.city,
        zipcode: parseInt(this.state.zipcode, 10)
      }
    };
    this.props.submitSeekerPersonal(personalData);
  };

  render() {
    return (
      <DashboardSetupContainer>
        <DashboardTitleContainer>
          <TitleText>Almost done!</TitleText>
          <SubTitleText>We just need some additional information to set up your profile.</SubTitleText>
        </DashboardTitleContainer>
      <DashboardBG>
        <DashboardFormContainer>
          <InfoLinkContainer>
            <InfoLink to='/jobSeeker/createProfile/personalInfo'>Personal Information</InfoLink>
            <InfoLink to='/jobSeeker/createProfile/experience'>Experience</InfoLink>
            <InfoLink to='/jobSeeker/createProfile/education'>Education</InfoLink>
          </InfoLinkContainer>
            <DashboardCenterContainer>
              <DashboardInputContainer>
                <DashboardInputPicture
                  name="profilePicture"
                  type="text"
                  placeholder="Profile Picture url"
                  value={this.state.profilePicture}
                  onChange={this.inputChange}
                />
              </DashboardInputContainer>
              <DashboardInputContainer>
                <DashboardInputName
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.inputChange}
                />
                <DashboardInputName
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.inputChange}
                />
              </DashboardInputContainer>
            <DashboardInputContainer>
              <DashboardInputMonth
                name="month"
                type="number"
                placeholder="Month"
                value={this.state.month}
                onChange={this.inputChange}
              />
              <DashboardInputDay
                name="day"
                type="number"
                placeholder="Day"
                value={this.state.day}
                onChange={this.inputChange}
              />
              <DashboardInputYear
                name="year"
                type="number"
                placeholder="Year"
                value={this.state.year}
                onChange={this.inputChange}
              />
            </DashboardInputContainer>
            <DashboardInputContainer>
              <DashboardInputCountry
                name="country"
                type="text"
                placeholder="Country"
                value={this.state.country}
                onChange={this.inputChange}
              />
              <DashboardInputState
                name="state"
                type="text"
                placeholder="State"
                value={this.state.state}
                onChange={this.inputChange}
              />
              <DashboardInputCity
                name="city"
                type="text"
                placeholder="City"
                value={this.state.city}
                onChange={this.inputChange}
              />
              </DashboardInputContainer>
              <DashboardInputZip
                name="zipcode"
                type="number"
                placeholder="Zipcode"
                value={this.state.zipcode}
                onChange={this.inputChange}
              />
            </DashboardCenterContainer>
            <DashboardButtonContainer>
              <DashboardButtonNext type="submit" onClick={this.handleSubmit}>
                Submit
              </DashboardButtonNext>
            </DashboardButtonContainer>
        </DashboardFormContainer>
      </DashboardBG>
      </DashboardSetupContainer>
    );
  }
}

const mapStateToProps = state => ({
  seeker: state.seeker,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { submitSeekerPersonal }
)(PersonalInfoForm);

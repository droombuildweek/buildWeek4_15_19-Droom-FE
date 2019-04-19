import React, { Component } from "react";
import { connect } from "react-redux";
import { editSeekerPersonal, getSeekerPersonal } from "../../../actions";
import _ from "lodash";
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
  width: 50vw;
  min-width: 500px;
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
const InfoLinkUser = styled(Link)`
  color: #e5c01b;
  text-decoration: none;
  margin-left: 30px;
  font-weight: bold;
  font-size: 22px;

  :hover {
    color: black;
    text-decoration: underline;
  }
`
const DashboardSubTitle = styled.div`
  width: 600px;
  font-weight: bold;
  margin-bottom: 10px;
  margin: 0 auto;
  /* border: 1px solid red; */
  display: flex;
  justify-content: flex-start;
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
const DashboardActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;
  background-color: #4c6ab6;
  /* border: 1px solid red; */
`
const DACBG = styled.div`
  background-color: #4c6ab6;
  width: 100vw;
  margin-bottom: 20px;
`



class EditPersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      firstName: this.props.seeker.seekerProfile.personal.firstName,
      lastName: this.props.seeker.seekerProfile.personal.lastName,
      profilePicture: this.props.seeker.seekerProfile.personal.profilePicture,
      month: this.props.seeker.seekerProfile.personal.month,
      day: this.props.seeker.seekerProfile.personal.day,
      year: this.props.seeker.seekerProfile.personal.year,
      country: this.props.seeker.seekerProfile.personal.country,
      state: this.props.seeker.seekerProfile.personal.state,
      city: this.props.seeker.seekerProfile.personal.city,
      zipcode: this.props.seeker.seekerProfile.personal.zipcode
    };
  }

  componentDidMount() {
    this.props.getSeekerPersonal(this.props.auth.user.subject);
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      profilePicture: this.state.profilePicture,
      month: this.state.month,
      day: this.state.day,
      year: this.state.year,
      country: this.state.country,
      state: this.state.state,
      city: this.state.city,
      zipcode: this.state.zipcode
    };
    this.props.editSeekerPersonal(personalData, this.props.auth.user.subject);
  };

  render() {
    if (_.isEmpty(this.props.seeker.seekerProfile.personal)) {
      return <p>loading</p>;
    }
    return (
      <DashboardSetupContainer>
        <DACBG>
        <DashboardActionContainer>
          <div>
          <InfoLinkUser to='/jobSeeker/createProfile/personalInfo' >Job Seaker</InfoLinkUser>
          <InfoLinkUser to='/employer/createProfile/companyInfo' >Employer</InfoLinkUser>
          </div>
          <div>
          <InfoLinkUser to='/jobSeeker/personalInfo' >View</InfoLinkUser>
          <InfoLinkUser to='/jobSeeker/editProfile/editPersonal' >Edit</InfoLinkUser>
          <InfoLinkUser to='/jobSeeker/createProfile/personalInfo' >Create</InfoLinkUser>
          </div>
        </DashboardActionContainer>
        </DACBG>
        <DashboardTitleContainer>
        <TitleText>Edit User Profile</TitleText>
          {/* <TitleText>Almost done!</TitleText>
          <SubTitleText>We just need some additional information to set up your profile.</SubTitleText> */}
        </DashboardTitleContainer>
        <DashboardBG>
        <DashboardFormContainer>
        <InfoLinkContainer>
              <InfoLink to='/jobSeeker/editProfile/editPersonal'>Personal Information</InfoLink>
              <InfoLink to='/jobSeeker/createProfile/experience'>Experience</InfoLink>
              <InfoLink to='/jobSeeker/createProfile/education'>Education</InfoLink>
              <InfoLink to='/jobSeeker/createProfile/skills'>Skills</InfoLink>
            </InfoLinkContainer>
            <DashboardSubTitle>
              Personal Information
              </DashboardSubTitle>
              <DashboardCenterContainer>
              <DashboardInputContainer>
              <DashboardInputPicture
              name="profilePicture"
              type="text"
              placeholder="profile picture url"
              value={this.state.profilePicture}
              onChange={this.inputChange}
            />
            </DashboardInputContainer>
            <DashboardInputContainer>
            <DashboardInputName
              name="firstName"
              type="text"
              placeholder="first name"
              value={this.state.firstName}
              onChange={this.inputChange}
            />
            <DashboardInputName
              name="lastName"
              type="text"
              placeholder="last name"
              value={this.state.lastName}
              onChange={this.inputChange}
            />
            </DashboardInputContainer>
            <DashboardInputContainer>
            <DashboardInputMonth
              name="month"
              type="text"
              placeholder="month"
              value={this.state.month}
              onChange={this.inputChange}
            />
            <DashboardInputDay
              name="day"
              type="text"
              placeholder="day"
              value={this.state.day}
              onChange={this.inputChange}
            />
            <DashboardInputYear
              name="year"
              type="text"
              placeholder="year"
              value={this.state.year}
              onChange={this.inputChange}
            />
            </DashboardInputContainer>
            <DashboardInputContainer>
            <DashboardInputCountry
              name="country"
              type="text"
              placeholder="country"
              value={this.state.country}
              onChange={this.inputChange}
            />
            <DashboardInputState
              name="state"
              type="text"
              placeholder="state"
              value={this.state.state}
              onChange={this.inputChange}
            />
            </DashboardInputContainer>
            <DashboardInputCity
              name="city"
              type="text"
              placeholder="city"
              value={this.state.city}
              onChange={this.inputChange}
            />
            <DashboardInputZip
              name="zipcode"
              type="text"
              placeholder="zipcode"
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
  { editSeekerPersonal, getSeekerPersonal }
)(EditPersonalForm);

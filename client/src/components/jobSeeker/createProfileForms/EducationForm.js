import React, { Component } from "react";
import { connect } from "react-redux";
import { submitSeekerEducation } from "../../../actions";
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
// const SubTitleText = styled.div`
//   color: lightgrey;
//   letter-spacing: 1.5px;
//   font-size: 16px;
// `
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
const DashboardInputSchool = styled.input`
  height: 40px;
  width: 600px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputCreds = styled.input`
  height: 40px;
  width: 600px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputDescription = styled.input`
  height: 40px;
  width: 600px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputStart = styled.input`
  height: 40px;
  width: 250px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputEnd = styled.input`
  height: 40px;
  width: 250px;
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
  margin-right: 10px;

  :hover{
    background-color: #ecd362;
  }
`
const DashboardButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

// const DashboardInputContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `
const DashboardActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;
  /* border: 1px solid red; */
`
const DACBG = styled.div`
  background-color: #4c6ab6;
  width: 100vw;
  margin-bottom: 20px;
`


class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      eduSchool: "",
      eduCredential: "",
      eduDescription: "",
      eduStart: "",
      eduEnd: "",
      educations: []
    };
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addToArray = e => {
    e.preventDefault();
    const education = {
      eduSchool: this.state.eduSchool,
      eduCredential: this.state.eduCredential,
      eduDescription: this.state.eduDescription,
      eduStart: this.state.eduStart,
      eduEnd: this.state.eduEnd
    };
    this.setState({
      eduSchool: "",
      eduCredential: "",
      eduDescription: "",
      eduStart: "",
      eduEnd: ""
    });
    this.state.educations.push(education);
    console.log(this.state.educations);
  };

  handleSubmit = e => {
    e.preventDefault();
    const educationData = {
      userId: this.state.userId,
      seekerEducation: this.state.educations
    };
    this.props.submitSeekerEducation(educationData);
  };

  render() {
    return (
      <DashboardSetupContainer>
        <DACBG>
        <DashboardActionContainer>
          <div>
          <InfoLinkUser to='/jobSeeker/createProfile/personalInfo' >Job seeker</InfoLinkUser>
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
        <TitleText>Create User Profile</TitleText>
          {/* <TitleText>Almost done!</TitleText>
          <SubTitleText>We just need some additional information to set up your profile.</SubTitleText> */}
        </DashboardTitleContainer>
        <DashboardBG>
        <DashboardFormContainer>
        <InfoLinkContainer>
              <InfoLink to='/jobSeeker/createProfile/personalInfo'>Personal Information</InfoLink>
              <InfoLink to='/jobSeeker/createProfile/experience'>Experience</InfoLink>
              <InfoLink to='/jobSeeker/createProfile/education'>Education</InfoLink>
              <InfoLink to='/jobSeeker/createProfile/skills'>Skills</InfoLink>
            </InfoLinkContainer>
            <DashboardSubTitle>
              Education Background
              </DashboardSubTitle>
              <DashboardCenterContainer>
            <DashboardInputSchool
              name="eduSchool"
              type="text"
              placeholder="School"
              value={this.state.eduSchool}
              onChange={this.inputChange}
            />
            <DashboardInputCreds
              name="eduCredential"
              type="text"
              placeholder="Credential"
              value={this.state.eduCredential}
              onChange={this.inputChange}
            />
            <DashboardInputDescription
              name="eduDescription"
              type="text"
              placeholder="Description"
              value={this.state.eduDescription}
              onChange={this.inputChange}
            />
            <DashboardInputStart
              name="eduStart"
              type="text"
              placeholder="Start"
              value={this.state.eduStart}
              onChange={this.inputChange}
            />
            <DashboardInputEnd
              name="eduEnd"
              type="text"
              placeholder="End"
              value={this.state.eduEnd}
              onChange={this.inputChange}
            />
            </DashboardCenterContainer>
          <DashboardButtonContainer>
          <DashboardButtonNext onClick={this.addToArray}>Add Education</DashboardButtonNext>
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
  { submitSeekerEducation }
)(EducationForm);

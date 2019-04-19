import React, { Component } from "react";
import { connect } from "react-redux";
import { submitSeekerExperience } from "../../../actions";
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
const DashboardInputJob = styled.input`
  height: 40px;
  width: 330px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputCompany = styled.input`
  height: 40px;
  width: 180px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputDescription = styled.input`
  height: 40px;
  width: 190px;
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




class PreviousExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      jobTitle: "",
      jobCompany: "",
      jobDescription: "",
      jobStart: "",
      jobEnd: "",
      experiences: []
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
    const experience = {
      jobTitle: this.state.jobTitle,
      jobCompany: this.state.jobCompany,
      jobDescription: this.state.jobDescription,
      jobStart: this.state.jobStart,
      jobEnd: this.state.jobEnd
    };
    this.setState({
      jobTitle: "",
      jobCompany: "",
      jobDescription: "",
      jobStart: "",
      jobEnd: ""
    });
    this.state.experiences.push(experience);
  };

  handleSubmit = e => {
    e.preventDefault();
    const experienceData = {
      userId: this.state.userId,
      seekerExperience: this.state.experiences
    };
    this.props.submitSeekerExperience(experienceData);
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
            <DashboardInputJob
              name="jobTitle"
              type="text"
              placeholder="job title"
              value={this.state.jobTitle}
              onChange={this.inputChange}
            />
            <DashboardInputCompany
              name="jobCompany"
              type="text"
              placeholder="company"
              value={this.state.jobCompany}
              onChange={this.inputChange}
            />
            <DashboardInputDescription
              name="jobDescription"
              type="text"
              placeholder="job description"
              value={this.state.jobDescription}
              onChange={this.inputChange}
            />
            <DashboardInputStart
              name="jobStart"
              type="text"
              placeholder="job start"
              value={this.state.jobStart}
              onChange={this.inputChange}
            />
            <DashboardInputEnd
              name="jobEnd"
              type="text"
              placeholder="job end"
              value={this.state.jobEnd}
              onChange={this.inputChange}
            />
          <button onClick={this.addToArray}>Add Experience</button>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
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
  { submitSeekerExperience }
)(PreviousExperienceForm);

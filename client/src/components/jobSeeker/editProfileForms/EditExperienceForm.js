import React, { Component } from "react";
import { connect } from "react-redux";
import { editSeekerExperience, getSeekerExperience } from "../../../actions";
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
// const SubTitleText = styled.text`
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
  height: 660px;
`
const DashboardCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  /* border: 1px solid red; */
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
const DashboardInputJob = styled.input`
  height: 40px;
  width: 600px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`
const DashboardInputCompany = styled.input`
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
const AvailableInfoEdits = styled.div`
  width: 550px;
  margin: 0 auto;
  margin-bottom:15px;
  /* border: 1px solid red; */
`
const loadingBlue = styled.div`
  background-color:  #6891F9;
  width: 100vw;
  height: 100vh;
`


class EditExperienceForm extends Component {
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

  componentDidMount() {
    this.props.getSeekerExperience(this.props.auth.user.subject);
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = id => {
    const experienceData = {
      jobTitle: this.state.jobTitle,
      jobCompany: this.state.jobCompany,
      jobDescription: this.state.jobDescription,
      jobStart: this.state.jobStart,
      jobEnd: this.state.jobEnd
    };
    this.props.editSeekerExperience(experienceData, id);
  };

  render() {
    if (_.isEmpty(this.props.seeker.seekerProfile.experience)) {
      return <loadingBlue>loading</loadingBlue>;
    }
    return (
      <DashboardSetupContainer>
        {this.props.seeker.seekerProfile.experience.map(experience => {
          return (
            <div key={experience.id}>
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
        <TitleText>Edit User Profile</TitleText>
          {/* <TitleText>Almost done!</TitleText>
          <SubTitleText>We just need some additional information to set up your profile.</SubTitleText> */}
        </DashboardTitleContainer>
              <DashboardBG>
            <DashboardFormContainer>
            <InfoLinkContainer>
            <InfoLink to='/jobSeeker/editProfile/editPersonal'>Personal Information</InfoLink>
              <InfoLink to='/jobSeeker/editProfile/editExperience'>Experience</InfoLink>
              <InfoLink to='/jobSeeker/editProfile/editEducation'>Education</InfoLink>
              <InfoLink to='/jobSeeker/editProfile/editSkills'>Skills</InfoLink>
            </InfoLinkContainer>
            <AvailableInfoEdits>
              <p>Job - {experience.jobTitle}</p>
              <p>Company - {experience.jobCompany}</p>
              <p>Description - {experience.jobDescription}</p>
              <p>Started - {experience.jobStart}</p>
              <p>Ended - {experience.jobEnd}</p>
              </AvailableInfoEdits>
              <DashboardSubTitle>
              Edit Experience
              </DashboardSubTitle>
              <DashboardCenterContainer>
              <DashboardInputCompany
                  name="jobCompany"
                  type="text"
                  placeholder="edit company"
                  value={this.state.jobCompany}
                  onChange={this.inputChange}
                />
                <DashboardInputJob
                  name="jobTitle"
                  type="text"
                  placeholder="edit job title"
                  value={this.state.jobTitle}
                  onChange={this.inputChange}
                />
                <DashboardInputDescription
                  name="jobDescription"
                  type="text"
                  placeholder="edit job description"
                  value={this.state.jobDescription}
                  onChange={this.inputChange}
                />
                <DashboardInputStart
                  name="jobStart"
                  type="text"
                  placeholder="edit job start"
                  value={this.state.jobStart}
                  onChange={this.inputChange}
                />
                <DashboardInputEnd
                  name="jobEnd"
                  type="text"
                  placeholder="edit job end"
                  value={this.state.jobEnd}
                  onChange={this.inputChange}
                />
              </DashboardCenterContainer>
              <DashboardButtonContainer>
          <DashboardButtonNext onClick={e => this.handleSubmit(experience.id)}>
            Submit Edit
          </DashboardButtonNext>
          </DashboardButtonContainer>
            </DashboardFormContainer>
            </DashboardBG>
            </div>
          );
        })}
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
  { editSeekerExperience, getSeekerExperience }
)(EditExperienceForm);

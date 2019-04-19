import React, { Component } from "react";
import { connect } from "react-redux";
import { editSeekerEducation, getSeekerEducation } from "../../../actions";
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


class EditEducationForm extends Component {
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

  componentDidMount() {
    this.props.getSeekerEducation(this.props.auth.user.subject);
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = id => {
    const educationData = {
      eduSchool: this.state.eduSchool,
      eduCredential: this.state.eduCredential,
      eduDescription: this.state.eduDescription,
      eduStart: this.state.eduStart,
      eduEnd: this.state.eduEnd
    };
    this.props.editSeekerEducation(educationData, id);
    console.log(educationData);
  };

  render() {
    if (_.isEmpty(this.props.seeker.seekerProfile.education)) {
      return <loadingBlue>loading</loadingBlue>;
    }
    return (
      <DashboardSetupContainer>
        {this.props.seeker.seekerProfile.education.map(education => {
          return (
            <div key={education.id}>
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
              <InfoLink to='/jobSeeker/editProfile/editExperience'>Experience</InfoLink>
              <InfoLink to='/jobSeeker/editProfile/editEducation'>Education</InfoLink>
              <InfoLink to='/jobSeeker/editProfile/editSkills'>Skills</InfoLink>
            </InfoLinkContainer>
            <AvailableInfoEdits>
              <p>School - {education.eduSchool}</p>
              <p>Credentials - {education.eduCredential}</p>
              <p>Description - {education.eduDescription}</p>
              <p>Started - {education.eduStart}</p>
              <p>Ended - {education.eduEnd}</p>
              </AvailableInfoEdits>
              <DashboardSubTitle>
              Edit Education
              </DashboardSubTitle>
              <DashboardCenterContainer>
                <DashboardInputSchool
                  name="eduSchool"
                  type="text"
                  placeholder="edit school"
                  value={this.state.eduSchool}
                  onChange={this.inputChange}
                />
                <DashboardInputCreds
                  name="eduCredential"
                  type="text"
                  placeholder="edit credential"
                  value={this.state.eduCredential}
                  onChange={this.inputChange}
                />
                <DashboardInputDescription
                  name="eduDescription"
                  type="text"
                  placeholder="edit description"
                  value={this.state.eduDescription}
                  onChange={this.inputChange}
                />
                <DashboardInputStart
                  name="eduStart"
                  type="text"
                  placeholder="edit start"
                  value={this.state.eduStart}
                  onChange={this.inputChange}
                />
                <DashboardInputEnd
                  name="eduEnd"
                  type="text"
                  placeholder="edit end"
                  value={this.state.eduEnd}
                  onChange={this.inputChange}
                />
              </DashboardCenterContainer>
              <DashboardButtonContainer>
          <DashboardButtonNext onClick={e => this.handleSubmit(education.id)}>
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
  { editSeekerEducation, getSeekerEducation }
)(EditEducationForm);

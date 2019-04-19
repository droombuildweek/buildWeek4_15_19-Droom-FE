import React, { Component } from "react";
import { connect } from "react-redux";
import { getSeekerEducation, deleteSeekerEducation } from "../../../actions";
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
// const DashboardCenterContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   align-items: center;
// `
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
// const DashboardSubTitle = styled.div`
//   width: 600px;
//   font-weight: bold;
//   margin-bottom: 10px;
//   margin: 0 auto;
//   /* border: 1px solid red; */
//   display: flex;
//   justify-content: flex-start;
// `
// const DashboardInputName = styled.input`
//   height: 40px;
//   width: 330px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputMonth = styled.input`
//   height: 40px;
//   width: 180px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputDay = styled.input`
//   height: 40px;
//   width: 190px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputYear = styled.input`
//   height: 40px;
//   width: 250px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputCountry = styled.input`
//   height: 40px;
//   width: 250px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputState = styled.input`
//   height: 40px;
//   width: 120px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputCity = styled.input`
//   height: 40px;
//   width: 250px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputZip = styled.input`
//   height: 40px;
//   width: 600px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputPicture = styled.input`
//   height: 40px;
//   width: 600px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
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

// const DashboardInputContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `
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
const AvailableInfoEdits = styled.div`
  width: 550px;
  margin: 0 auto;
  margin-bottom:15px;
  /* border: 1px solid red; */
`



class ViewExperience extends Component {
  componentDidMount() {
    this.props.getSeekerEducation(this.props.auth.user.subject);
  }

  deleteEducation = id => {
    alert("Are you sure you want to delete your education?");
    this.props.deleteSeekerEducation(id);
  };

  render() {
    if (_.isEmpty(this.props.seeker.seekerProfile.education)) {
      return <p>Loading</p>;
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
        <TitleText>View User Profile</TitleText>
          {/* <TitleText>Almost done!</TitleText>
          <SubTitleText>We just need some additional information to set up your profile.</SubTitleText> */}
        </DashboardTitleContainer>
        <DashboardBG>
        <DashboardFormContainer>
        <InfoLinkContainer>
            <InfoLink to='/jobSeeker/personalInfo'>Personal Information</InfoLink>
              <InfoLink to='/jobSeeker/experience'>Experience</InfoLink>
              <InfoLink to='/jobSeeker/education'>Education</InfoLink>
              <InfoLink to='/jobSeeker/skills'>Skills</InfoLink>
            </InfoLinkContainer>
        {this.props.seeker.seekerProfile.education.map(education => {
          return (
            <div key={education.id}>
            <AvailableInfoEdits>
              <p>{education.eduSchool}</p>
              <p>{education.eduCredential}</p>
              <p>{education.eduDescription}</p>
              <p>{education.eduStart}</p>
              <p>{education.eduEnd}</p>
              </AvailableInfoEdits>
              <DashboardButtonContainer>
                <DashboardButtonNext onClick={e => this.deleteEducation(education.id)}>
                Delete Education
                </DashboardButtonNext>
              </DashboardButtonContainer>
            </div>
          );
        })}
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
  { getSeekerEducation, deleteSeekerEducation }
)(ViewExperience);

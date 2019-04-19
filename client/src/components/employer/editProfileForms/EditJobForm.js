import React, { Component } from "react";
import { connect } from "react-redux";
import { editJobInfo, getEmployerJob, getEmployerJobs } from "../../../actions";
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
const TitleText = styled.div`
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
// const DashboardInputJob = styled.input`
//   height: 40px;
//   width: 600px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputCompany = styled.input`
//   height: 40px;
//   width: 600px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputDescription = styled.input`
//   height: 40px;
//   width: 600px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputStart = styled.input`
//   height: 40px;
//   width: 250px;
//   margin: 10px 10px;
//   padding: 0 10px;
//   background-color: #eceff6;
// `
// const DashboardInputEnd = styled.input`
//   height: 40px;
//   width: 250px;
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
// const loadingBlue = styled.div`
//   background-color:  #6891F9;
//   width: 100vw;
//   height: 100vh;
// `
// const DashboardInputContainer = styled.div`
//   display: flex;
//   flex-direction: row;
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
const DashboardInputSchool = styled.input`
  height: 40px;
  width: 600px;
  margin: 10px 10px;
  padding: 0 10px;
  background-color: #eceff6;
`




class EditJobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.auth.user.subject,
      jobName: "",
      jobDescription: "",
      jobExperienceRequired: "",
      jobExperiencePreferred: "",
      jobApplyBy: "",
      jobSkill: ""
    };
  }

  componentDidMount() {
    this.props.getEmployerJob(this.state.userId);
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const jobData = {
      companyId: "",
      jobName: this.state.jobName,
      jobDescription: this.state.jobDescription,
      jobExperienceRequired: this.state.jobExperienceRequired,
      jobExperiencePreferred: this.state.jobExperiencePreferred,
      jobApplyBy: this.state.jobApplyBy
    };

    this.props.editJobInfo(
      jobData,
      this.props.employer.employerProfile.jobs.id
    );
    console.log(this.state);
    console.log(jobData);
  };

  render() {
    if (_.isEmpty(this.props.employer.employerProfile)) {
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
          <InfoLinkUser to='/employer/company' >View</InfoLinkUser>
          <InfoLinkUser to='/employer/editProfile/companyInfo' >Edit</InfoLinkUser>
          <InfoLinkUser to='/employer/createProfile/companyInfo' >Create</InfoLinkUser>
          </div>
        </DashboardActionContainer>
        </DACBG>
        <DashboardTitleContainer>
        <TitleText>Edit Employer Profile</TitleText>
          {/* <TitleText>Almost done!</TitleText>
          <SubTitleText>We just need some additional information to set up your profile.</SubTitleText> */}
        </DashboardTitleContainer>
        <DashboardBG>
        <DashboardFormContainer>
        <InfoLinkContainer>
              <InfoLink to='/employer/editProfile/companyInfo'>Company Information</InfoLink>
              <InfoLink to='/employer/editProfile/jobInfo'>Job Information</InfoLink>
            </InfoLinkContainer>
            <DashboardSubTitle>
              Job Information
              </DashboardSubTitle>
          {/* {this.props.employer.employerProfile.jobs/map} */}
          <AvailableInfoEdits>
          <p>{this.props.employer.employerProfile.jobs.jobName}</p>
          <p>{this.props.employer.employerProfile.jobs.jobDescription}</p>
          <p>
            {this.props.employer.employerProfile.jobs.jobExperienceRequired}
          </p>
          <p>
            {this.props.employer.employerProfile.jobs.jobExperiencePreferred}
          </p>
          <p>{this.props.employer.employerProfile.jobs.jobApplyBy}</p>
          </AvailableInfoEdits>
          <DashboardCenterContainer>
            <DashboardInputSchool
              name="jobName"
              type="text"
              placeholder="edit job name"
              value={this.state.jobName}
              onChange={this.inputChange}
            />
            <DashboardInputSchool
              name="jobDescription"
              type="text"
              placeholder="edit job description"
              value={this.state.jobDescription}
              onChange={this.inputChange}
            />
            <DashboardInputSchool
              name="jobExperienceRequired"
              type="text"
              placeholder="edit experience required"
              value={this.state.jobExperienceRequired}
              onChange={this.inputChange}
            />
            <DashboardInputSchool
              name="jobExperiencePreferred"
              type="text"
              placeholder="edit experience preferred"
              value={this.state.jobExperiencePreferred}
              onChange={this.inputChange}
            />
            <DashboardInputSchool
              name="jobApplyBy"
              type="text"
              placeholder="edit apply by"
              value={this.state.jobApplyBy}
              onChange={this.inputChange}
            />
            <DashboardInputSchool
              name="jobSkill"
              type="text"
              placeholder="edit skills wanted"
              value={this.state.jobSkill}
              onChange={this.inputChange}
            />
            </DashboardCenterContainer>
            <DashboardButtonContainer>
          <DashboardButtonNext onClick={this.handleSubmit}>
            Submit Edit
          </DashboardButtonNext>
          </DashboardButtonContainer>
        </DashboardFormContainer>
        </DashboardBG>
      </DashboardSetupContainer>
    );
  }
}

const mapStateToProps = state => ({
  employer: state.employer,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { editJobInfo, getEmployerJob, getEmployerJobs }
)(EditJobForm);

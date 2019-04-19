import React, { Component } from "react";

// Components
import Header from "./components/nav/header";
import Home from "./components/Home";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Employers from "./components/employer/Employers";
import Jobs from "./components/employer/Jobs";
import PersonalInfoForm from "./components/jobSeeker/createProfileForms/PersonalInfoForm";
import EducationForm from "./components/jobSeeker/createProfileForms/EducationForm";
import PreviousExperienceForm from "./components/jobSeeker/createProfileForms/PreviousExperienceForm";
import SkillsAndInterestsForm from "./components/jobSeeker/createProfileForms/SkillsAndInterestsForm";
import SeekerDashboard from "./components/jobSeeker/dashboard/Dashboard";
import PrivateRoute from "./components/nav/PrivateRoute";
import CompanyInfoForm from "./components/employer/createProfileForms/CompanyInfoForm";
import JobInfoForm from "./components/employer/createProfileForms/JobInfoForm";
import EmployerDashboard from "./components/employer/dashboard/Dashboard";
import EditPersonalForm from "./components/jobSeeker/editProfileForms/EditPersonalForm";
import EditExperienceForm from "./components/jobSeeker/editProfileForms/EditExperienceForm";
import EditEducationForm from "./components/jobSeeker/editProfileForms/EditEducationForm";
import EditSkillsForm from "./components/jobSeeker/editProfileForms/EditSkillsForm";
import EditCompanyInfo from "./components/employer/editProfileForms/EditCompanyInfo";
import EditJobForm from "./components/employer/editProfileForms/EditJobForm";
import ViewCompany from "./components/employer/viewProfile/ViewCompany";
import ViewJobs from "./components/employer/viewProfile/ViewJobs";
import ViewPersonal from "./components/jobSeeker/viewProfile/ViewPersonal";
import ViewExperience from "./components/jobSeeker/viewProfile/ViewExperience";
import ViewEducation from "./components/jobSeeker/viewProfile/ViewEducation";
import ViewSkills from "./components/jobSeeker/viewProfile/ViewSkills";
import MatchingForSeekers from "./components/matching/MatchingForSeekers";
import MatchingForCompanies from "./components/matching/MatchingForCompanies";
import MatchingHome from "./components/matching/MatchingHome";
import SeekerMatches from "./components/jobSeeker/dashboard/SeekerMatches";
import EmployerMatches from "./components/employer/dashboard/EmployerMatches";

// Styling
import "./App.css";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux Setup
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

// Auth
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Header />
            {/* Login/Register Route */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* Dashboard Route */}
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Home} />
            </Switch>
            {/* Matching Home Route */}
            <Switch>
              <PrivateRoute exact path="/matching" component={MatchingHome} />
            </Switch>
            {/* Matching for Seekers Route */}
            <Switch>
              <PrivateRoute
                exact
                path="/matching/jobSeekers"
                component={MatchingForSeekers}
              />
            </Switch>
            {/* Matching for Companies Route */}
            <Switch>
              <PrivateRoute
                exact
                path="/matching/employers"
                component={MatchingForCompanies}
              />
            </Switch>
            {/* Matches for Seekers */}
            <Switch>
              <PrivateRoute
                exact
                path="/matches/seekers"
                component={SeekerMatches}
              />
            </Switch>
            {/* Matches for Employers */}
            <Switch>
              <PrivateRoute
                exact
                path="/matches/employers"
                component={EmployerMatches}
              />
            </Switch>
            {/* Render Employers Route */}
            <Route exact path="/employers" component={Employers} />
            {/* Render Jobs Route */}
            <Route exact path="/jobs" component={Jobs} />
            {/* Job Seeker Dashboard Route */}
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/dashboard"
                component={SeekerDashboard}
              />
            </Switch>
            {/* View Personal Info */}
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/personalInfo"
                component={ViewPersonal}
              />
            </Switch>
            {/* View Experience */}
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/experience"
                component={ViewExperience}
              />
            </Switch>
            {/* View Education */}
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/education"
                component={ViewEducation}
              />
            </Switch>
            {/* View Skills */}
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/skills"
                component={ViewSkills}
              />
            </Switch>
            {/* Job Seeker Create Form Routes */}
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/createProfile/personalInfo"
                component={PersonalInfoForm}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/createProfile/experience"
                component={PreviousExperienceForm}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/createProfile/education"
                component={EducationForm}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/createProfile/skills"
                component={SkillsAndInterestsForm}
              />
            </Switch>
            {/* Job Seeker Edit Routes */}
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/editProfile/editPersonal"
                component={EditPersonalForm}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/editProfile/editExperience"
                component={EditExperienceForm}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/editProfile/editEducation"
                component={EditEducationForm}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/editProfile/editSkills"
                component={EditSkillsForm}
              />
            </Switch>
            {/* Employer Dashboard Route */}
            <Switch>
              <PrivateRoute
                exact
                path="/employer/dashboard"
                component={EmployerDashboard}
              />
            </Switch>
            {/* View Company */}
            <Switch>
              <PrivateRoute
                exact
                path="/employer/company"
                component={ViewCompany}
              />
            </Switch>
            {/* View Jobs */}
            <Switch>
              <PrivateRoute exact path="/employer/jobs" component={ViewJobs} />
            </Switch>
            {/* Employer Create Form Routes */}
            <Switch>
              <PrivateRoute
                exact
                path="/employer/createProfile/companyInfo"
                component={CompanyInfoForm}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/employer/createProfile/jobInfo"
                component={JobInfoForm}
              />
            </Switch>
            {/* Employer Edit Form Routes */}
            <Switch>
              <PrivateRoute
                exact
                path="/employer/editProfile/companyInfo"
                component={EditCompanyInfo}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/employer/editProfile/jobInfo"
                component={EditJobForm}
              />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;

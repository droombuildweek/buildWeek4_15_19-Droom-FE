import React, { Component } from "react";

// Components
import Header from "./components/nav/header";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
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

// Styling
import "./App.css";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux Setup
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Auth
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
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
            {/* Job Seeker Dashboard Route */}
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/dashboard"
                component={SeekerDashboard}
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

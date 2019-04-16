import React, { Component } from "react";

// Components
import Header from "./components/nav/header";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PersonalInfoForm from "./components/jobSeeker/profileForm/PersonalInfoForm";
import EducationForm from "./components/jobSeeker/profileForm/EducationForm";
import PreviousExperienceForm from "./components/jobSeeker/profileForm/PreviousExperienceForm";
import SkillsAndInterestsForm from "./components/jobSeeker/profileForm/SkillsAndInterestsForm";
import Dashboard from "./components/jobSeeker/dashboard/Dashboard";
import PrivateRoute from "./components/nav/PrivateRoute";

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
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/jobSeeker/createProfile/personalInfo"
              component={PersonalInfoForm}
            />
            <Route
              exact
              path="/jobSeeker/createProfile/experience"
              component={PreviousExperienceForm}
            />
            <Route
              exact
              path="/jobSeeker/createProfile/education"
              component={EducationForm}
            />
            <Route
              exact
              path="/jobSeeker/createProfile/skills"
              component={SkillsAndInterestsForm}
            />
            <Switch>
              <PrivateRoute
                exact
                path="/jobSeeker/dashboard"
                component={Dashboard}
              />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;

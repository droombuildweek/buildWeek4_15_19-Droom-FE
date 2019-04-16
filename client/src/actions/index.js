import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./types";

// Auth --------------------------

// register user
export const registerUser = (userData, history) => dispatch => {
  console.log(userData);
  axios
    .post(
      "https://droom-buildweek-4-15-19.herokuapp.com/api/auth/register",
      userData
    )
    .then(res => {
      // save token to local storage
      localStorage.setItem("jwtToken", res.data.token);
      // set to auth header
      setAuthToken(res.data.token);
      // decode token
      const decoded = jwt_decode(res.data.token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => console.log(err.response));
};

// login user
export const loginUser = userData => dispatch => {
  console.log(userData);
  axios
    .post(
      "https://droom-buildweek-4-15-19.herokuapp.com/api/auth/login",
      userData
    )
    .then(res => {
      console.log(res.data.token);
      // save token to local storage
      localStorage.setItem("jwtToken", res.data.token);
      // set to auth header
      setAuthToken(res.data.token);
      // decode token
      const decoded = jwt_decode(res.data.token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => console.log(err.response));
};

// set user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// logout user
export const logoutUser = () => dispatch => {
  // remove token from local storage
  localStorage.removeItem("jwtToken");
  // remove auth header
  setAuthToken(false);
  // set current user to empty object
  dispatch(setCurrentUser({}));
};

// Job Seeker --------------------------

export const getSeekerProfile = () => dispatch => {
  axios
    .get("/")
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// submit seeker profile form
export const submitSeekerPersonal = personalData => dispatch => {
  axios
    .post("/", personalData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// submit seeker experience profile form
export const submitSeekerExperience = experienceData => dispatch => {
  axios
    .post("/", experienceData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// submit seeker education profile form
export const submitSeekerEducation = educationData => dispatch => {
  axios
    .post("/", educationData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// submit seeker education profile form
export const submitSeekerSkills = skillsData => dispatch => {
  axios
    .post("/", skillsData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// Employer --------------------------

// get company profile
export const getCompanyProfile = () => dispatch => {
  axios
    .post("/")
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// submit company info form
export const submitCompanyInfo = companyData => dispatch => {
  axios
    .post("/", companyData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// submit job info form
export const submitJobInfo = jobData => dispatch => {
  axios
    .post("/", jobData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  SET_CURRENT_USER,
  SET_SEEKER_PROFILE,
  SET_EMPLOYER_PROFILE,
  SET_SEEKER_PROFILES
} from "./types";

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

// delete account

// Job Seeker --------------------------

// get seeker profile
export const getSeekerProfile = () => dispatch => {
  axios
    .get("/")
    .then(res => {
      dispatch({
        type: SET_SEEKER_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_SEEKER_PROFILE,
        payload: {}
      });
    });
};

// get seeker profiles
export const getSeekerProfiles = () => dispatch => {
  axios
    .get("/")
    .then(res => {
      dispatch({
        type: SET_SEEKER_PROFILES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_SEEKER_PROFILES,
        payload: {}
      });
    });
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

// edit job seeker personal info
export const editSeekerPersonal = (personalData, id) => dispatch => {
  axios
    .put("/", personalData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// edit job seeker experience
export const editSeekerExperience = (experienceData, id) => dispatch => {
  axios
    .put("/", experienceData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// edit job seeker education
export const editSeekerEducation = (educationData, id) => dispatch => {
  axios
    .put("/", educationData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// edit job seeker skills
export const editSeekerSkills = (skillsData, id) => dispatch => {
  axios
    .put("/", skillsData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// delete job seeker profile
export const deleteSeekerProfile = id => dispatch => {
  axios
    .delete("/")
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// Employer --------------------------

// get company profile
export const getCompanyProfile = () => dispatch => {
  axios
    .post("/")
    .then(res => {
      dispatch({
        type: SET_EMPLOYER_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_EMPLOYER_PROFILE,
        payload: {}
      });
    });
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

// edit employer info
export const editCompanyInfo = (companyData, id) => dispatch => {
  axios
    .put("/", companyData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// edit employer job info
export const editJobInfo = (jobData, id) => dispatch => {
  axios
    .put("/", jobData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// delete company profile
export const deleteEmployerProfile = id => dispatch => {
  axios
    .delete("/")
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

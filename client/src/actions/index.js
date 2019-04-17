import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  SET_CURRENT_USER,
  SET_SEEKER_PROFILE,
  SET_EMPLOYER_PROFILE,
  SET_EMPLOYER_PROFILES
} from "./types";

const URL = "https://droom-buildweek-4-15-19.herokuapp.com";

// Auth --------------------------

// register user
export const registerUser = (userData, history) => dispatch => {
  console.log(userData);
  axios
    .post(`${URL}/api/auth/register`, userData)
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
    .post(`${URL}/api/auth/login`, userData)
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

// submit seeker profile form
export const submitSeekerPersonal = personalData => dispatch => {
  axios
    .post(`${URL}/api/seekers`, personalData)
    .then(res => console.log(res))
    .catch(err => console.log(err.response));
};

// submit seeker experience profile form
export const submitSeekerExperience = experienceData => dispatch => {
  axios
    .post(`${URL}/api/experience`, experienceData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// submit seeker education profile form
export const submitSeekerEducation = educationData => dispatch => {
  axios
    .post(`${URL}/api/education`, educationData)
    .then(res => console.log(res))
    .catch(err => console.log(err.response));
};

// submit seeker education profile form
export const submitSeekerSkills = skillsData => dispatch => {
  axios
    .post(`${URL}/api/skills`, skillsData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// edit job seeker personal info
export const editSeekerPersonal = (personalData, id) => dispatch => {
  axios
    .put(`${URL}`, personalData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// edit job seeker experience
export const editSeekerExperience = (experienceData, id) => dispatch => {
  axios
    .put(`${URL}`, experienceData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// edit job seeker education
export const editSeekerEducation = (educationData, id) => dispatch => {
  axios
    .put(`${URL}`, educationData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// edit job seeker skills
export const editSeekerSkills = (skillsData, id) => dispatch => {
  axios
    .put(`${URL}`, skillsData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// delete job seeker profile
export const deleteSeekerProfile = id => dispatch => {
  axios
    .delete(`${URL}`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// Employer --------------------------

// get employer company profile
export const getEmployerProfile = id => dispatch => {
  axios
    .get(`${URL}/api/companies/${id}`)
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

// get employer company profiles
export const getEmployerProfiles = () => dispatch => {
  axios
    .get(`${URL}/api/companies`)
    .then(res => {
      dispatch({
        type: SET_EMPLOYER_PROFILES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// get employer job profile
export const getEmployerJob = id => dispatch => {
  axios
    .get(`${URL}/api/jobs/${id}`)
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

// get employer job profiles
export const getEmployerJobs = () => dispatch => {
  axios
    .get(`${URL}/api/jobs`)
    .then(res => {
      dispatch({
        type: SET_EMPLOYER_PROFILES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// submit company info form
export const submitCompanyInfo = companyData => dispatch => {
  axios
    .post(`${URL}/api/companies`, companyData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// submit job info form
export const submitJobInfo = jobData => dispatch => {
  axios
    .post(`${URL}/api/jobs`, jobData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// edit employer company info
export const editCompanyInfo = (companyData, id) => dispatch => {
  axios
    .put(`${URL}/api/companies/${id}`, companyData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// edit employer job info
export const editJobInfo = (jobData, id) => dispatch => {
  axios
    .put(`${URL}/api/jobs/${id}`, jobData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// delete employer company
export const deleteEmployerCompany = id => dispatch => {
  axios
    .delete(`${URL}/api/companies/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// delete employer job
export const deleteEmployerJob = id => dispatch => {
  axios
    .delete(`${URL}/api/job/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

import axios from "axios";
import { SET_CURRENT_USER } from "./types";

// register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/auth/register", userData)
    .then(res => history.push("/login"))
    .catch(err => console.log(err));
};

// login user
export const loginUser = userData => dispatch => {
  axios
    .post("/api/auth/login", userData)
    .then(res => {
      // save token to local storage
      // set token to auth header
      // decode token
      // set current user
    })
    .catch(err => console.log(err));
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
  // remove auth header
  // set current user to empty object
};

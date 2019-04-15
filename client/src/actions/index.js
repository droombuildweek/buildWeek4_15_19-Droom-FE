import axios from "axios";
import { CREATE_USER } from "./types";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/auth/register", userData)
    .then(res => history.push("/login"))
    .catch(err => console.log(err));
};

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

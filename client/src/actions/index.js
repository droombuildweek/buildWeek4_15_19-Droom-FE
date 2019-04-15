import axios from "axios";
import { CREATE_USER } from "./types";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/auth/register", userData)
    .then(res => history.push("/login"))
    .catch(err => console.log(err));
};

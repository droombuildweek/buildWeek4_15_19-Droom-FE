import { combineReducers } from "redux";
import authReducer from "./authReducer";
import jobSeekerReducer from "./jobSeekerReducer";

export default combineReducers({
  auth: authReducer,
  seeker: jobSeekerReducer
});

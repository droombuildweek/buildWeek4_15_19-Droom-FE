import { combineReducers } from "redux";
import authReducer from "./authReducer";
import jobSeekerReducer from "./jobSeekerReducer";
import employerReducer from "./employerReducer";
import matchingReducer from "./matchingReducer";

export default combineReducers({
  auth: authReducer,
  seeker: jobSeekerReducer,
  employer: employerReducer,
  matches: matchingReducer
});

import { SET_EMPLOYER_PROFILE, SET_EMPLOYER_PROFILES } from "../actions/types";

const initialState = {
  employerProfile: {},
  employerProfiles: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EMPLOYER_PROFILE:
      return {
        ...state,
        employerProfile: action.payload
      };
    case SET_EMPLOYER_PROFILES:
      return {
        ...state,
        employerProfiles: action.payload
      };
    default:
      return state;
  }
}

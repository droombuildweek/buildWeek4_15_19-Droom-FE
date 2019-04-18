import { SET_SEEKER_MATCHES, SET_EMPLOYER_MATCHES } from "../actions/types";

const initialState = {
  seekerMatches: [],
  employerMatches: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEEKER_MATCHES:
      return {
        ...state,
        seekerMatches: action.payload
      };
    case SET_EMPLOYER_MATCHES:
      return {
        ...state,
        employerMatches: action.payload
      };
    default:
      return state;
  }
}

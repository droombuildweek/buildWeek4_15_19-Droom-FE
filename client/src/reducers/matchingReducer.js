import {
  SET_SEEKER_MATCHES,
  SET_EMPLOYER_MATCHES,
  SET_SEEKER_PICKS,
  SET_EMPLOYER_PICKS
} from "../actions/types";

const initialState = {
  seekerMatches: [],
  employerMatches: [],
  seekerPicks: []
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
    case SET_SEEKER_PICKS:
      return {
        ...state,
        seekerPicks: action.payload
      };

    default:
      return state;
  }
}

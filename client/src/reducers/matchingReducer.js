import {
  SET_SEEKER_MATCHES,
  SET_EMPLOYER_MATCHES,
  SET_SEEKER_MATCHED,
  SET_EMPLOYER_MATCHED
} from "../actions/types";

const initialState = {
  seekerMatches: [],
  employerMatches: [],
  seekerMatched: [],
  employerMatched: []
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
    case SET_SEEKER_MATCHED:
      return {
        ...state,
        seekerMatched: action.payload
      };
    case SET_EMPLOYER_MATCHED:
      return {
        ...state,
        employerMatched: action.payload
      };
    default:
      return state;
  }
}

import { SET_EMPLOYER_PROFILE } from "../actions/types";

const initialState = {
  employerProfile: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EMPLOYER_PROFILE:
      return {
        ...state,
        seekerProfile: action.payload
      };
    default:
      return state;
  }
}

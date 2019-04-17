import { SET_SEEKER_PROFILE, SET_SEEKER_PROFILES } from "../actions/types";

const initialState = {
  seekerProfile: {},
  seekerProfiles: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEEKER_PROFILE:
      return {
        ...state,
        seekerProfile: action.payload
      };
    case SET_SEEKER_PROFILES:
      return {
        ...state,
        seekerProfiles: action.payload
      };
    default:
      return state;
  }
}

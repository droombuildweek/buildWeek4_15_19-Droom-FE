import {
  SET_SEEKER_PERSONAL,
  SET_SEEKER_EXPERIENCE,
  SET_SEEKER_EDUCATION,
  SET_SEEKER_SKILLS,
  SET_SEEKER_PROFILES
} from "../actions/types";

const initialState = {
  seekerProfile: {
    personal: {},
    experience: {},
    education: {},
    skills: {}
  },
  seekerProfiles: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEEKER_PERSONAL:
      return {
        ...state,

        seekerProfile: {
          personal: action.payload
        }
      };
    case SET_SEEKER_EXPERIENCE:
      return {
        ...state,

        seekerProfile: {
          experience: action.payload
        }
      };
    case SET_SEEKER_EDUCATION:
      return {
        ...state,

        seekerProfile: {
          education: action.payload
        }
      };
    case SET_SEEKER_SKILLS:
      return {
        ...state,

        seekerProfile: {
          skills: action.payload
        }
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

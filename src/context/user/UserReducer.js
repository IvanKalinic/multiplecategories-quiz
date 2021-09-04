import { SET_NAME, SET_QUESTIONS, SET_SCORE } from "../actions.js";

const UserReducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;

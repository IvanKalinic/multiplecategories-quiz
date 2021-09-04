import React, { useReducer } from "react";
import { SET_NAME, SET_SCORE, SET_QUESTIONS } from "../actions";
import UserReducer from "./UserReducer";
import { UserContext } from "./UserContext";

export const UserState = ({ children }) => {
  const initialState = {
    name: "",
    questions: null,
    score: 0,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setName = (name) => {
    dispatch({ type: SET_NAME, payload: name });
  };
  const setQuestions = (questions) => {
    dispatch({ type: SET_QUESTIONS, payload: questions });
  };
  const setScore = (score) => {
    dispatch({ type: SET_SCORE, payload: score });
  };

  const value = {
    name: state.name,
    score: state.score,
    questions: state.questions,
    setName,
    setScore,
    setQuestions,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

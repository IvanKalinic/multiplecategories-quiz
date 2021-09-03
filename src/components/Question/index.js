import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import ErrorMessage from "../ErrorMessage";
import "./index.scss";

const Question = ({
  currentQuestion,
  setCurrentQuestion,
  options,
  correct,
}) => {
  const { score, setScore, questions, setQuestions } = useUser();
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelect = (option) => {
    if (selected === option && selected === correct) {
      return "select-option";
    } else if (selected === option && selected !== correct) {
      return "wrong-option";
    } else if (option === correct) {
      return "select-option";
    }
  };

  const handleCheck = (option) => {
    setSelected(option);
    if (option === correct) {
      setScore(score + 1);
    }
    setError(false); // error only happens when none option is selected
  };

  return (
    <div className="question-container">
      <h1>Question {currentQuestion + 1}</h1>
      <div className="single-question">
        <h2 className="current-question">
          {questions[currentQuestion].question}
        </h2>
        <div className="options-select">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((opt, i) => (
              <button
                key={i}
                disabled={selected}
                onClick={() => {
                  handleCheck(opt);
                }}
                className={`single-option ${selected && handleSelect(opt)}`}
              >
                {opt}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Question;

import React, { useEffect, useState } from "react";
import Question from "../../components/Question";
import { useUser } from "../../context/UserContext";
import "./index.scss";

const Quiz = () => {
  const { name, score, questions } = useUser();

  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers, // dividing in 3 separate elements
        ])
    );
  }, [questions, currentQuestion]);

  console.log(options);

  return (
    <div className="quiz-container">
      <span className="subtitle">Welcome,{name}</span>
      {questions ? (
        <div>
          <div className="quiz-info">
            <span>{questions[currentQuestion].category}</span>
            <span>Score : {score}</span>
          </div>
          <Question
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            options={options}
            correct={questions[currentQuestion]?.correct_answer}
          />
        </div>
      ) : (
        <div>
          <div className="question-container skeleton-container">
            <h1></h1>
            <div className="skeleton-question">
              <h2 className="skeleton-heading first"></h2>
              <div className="options-select">
                <button className="skeleton-btn">
                  <h2 className="current-question skeleton-heading"></h2>
                  <h2 className="current-question skeleton-heading"></h2>
                </button>
                <button className="skeleton-btn">
                  <h2 className="current-question skeleton-heading"></h2>
                  <h2 className="current-question skeleton-heading"></h2>
                </button>
                <button className="skeleton-btn">
                  <h2 className="current-question skeleton-heading"></h2>
                  <h2 className="current-question skeleton-heading"></h2>
                </button>
                <button className="skeleton-btn">
                  <h2 className="current-question skeleton-heading"></h2>
                  <h2 className="current-question skeleton-heading"></h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

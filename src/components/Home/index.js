import React, { useState } from "react";
import { Question } from "../../assets/svg";
import "./index.scss";
import InputField from "../InputField";
import SelectDropdown from "../SelectDropdown";
import { categories, difficulties } from "../../const";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import { useHistory } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { fetchQuestions } from "../../api";

const Home = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const { name, setName, questions, setQuestions, score } = useUser();

  const history = useHistory();

  const handleSubmit = () => {
    if (!name || name === " ") {
      setError(true);
    } else {
      setError(false);
      fetchQuestions(category, difficulty).then((data) =>
        setQuestions(data.results)
      );
      history.push("/quiz");
    }
  };

  return (
    <div className="home-content">
      <div className="settings-container">
        <p>Quiz settings</p>
        <div className="settings-select">
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
          <InputField label="name" setLabel={setName} />
          <SelectDropdown data={categories} setItem={setCategory} />
          <SelectDropdown data={difficulties} setItem={setDifficulty} />
          <Button handleSubmit={handleSubmit}> Start Quiz </Button>
        </div>
      </div>

      <div className="banner">
        <Question />
      </div>
    </div>
  );
};

export default Home;

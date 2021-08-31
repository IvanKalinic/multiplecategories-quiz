import React, { useState } from "react";
import { Question } from "../../assets/svg";
import "./index.scss";
import InputField from "../InputField";
import SelectDropdown from "../SelectDropdown";
import { categories, difficulties } from "../../const";
import Button from "../Button";

const Home = () => {
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();

  return (
    <div className="home-content">
      <div className="settings-container">
        <p>Quiz settings</p>
        <div className="settings-select">
          <InputField label="name" />
          <SelectDropdown data={categories} setItem={setCategory} />
          <SelectDropdown data={difficulties} setItem={setDifficulty} />
          <Button> Start Quiz </Button>
        </div>
      </div>

      <div className="banner">
        <Question />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Question } from "../../assets/svg";
import "./index.scss";
import InputField from "../InputField";

const Home = () => {
  return (
    <div className="home-content">
      <div className="settings-container">
        <span>Quiz settings</span>
        <div className="settings-select">
          <InputField label="name" />
        </div>
      </div>

      <div className="banner">
        <Question />
      </div>
    </div>
  );
};

export default Home;

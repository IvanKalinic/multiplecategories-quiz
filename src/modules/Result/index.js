import React from "react";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";
import "./index.scss";

const Result = () => {
  const { score } = useUser();

  return (
    <div className="result">
      <span className="title">Final score : {score}</span>
      <button>
        <Link className="home-link" to="/">
          Go To Homepage
        </Link>
      </button>
    </div>
  );
};

export default Result;

import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="quiz-title">
        Quiz app
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;

import React from "react";
import "./index.scss";

const Button = ({ children, handleSubmit }) => {
  return (
    <div className="button" onClick={handleSubmit}>
      {children}
    </div>
  );
};

export default Button;

import React from "react";
import "./index.scss";

const ErrorMessage = ({ children }) => {
  return <div className="error-container">{children}</div>;
};

export default ErrorMessage;

import React from "react";
import "./index.scss";

const InputField = ({ label, setLabel }) => {
  return (
    <div className="form">
      <input
        type="text"
        id={label}
        className="form__input"
        autoComplete="off"
        placeholder=" "
        onChange={(e) => setLabel(e.target.value)}
      ></input>
      <label for={label} className="form__label">
        {label}
      </label>
    </div>
  );
};

export default InputField;

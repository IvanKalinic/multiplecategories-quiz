import React, { useState } from "react";
import "./index.scss";

const SelectDropdown = ({ data, setItem }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(data[0].category);

  const handleOnClick = (item) => {
    setSelected(item.category);
    if (item.value > 3) {
      setItem(item.value);
    } else {
      setItem(item.category.toLowerCase());
    }
    setOpen(!open);
  };

  return (
    <div className="select-wrapper" onClick={() => setOpen(!open)}>
      <div className={!open ? "select" : "select open"}>
        <div className="select-trigger">
          <span>{selected}</span>
          <div className="arrow"></div>
        </div>
        <div className="options">
          {data.map((option, index) => {
            return (
              <span
                onClick={() => handleOnClick(option)}
                className={
                  selected === option.category
                    ? "custom-option selected"
                    : "custom-option "
                }
                value={option.value}
                key={index}
              >
                {option.category}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectDropdown;

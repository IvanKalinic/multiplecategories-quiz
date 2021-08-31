import React from "react";
import Header from "../../components/Header";
import Home from "../../components/Home";

import "./index.scss";

const FrontPage = () => {
  return (
    <div className="app-parent-container">
      <Header />
      <Home />
    </div>
  );
};

export default FrontPage;

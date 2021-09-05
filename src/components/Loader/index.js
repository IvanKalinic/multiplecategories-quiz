import Spinner from "react-loader-spinner";
import React, { memo } from "react";
import "./index.scss";

const Loader = () => {
  return (
    <div className="loader-spinner">
      <Spinner type="Oval" color="#404774" height={300} width={300} />
    </div>
  );
};

export default memo(Loader);

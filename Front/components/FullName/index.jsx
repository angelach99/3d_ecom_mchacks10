import React from "react";
import "./FullName.css";

function FullName(props) {
  const { fullName, className } = props;

  return (
    <div className={`full-name ${className || ""}`}>
      <div className="full-name-1 poppins-medium-star-dust-14px">{fullName}</div>
      <img className="line-1-1" src="/img/line-1.svg" alt="Line 1" />
    </div>
  );
}

export default FullName;

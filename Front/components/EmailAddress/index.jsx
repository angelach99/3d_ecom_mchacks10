import React from "react";
import "./EmailAddress.css";

function EmailAddress(props) {
  const { emailAddress, line1, className } = props;

  return (
    <div className={`email-address ${className || ""}`}>
      <div className="email-address-1 poppins-medium-star-dust-14px">{emailAddress}</div>
      <img className="line-1" src={line1} alt="Line 1" />
    </div>
  );
}

export default EmailAddress;

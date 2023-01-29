import React, { useEffect } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

function SignIn(props) {
  const {
    signInHeading,
    or,
    emailaddresstext,
    passwordtext,
    signintext,
    spanText1,
    spanText2,
    abstraction,
    spanText3,
    spanText4,
    theBestECommerce,
  } = props;

  useEffect(()=>
  {
    google.accounts.id.renderButton(document.getElementById("SignInDiv"),
    {theme : "outline", size : "large"});
  },[]);


  return (
    <div className="container-center-horizontal">
      <div className="sign-in screen">
        <div className="overlap-group1-2">
          <div className="overlap-group-14">
            <div className="white-bg"></div>
            <div className="sign-in-heading poppins-semi-bold-fuscous-gray-28px">{signInHeading}</div>
            <div className="continue-with-google" id = "SignInDiv"></div>
            <div className="or poppins-medium-star-dust-14px">{or}</div>
            <img className="email-input" src="/img/emailinput.svg" alt="EmailInput" />
            <div className="email-address-text poppins-medium-star-dust-14px">{emailaddresstext}</div>
            <img className="password-input" src="/img/passwordinput.svg" alt="PasswordInput" />
            <div className="password-text poppins-medium-star-dust-14px">{passwordtext}</div>
            <div className="sign-in-button"></div>
            <div className="sign-in-text poppins-semi-bold-white-16px">{signintext}</div>
            <p className="dont-have-an-account-sign-up poppins-normal-white-14px-2">
              <span className="poppins-normal-star-dust-14px">{spanText1}</span>
              <Link to="/sign-up">{spanText2}</Link>
            </p>
            <img className="abstraction" src={abstraction} alt="Abstraction" />
          </div>
          <h1 className="all-of-our-products poppins-medium-white-44px">
            <span className="poppins-medium-white-44px">{spanText3}</span>
            <span className="poppins-bold-white-44px">{spanText4}</span>
          </h1>
          <p className="the-best-e-commerce roboto-regular-normal-white-25px">{theBestECommerce}</p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

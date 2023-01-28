import React from "react";
import "./SignUp.css";

function SignUp(props) {
  const {
    createAccountTitle,
    continueWithGoogle,
    or,
    fullName,
    emailAddress,
    password,
    spanText1,
    spanText2,
    createaccounttext,
    abstraction,
    spanText3,
    spanText4,
    theBestECommerce,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sign-up screen">
        <div className="overlap-group1-3">
          <div className="overlap-group-15">
            <div className="white-bg-1"></div>
            <div className="create-account-title poppins-semi-bold-fuscous-gray-28px">{createAccountTitle}</div>
            <div className="continue-with-google-box"></div>
            <div className="continue-with-google-1 poppins-semi-bold-star-dust-12px">{continueWithGoogle}</div>
            <div className="or-1 poppins-medium-star-dust-14px">{or}</div>
            <img className="full-name-input-box" src="/img/fullnameinputbox.svg" alt="FullNameInputBox" />
            <div className="full-name poppins-medium-star-dust-14px">{fullName}</div>
            <div className="email-address poppins-medium-star-dust-14px">{emailAddress}</div>
            <img className="email-input-box" src="/img/emailinputbox.svg" alt="EmailInputBox" />
            <div className="password poppins-medium-star-dust-14px">{password}</div>
            <img className="password-input-box" src="/img/passwordinputbox.svg" alt="PasswordInputBox" />
            <p className="already-have-an-account-login poppins-normal-white-14px-2">
              <span className="poppins-normal-star-dust-14px">{spanText1}</span>
              <span className="poppins-normal-pewter-blue-14px">{spanText2}</span>
            </p>
            <div className="create-account-button"></div>
            <div className="create-account-text poppins-semi-bold-white-16px">{createaccounttext}</div>
            <img className="abstraction-1" src={abstraction} alt="Abstraction" />
          </div>
          <h1 className="all-of-our-products-1 poppins-medium-white-44px">
            <span className="poppins-medium-white-44px">{spanText3}</span>
            <span className="poppins-bold-white-44px">{spanText4}</span>
          </h1>
          <p className="the-best-e-commerce-1 roboto-regular-normal-white-25px">{theBestECommerce}</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

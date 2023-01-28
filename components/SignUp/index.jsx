import React from "react";
import FullName from "../FullName";
import {Link} from "react-router-dom";
import "./SignUp.css";

function SignUp(props) {
  const {
    surname,
    createAccount1,
    image2,
    continueWithGoogle,
    image3,
    continueWithFacebook,
    or,
    createAccount2,
    spanText1,
    spanText2,
    abstraction,
    spanText3,
    spanText4,
    theBestECommerce,
    fullName1Props,
    fullName2Props,
    fullName3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sign-up screen">
        <div className="overlap-group-container">
          <div className="overlap-group5">
            <div className="overlap-group4">
              <div className="white-bg"></div>
              <div className="language">
                <div className="surname poppins-normal-star-dust-12px">{surname}</div>
                <img className="polygon-1" src="/img/polygon-1.svg" alt="Polygon 1" />
              </div>
              <div className="create-account poppins-semi-bold-fuscous-gray-28px">{createAccount1}</div>
              <div className="overlap-group">
                <img className="image-2" src={image2} alt="image 2" />
                <div className="continue-with-google poppins-semi-bold-star-dust-12px">{continueWithGoogle}</div>
              </div>
              <div className="overlap-group1">
                <img className="image-3" src={image3} alt="image 3" />
                <div className="continue-with-facebook poppins-semi-bold-star-dust-12px">{continueWithFacebook}</div>
              </div>
              <div className="or poppins-medium-star-dust-14px">{or}</div>
              <FullName fullName={fullName1Props.fullName} />
              <FullName fullName={fullName2Props.fullName} className={fullName2Props.className} />
              <FullName fullName={fullName3Props.fullName} className={fullName3Props.className} />
              <div className="overlap-group2">
                <div className="create-account-1 poppins-semi-bold-white-16px">{createAccount2}</div>
              </div>
              <p className="already-have-an-account-login poppins-normal-white-14px-2">
                <span className="poppins-normal-star-dust-14px">{spanText1}</span>
                <Link to="/sign-in">{spanText2}</Link>
              </p>
              <img className="abstraction" src={abstraction} alt="Abstraction" />
            </div>
            <h1 className="all-of-our-products poppins-medium-white-44px">
              <span className="poppins-medium-white-44px">{spanText3}</span>
              <span className="poppins-bold-white-44px">{spanText4}</span>
            </h1>
            <p className="the-best-e-commerce roboto-normal-white-25px">{theBestECommerce}</p>
          </div>
          <div className="overlap-group3">
            <div className="ellipse-1"></div>
            <div className="ellipse-2"></div>
            <img className="polygon-2" src="/img/polygon-2.svg" alt="Polygon 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

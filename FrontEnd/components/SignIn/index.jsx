import React, { useEffect, useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import axios from 'axios';


function SignIn(props ) {
  const {
    signInHeading,
    or,
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

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const onChangeHandler_Email = event => {
    setEmail(event.target.value);
 };
 const onChangeHandler_Password = event => {
  setPassword(event.target.value);
};

async function submit(e){
  try{
      await axios.post("http://localhost:8000/",{
          email,password
      })
      .then(res=>{
          console.debug(res);
          if(res.data==="exist"){
            window.location.href = "http://localhost:1234/home-design?=" + res.name;
          }else if(res.data==="notexist"){
              alert("Log in failed, please sign up first.")
          }
      })
  }
  catch(e){
          console.log(e);
  }
}

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
            <input className="email-address-text poppins-medium-star-dust-14px" type="text" onChange={onChangeHandler_Email} placeholder="Email"/>
            <img className="password-input" src="/img/passwordinput.svg" alt="PasswordInput" />
            <input className="password-text poppins-medium-star-dust-14px" type="password" onChange={onChangeHandler_Password} placeholder="Password"/>
            <button type = "submit" className="sign-in-button" onClick={submit}></button>
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

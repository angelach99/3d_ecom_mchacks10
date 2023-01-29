import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import axios from 'axios';

function SignUp(props) {
  const {
    createAccountTitle,
    or,
    spanText1,
    spanText2,
    createaccounttext,
    abstraction,
    spanText3,
    spanText4,
    theBestECommerce,
  } = props;

  useEffect(()=>
  {
    google.accounts.id.renderButton(document.getElementById("SignUpDiv"),
    {theme : "outline", size : "large"});
  },[]);

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [fullname,setFullname] = useState("")

  const onChangeHandler_Email = event => {
    setEmail(event.target.value);
 };
 const onChangeHandler_Fullname = event => {
  setFullname(event.target.value);
};
 const onChangeHandler_Password = event => {
  setPassword(event.target.value);
};

async function submit(e){
  try{
      await axios.post("http://localhost:8000/signup",{
          fullname,email,password
      })
      .then(res=>{
          if(res.data==="notexist"){
            window.location.href = "http://localhost:1234/home-design"
          }else if(res.data==="exist"){
              alert("User exists!")
          }
      })
  }
  catch(e){
          console.log(e);
  }
}

  return (
    <div className="container-center-horizontal">
      <div className="sign-up screen">
        <div className="overlap-group1-3">
          <div className="overlap-group-15">
            <div className="white-bg-1"></div>
            <div className="create-account-title poppins-semi-bold-fuscous-gray-28px">{createAccountTitle}</div>
            <div id = "SignUpDiv" className="continue-with-google-box"></div>
            <div className="or-1 poppins-medium-star-dust-14px">{or}</div>
            <img className="full-name-input-box" src="/img/fullnameinputbox.svg" alt="FullNameInputBox" />
            <input className="full-name" type="text" onChange={onChangeHandler_Fullname} placeholder="Fullname"/>
            <input className="Email-address" type="text" onChange={onChangeHandler_Email} placeholder="Email"/>
            <img className="email-input-box" src="/img/emailinputbox.svg" alt="EmailInputBox" />
            <input className="Password" type="password" onChange={onChangeHandler_Password} placeholder="Password"/>
            <img className="password-input-box" src="/img/passwordinputbox.svg" alt="PasswordInputBox" />
            <p className="already-have-an-account-login poppins-normal-white-14px-2">
              <span className="poppins-normal-star-dust-14px">{spanText1}</span>
              <Link to="/sign-in">{spanText2}</Link>
            </p>
            <button type = "submit" className="create-account-button" onClick={submit}></button>
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

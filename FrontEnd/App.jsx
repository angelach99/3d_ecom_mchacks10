import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetailPage from "./components/ProductDetailPage";
import HomeDesign from "./components/HomeDesign";
import ProductSearchResult from "./components/ProductSearchResult";
import UploadPage from "./components/UploadPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import jwt_decode from "jwt-decode";

function App() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  async function handleCallbackResponse(response)
  {
      var userObject = jwt_decode(response.credential);
      setEmail(userObject.email);
      setPassword(userObject.given_name + " " + userObject.family_name);
      setUsername(userObject.given_name + " " + userObject.family_name);
      await axios.post("http://localhost:8000",{ 
        email:email,password:password
       }).then((response) =>{
        console.log(response);
       })
  }
  useEffect(()=>
  {
    /* global google */
    google.accounts.id.initialize(
      {
        client_id:"871350291328-bat466j9gob33uatnqi9fvap34i5kqan.apps.googleusercontent.com",
        callback: handleCallbackResponse
      }
    );
  },[]);

  return (
    <Router>
      <Switch>
        <Route path="/product-detail-page/1">
          <ProductDetailPage {...productDetailPageData} />
        </Route>
        <Route path="/product-detail-page/2">
          <ProductDetailPage {...productDetailPageData} />
        </Route>
        <Route path="/home-design">
          <HomeDesign {...homeDesignData} />
        </Route>
        <Route path="/product-search-result">
          <ProductSearchResult {...productSearchResultData} />
        </Route>
        <Route path="/uploadpage">
          <UploadPage {...uploadPageData} />
        </Route>
        <Route path="/sign-in">
          <SignIn {...signInData} />
        </Route>
        <Route path="/sign-up">
          <SignUp {...signUpData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const productDetailPageData = {
    welcometext: "Welcome,",
    place: "HOME",
    post: "CONTACT",
    maskGroup: "/img/mask-group.png",
    currpic: "/img/currpic.png",
    price: "199,50 SAR",
    title1: "Title",
    number: "1",
    addToCartText: "Add to cart",
    pathHome: "Home",
    pathPost: "Post",
    pathProductName: "Product Name",
    description: "Description:",
    title2: "Related Products",
    x111: "/img/11-1@2x.png",
    windsorWhiteOak: "Windsor White Oak",
    x101: "/img/10-1@2x.png",
    sicilyGreyDcor3060: "Sicily Grey Décor 30×60",
    x961: "/img/9-61@2x.png",
    sardiniaWhite: "Sardinia White",
    x81: "/img/8-1@2x.png",
    sicilyGrey3060: "Sicily Grey 30×60",
    products: "Products",
    teaminfo: "Teaminfo",
    project: "Project",
    projectabout: "Projectabout",
    contactInformation: "Contact Information",
    teamMember: "Team Member",
    copyright2023AllRightsReserved: "Copyright © 2022 | All Rights Reserved.",
    searchicon2: "/img/searchicon@2x.png",
};

const productSearchResultData = {
    iconSearch: "/img/group-5378@2x.png",
    welcometext: "Welcome,",
    place: "HOME",
    post: "CONTACT",
    overlapGroup10: "/img/image-11.png",
    t: "CATALOG",
    loremIpsumIsSimpl: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    showingnumofitem: "Showing",
    x111: "/img/11-1-1@2x.png",
    windsorWhiteOak: "Windsor White Oak",
    x141: "/img/desk1.png",
    zurichPearl6060: "Zurich Pearl 60×60",
    x101: "/img/10-1-1@2x.png",
    sicilyGreyDcor3060: "Sicily Grey Décor 30×60",
    x131: "/img/13-1@2x.png",
    zurichGrey6060: "Zurich Grey 60×60",
    x961: "/img/9-61-1@2x.png",
    sardiniaWhite: "Sardinia White",
    x121: "/img/12-1@2x.png",
    zurichDarkGrey6060: "Zurich Dark Grey 60×60",
    x81: "/img/8-1-1@2x.png",
    sicilyGrey3060: "Sicily Grey 30×60",
    products: "Products",
    teaminfo: "Teaminfo",
    project: "Project",
    projectabout: "Projectabout",
    contactInformation: "Contact Information",
    teamMember: "Team Member",
    copyright2023AllRightsReserved: "Copyright © 2022 | All Rights Reserved.",
};

const homeDesignData = {
    welcometext: "Welcome",
    place: "HOME",
    postbutton: "UPLOAD",
    productstitle: "Products",
    productdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    group1Pics: "/img/group1pics.png",
    productname1: "Bathroom Tiles",
    productdescription1: "Ante mus blandit sapien sociosqu per consequat ad.",
    group2Pic1: "/img/group2pic-1.png",
    productname2: "Marble",
    productdescripti2: "Ante mus blandit sapien sociosqu",
    group2Pic2: "/img/group2pic@2x.png",
    productname3: "Outdoor Flooring",
    productdescript3: "Ante mus blandit sapien sociosqu per consequat ad.",
    group4Pic: "/img/group4pic@2x.png",
    productname4: "Kitchen Interior",
    productdescript4: "Ante mus blandit sapien sociosqu per consequat ad.",
    homebg: "/img/homebg.png",
    hometext: "/img/rectangle-1085.png",
    projectname: "New Generation Ceramic Tile",
    projectdetails: "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.",
    products: "Products",
    teaminfo: "Teaminfo",
    project: "Project",
    projectabout: "Projectabout",
    contactInformation: "Contact Information",
    teamMember: "Team Member",
    copyright2023AllRightsReserved: "Copyright © 2022 | All Rights Reserved.",
    group5251: "/img/group-5251.png",
    vector2: "/img/group-5251.png",
};

const uploadPageData = {
    uploadIcon: "/img/upload-icon@2x.png",
    spanText1: "Drag & drop files or",
    spanText2: " ",
    spanText3: "Browse",
    supportedFormatesJpegPng: "Supported formates: JPEG, PNG",
    productname: "Product Name:",
    description: "Description:",
    price: "Price:",
    submittext: "Submit",
};

const signInData = {
    signInHeading: "Sign In",
    or: "- OR -",
    emailaddresstext: "Email Address",
    passwordtext: "Password",
    signintext: "Sign In",
    spanText1: "Don’t have an account? ",
    spanText2: "Sign Up",
    abstraction: "/img/abstraction.png",
    spanText3: <React.Fragment>All of our Products<br /></React.Fragment>,
    spanText4: "has 3D models in AR views",
    theBestECommerce: "The best  e-commerce platform that support AR",
};

const signUpData = {
    createAccountTitle: "Create Account",
    or: "- OR -",
    fullName: "Full Name",
    emailAddress: "Email Address",
    password: "Password",
    spanText1: "Already have an account? ",
    spanText2: "Login",
    createaccounttext: "Create Account",
    abstraction: "/img/abstraction.png",
    spanText3: <React.Fragment>All of our Products<br /></React.Fragment>,
    spanText4: "has 3D models in AR views",
    theBestECommerce: "The best  e-commerce platform that support AR",
};


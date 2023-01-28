import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import EmailAddress from "./components/EmailAddress";
import SignUp from "./components/SignUp";
import Group5407 from "./components/Group5407";
import Group5393 from "./components/Group5393";
import Group5405 from "./components/Group5405";
import ProductSearchResult from "./components/ProductSearchResult";
import HomeDesign from "./components/HomeDesign";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <div className="container-center-horizontal">
            <div className="sign-in screen">
              <div className="overlap-group3-2">
                <div className="overlap-group2-2">
                  <div className="white-bg-1"></div>
                  <div className="language-1">
                    <div className="surname-1 poppins-normal-star-dust-12px">English (UK)</div>
                    <img className="polygon-1-1" src="/img/polygon-1.svg" alt="Polygon 1" />
                  </div>
                  <div className="sign-in-1 poppins-semi-bold-fuscous-gray-28px">Sign In</div>
                  <div className="continue-with-google-1"></div>
                  <div className="continue-with-facebook-1"></div>
                  <div className="or-1 poppins-medium-star-dust-14px">- OR -</div>
                  <EmailAddress emailAddress="Email Address" line1="/img/line-1.svg" />
                  <EmailAddress emailAddress="Password" line1="/img/line-1-1.svg" className="password" />
                  <div className="overlap-group-16">
                    <div className="sign-in-2 poppins-semi-bold-white-16px">Sign In</div>
                  </div>
                  <p className="dont-have-an-account-sign-up poppins-normal-white-14px-2">
                    <span className="poppins-normal-star-dust-14px">Don’t have an account? </span>
                    <span className="poppins-normal-pewter-blue-14px">Sign Up</span>
                  </p>
                  <img className="abstraction-1" src="/img/abstraction.png" alt="Abstraction" />
                </div>
                <div className="overlap-group1-4">
                  <div className="ellipse-1-1"></div>
                  <div className="ellipse-2-1"></div>
                  <img className="polygon-2-1" src="/img/polygon-2.svg" alt="Polygon 2" />
                </div>
                <h1 className="all-of-our-products-1 poppins-medium-white-44px">
                  <span className="poppins-medium-white-44px">
                    All of our Products
                    <br />
                  </span>
                  <span className="poppins-bold-white-44px">has 3D models in AR views</span>
                </h1>
                <p className="the-best-e-commerce-1 roboto-normal-white-25px">
                  The best&nbsp;&nbsp;e-commerce platform that support AR
                </p>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/sign-up">
          <SignUp {...signUpData} />
        </Route>
        <Route path="/product-detail-page">
          <div className="container-center-horizontal">
            <div className="product-detail-page screen">
              <img className="vector-7" src="/img/vector-5.svg" alt="Vector" />
              <div className="group-container-2">
                <div className="overlap-group7-1">
                  <div className="overlap-group-17">
                    <div className="rectangle-1167"></div>
                    <img className="mask-group-5" src="/img/mask-group-4.png" alt="Mask group" />
                  </div>
                  <h1 className="t-7 proximanova-bold-woodsmoke-48px">Product Name</h1>
                  <p className="product-short-descri proximanova-regular-normal-storm-dust-20px">
                    Product Short Description senectus et netus et malesuada fames ac turpis egestas. Vesitbulum tortor
                    quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
                    semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
                  </p>
                  <img className="mask-group-6" src="/img/mask-group.png" alt="Mask group" />
                  <div className="price">199,50 SAR</div>
                  <div className="group-5261 poppins-normal-white-20px">
                    <div className="place-4">Home</div>
                    <div className="place-5">Post</div>
                    <div className="product-name">Product Name</div>
                  </div>
                  <img className="vector-8" src="/img/vector-8.svg" alt="Vector 8" />
                  <img className="vector-9" src="/img/vector-8.svg" alt="Vector 9" />
                  <div className="rectangle-1216"></div>
                  <img className="group-5379" src="/img/group-5379.png" alt="Group 5379" />
                  <Group5407 />
                </div>
                <div className="group-5406">
                  <Group5393 />
                  <Group5393 />
                  <Group5393 />
                </div>
                <div className="group-5405-5">
                  <div className="overlap-group2-3">
                    <img className="line-10" src="/img/line-10.svg" alt="Line 10" />
                    <div className="number">1</div>
                    <div className="line-container">
                      <img className="line-11" src="/img/line-11.svg" alt="Line 11" />
                      <img className="line-12" src="/img/line-10.svg" alt="Line 12" />
                    </div>
                  </div>
                  <div className="overlap-group-18">
                    <div className="add-to-cart">Add to cart</div>
                  </div>
                  <div className="overlap-group1-5">
                    <img className="icon-heart" src="/img/heart-1@2x.png" alt="icon-heart" />
                  </div>
                </div>
              </div>
              <div className="mask-group-container">
                <img className="mask-group-4" src="/img/mask-group-1@2x.png" alt="Mask group" />
                <img className="mask-group-4" src="/img/mask-group-2@2x.png" alt="Mask group" />
                <img className="mask-group-4" src="/img/mask-group-3@2x.png" alt="Mask group" />
              </div>
              <div className="overlap-group9-1">
                <p className="lorem-ipsum-dolor-si">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare euismod arcu, ac laoreet metus
                  pulvinar feugiat. Praesent in feugiat ante, a dictum nunc. Pellentesque convallis tortor quis purus
                  finibus aliquet. In hac habitasse platea dictumst. Proin vestibulum ante ac faucibus tristique.
                  Integer quis efficitur dolor, at dignissim dolor.
                </p>
                <div className="group-container-3">
                  <div className="group-5389">
                    <div className="related-products">Related Products</div>
                    <div className="overlap-group-19">
                      <img className="line-15" src="/img/line-15.svg" alt="Line 15" />
                    </div>
                  </div>
                  <div className="group-5390">
                    <div className="overlap-group-14">
                      <img className="x11-1-1" src="/img/11-1@2x.png" alt="11 1" />
                      <div className="overlap-group-15">
                        <div className="rectangle-113"></div>
                        <Group5405 />
                        <div className="windsor-white-oak-1 proximanova-normal-woodsmoke-26px">Windsor White Oak</div>
                      </div>
                    </div>
                    <div className="overlap-group-14">
                      <img className="x10-1-1" src="/img/10-1@2x.png" alt="10 1" />
                      <div className="overlap-group-20">
                        <div className="rectangle-113"></div>
                        <Group5405 />
                        <div className="sicily-grey-dcor-3060-1 proximanova-normal-woodsmoke-26px">
                          Sicily Grey Décor 30×60
                        </div>
                      </div>
                    </div>
                    <div className="overlap-group-14">
                      <img className="x9-61-1" src="/img/9-61@2x.png" alt="9 61" />
                      <div className="overlap-group-21">
                        <div className="rectangle-113"></div>
                        <Group5405 />
                        <div className="sardinia-white-1 proximanova-normal-woodsmoke-26px">Sardinia White</div>
                      </div>
                    </div>
                    <div className="overlap-group4-2">
                      <img className="x8-1-1" src="/img/8-1@2x.png" alt="8 1" />
                      <div className="overlap-group-15">
                        <div className="rectangle-113"></div>
                        <Group5405 />
                        <div className="sicily-grey-3060-1 proximanova-normal-woodsmoke-26px">Sicily Grey 30×60</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group8-2">
                <img className="vector-11" src="/img/vector.svg" alt="Vector" />
                <div className="flex-col-8">
                  <div className="flex-row-4">
                    <img className="vector-12" src="/img/vector-6.svg" alt="Vector" />
                    <div className="flex-col-9">
                      <div className="products-2 poppins-semi-bold-white-14px">Products</div>
                      <div className="sand-stone-stone-cement-soft-stone-2 poppins-normal-white-14px-2">
                        <span className="poppins-normal-white-14px">
                          Sand Stone
                          <br />
                        </span>
                        <span className="poppins-normal-delta-14px">
                          Stone
                          <br />
                          Cement
                          <br />
                          Soft Stone
                        </span>
                      </div>
                    </div>
                    <div className="service-container-2">
                      <div className="services-2 poppins-semi-bold-white-14px">Services</div>
                      <div className="measurement-service-2 poppins-normal-delta-14px">
                        Measurement Service
                        <br />
                        product Advice
                        <br />
                        interior Design
                      </div>
                    </div>
                    <div className="group-5219-2">
                      <div className="contact-information-2 poppins-semi-bold-white-14px">Contact Information</div>
                      <p className="address-2 poppins-normal-white-14px">
                        3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, <br />
                        an Nuzhah, Riyadh 12474, <br />
                        saudi Arabia
                      </p>
                    </div>
                  </div>
                  <div className="flex-row-5">
                    <div className="flex-col-10">
                      <div className="icon-container-2">
                        <img className="icon-facebook-2" src="/img/group-402@2x.png" alt="icon-facebook" />
                        <img className="icon-twitter-2" src="/img/group-401@2x.png" alt="icon-twitter" />
                        <img className="icon-instagram-2" src="/img/group-400@2x.png" alt="icon-instagram" />
                      </div>
                      <p className="copyright-2022-all-rights-reserved-2 valign-text-middle proximanova-regular-normal-white-9px">
                        Copyright © 2022 | All Rights Reserved.
                      </p>
                    </div>
                    <p className="created-with-love-by-thecreationdesign-2 valign-text-middle proximanova-regular-normal-white-9px">
                      <span>
                        <span className="proximanova-regular-normal-white-9px">Created with love by </span>
                        <a href="http://www.thecreation.design" target="_blank">
                          <span className="proximanova-bold-white-9px">thecreation.design</span>
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/product-search-result">
          <ProductSearchResult {...productSearchResultData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const fullName1Data = {
    fullName: "Full Name",
};

const fullName2Data = {
    fullName: "Email Address",
    className: "email-address-2",
};

const fullName3Data = {
    fullName: "Password",
    className: "password-1",
};

const signUpData = {
    surname: "English (UK)",
    createAccount1: "Create Account",
    image2: "/img/image-2@2x.png",
    continueWithGoogle: "Continue with Google",
    image3: "/img/image-3@2x.png",
    continueWithFacebook: "Continue with Facebook",
    or: "- OR -",
    createAccount2: "Create Account",
    spanText1: "Already have an account? ",
    spanText2: "Login",
    abstraction: "/img/abstraction.png",
    spanText3: <React.Fragment>All of our Products<br /></React.Fragment>,
    spanText4: "has 3D models in AR views",
    theBestECommerce: "The best  e-commerce platform that support AR",
    fullName1Props: fullName1Data,
    fullName2Props: fullName2Data,
    fullName3Props: fullName3Data,
};

const group54071Data = {
    className: "group-5388",
};

const group53252Data = {
    className: "group-5326",
};

const group53253Data = {
    className: "group-5327",
};

const group54051Data = {
    className: "group-5405-1",
};

const group54052Data = {
    className: "group-5405-2",
};

const group54053Data = {
    className: "group-5405-1",
};

const group54054Data = {
    className: "group-5405-2",
};

const group54055Data = {
    className: "group-5405-3",
};

const group54056Data = {
    className: "group-5405-1",
};

const group54057Data = {
    className: "group-5405-1",
};

const component1Data = {
    x151: "/img/15-1@2x.png",
    zurichVision6060: "Zurich Vision 60×60",
    x44999Sar: "449.99 Sar",
    x23799Sar: "237.99 Sar",
    addToCart: "ADD TO CART",
};

const productSearchResultData = {
    group5378: "/img/group-5378-1.png",
    overlapGroup14: "/img/image-11.png",
    t1: "CATALOG",
    loremIpsumIsSimpl1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    loremIpsum: "Lorem Ipsum",
    t2: "Categories",
    loremIpsumIsSimpl2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    overlapGroup4: "/img/mask-group-11@2x.png",
    overlapGroup3: "/img/mask-group-12@2x.png",
    overlapGroup1: "/img/mask-group-13@2x.png",
    showing115Of22Results: "Showing 1 - 15 of 22 results",
    filter: "Filter",
    group: "/img/group@2x.png",
    sortByPrice: "Sort by Price",
    iconSearch: "/img/group-1@2x.png",
    x111: "/img/11-1-1@2x.png",
    windsorWhiteOak: "Windsor White Oak",
    x141: "/img/14-1@2x.png",
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
    loadMore: "LOAD MORE",
    maskGroup: "/img/mask-group-10.png",
    promotionalBanner: "Promotional Banner",
    loremIpsumIsSimpl3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    products: "Products",
    spanText1: <React.Fragment>Sand Stone<br /></React.Fragment>,
    spanText2: <React.Fragment>Stone<br />Cement<br />Soft Stone</React.Fragment>,
    services: "Services",
    measurementService: <React.Fragment>Measurement Service<br />product Advice<br />interior Design</React.Fragment>,
    contactInformation: "Contact Information",
    address: <React.Fragment>3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, <br />an Nuzhah, Riyadh 12474, <br />saudi Arabia</React.Fragment>,
    iconFacebook: "/img/group-402@2x.png",
    iconTwitter: "/img/group-401@2x.png",
    iconInstagram: "/img/group-400@2x.png",
    copyright2022AllRightsReserved: "Copyright © 2022 | All Rights Reserved.",
    spanText3: "Created with love by ",
    spanText4: "thecreation.design",
    group5407Props: group54071Data,
    group53251Props: group53252Data,
    group53252Props: group53253Data,
    group54051Props: group54051Data,
    group54052Props: group54052Data,
    group54053Props: group54053Data,
    group54054Props: group54054Data,
    group54055Props: group54055Data,
    group54056Props: group54056Data,
    group54057Props: group54057Data,
    component1Props: component1Data,
};

const group54072Data = {
    className: "group-5192",
};

const homeDesignData = {
    group5378: "/img/group-5378.png",
    group5194: "/img/mask-group-5.png",
    overlapGroup1: "/img/rectangle-1085.png",
    t1: "New Generation Ceramic Tile",
    penatibusSemVitae: "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.",
    learnMore: "LEARN MORE",
    t2: "Products",
    loremIpsumIsSimpl: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    maskGroup1: "/img/mask-group-9.png",
    bathroomTiles: "Bathroom Tiles",
    anteMusBlanditSap1: "Ante mus blandit sapien sociosqu per consequat ad.",
    maskGroup2: "/img/mask-group-7.png",
    place: "Marble",
    anteMusBlanditSapienSociosqu: "Ante mus blandit sapien sociosqu",
    maskGroup3: "/img/mask-group-6@2x.png",
    outdoorFlooring: "Outdoor Flooring",
    anteMusBlanditSap2: "Ante mus blandit sapien sociosqu per consequat ad.",
    maskGroup4: "/img/mask-group-8@2x.png",
    kitchenInterior: "Kitchen Interior",
    anteMusBlanditSap3: "Ante mus blandit sapien sociosqu per consequat ad.",
    products: "Products",
    spanText1: <React.Fragment>Sand Stone<br /></React.Fragment>,
    spanText2: <React.Fragment>Stone<br />Cement<br />Soft Stone</React.Fragment>,
    services: "Services",
    measurementService: <React.Fragment>Measurement Service<br />product Advice<br />interior Design</React.Fragment>,
    contactInformation: "Contact Information",
    address: <React.Fragment>3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, <br />an Nuzhah, Riyadh 12474, <br />saudi Arabia</React.Fragment>,
    iconFacebook: "/img/group-402@2x.png",
    iconTwitter: "/img/group-401@2x.png",
    iconInstagram: "/img/group-400@2x.png",
    copyright2022AllRightsReserved: "Copyright © 2022 | All Rights Reserved.",
    spanText3: "Created with love by ",
    spanText4: "thecreation.design",
    group5251: "/img/group-5251.png",
    vector4: "/img/group-5251.png",
    group5407Props: group54072Data,
};


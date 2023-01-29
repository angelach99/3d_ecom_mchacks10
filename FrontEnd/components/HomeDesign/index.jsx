import React from "react";
import { Link } from "react-router-dom";
import "./HomeDesign.css";

function HomeDesign(props) {
  const {
    welcometext,
    place,
    postbutton,
    productstitle,
    productdescription,
    group1Pics,
    productname1,
    productdescription1,
    group2Pic1,
    productname2,
    productdescripti2,
    group2Pic2,
    productname3,
    productdescript3,
    group4Pic,
    productname4,
    productdescript4,
    homebg,
    hometext,
    projectname,
    projectdetails,
    products,
    teaminfo,
    project,
    projectabout,
    contactInformation,
    teamMember,
    copyright2023AllRightsReserved,
    group5251,
    vector2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-design screen">
        <div className="flex-row-3">
          <img className="icon-search-1" src="/img/searchicon-2.svg" alt="icon-search" />
          <div className="logo-2"></div>
          <img className="small-man-icon-1" src="/img/smallmanicon-1.svg" alt="smallManIcon" />
          <div className="welcome-text-1 poppins-medium-star-dust-14px">{welcometext}</div>
        </div>
        <div className="flex-col-3">
          <div className="flex-row-4 proximanova-bold-cod-gray-16px">
          <Link to="/home-design">{place}</Link>
            <div className="post-button valign-text-middle">
              <Link to="/UploadPage">{postbutton}</Link>
            </div>
          </div>
          <div className="overlap-group4-1">
            <img className="vector" src="/img/vector-1.svg" alt="Vector" />
            <div className="products-title-group">
              <h1 className="products-title valign-text-middle">{productstitle}</h1>
              <div className="rectangle-1091"></div>
              <p className="product-description">{productdescription}</p>
            </div>
            <div className="group-pics">
              <div className="overlap-group3">
                <img className="group1pics" src={group1Pics} alt="group1pics" />
                <Link to="/product-search-result">
                  <div className="product1-space"></div>
                </Link>
                <div className="product-name1 proximanova-normal-white-28px">{productname1}</div>
                <p className="product-description1 proximanova-regular-normal-nobel-16px">{productdescription1}</p>
              </div>
              <div className="overlap-group1">
                <img className="group2pic" src={group2Pic1} alt="group2pic" />
                <Link to="/product-search-result">
                  <div className="product2-space"></div>
                </Link>
                <div className="product-name2 proximanova-normal-white-28px">{productname2}</div>
                <p className="product-descripti2 proximanova-regular-normal-nobel-16px">{productdescripti2}</p>
              </div>
              <div className="overlap-group-container">
                <div className="overlap-group-4">
                  <img className="group" src={group2Pic2} alt="group2pic" />
                  <Link to="/product-search-result">
                    <div className="product"></div>
                  </Link>
                  <div className="product-name3 proximanova-normal-white-28px">{productname3}</div>
                  <p className="product-descript proximanova-regular-normal-nobel-16px">{productdescript3}</p>
                </div>
                <div className="overlap-group-4">
                  <img className="group" src={group4Pic} alt="group4pic" />
                  <Link to="/product-search-result">
                    <div className="product"></div>
                  </Link>
                  <div className="product-name4 proximanova-normal-white-28px">{productname4}</div>
                  <p className="product-descript proximanova-regular-normal-nobel-16px">{productdescript4}</p>
                </div>
              </div>
            </div>
            <img className="home-bg" src={homebg} alt="HomeBG" />
            <div className="home-text" style={{ backgroundImage: `url(${hometext})` }}>
              <div className="project-name">{projectname}</div>
              <p className="project-details">{projectdetails}</p>
            </div>
          </div>
          <div className="overlap-group5-1">
            <div className="flex-row-5">
              <div className="logo-ending-1"></div>
              <div className="flex-col-4">
                <div className="products-1 poppins-semi-bold-white-14px">{products}</div>
                <div className="team-info-1 poppins-normal-delta-14px">{teaminfo}</div>
              </div>
              <div className="project-container-1">
                <div className="project-1 poppins-semi-bold-white-14px">{project}</div>
                <div className="project-about-1 poppins-normal-delta-14px">{projectabout}</div>
              </div>
              <div className="flex-col-5">
                <div className="contact-information-1 poppins-semi-bold-white-14px">{contactInformation}</div>
                <div className="team-member-1 poppins-normal-white-14px">{teamMember}</div>
              </div>
            </div>
            <div className="flex-row-6">
              <img className="icon-facebook-1" src="/img/fbicon.svg" alt="icon-facebook" />
              <img className="icon-twitter-1" src="/img/twittericon-1.svg" alt="icon-twitter" />
              <div className="insicon-container-1">
                <img className="ins-icon2-1" src="/img/insicon2.svg" alt="insIcon2" />
                <img className="ins-icon-1" src="/img/insicon-1.svg" alt="InsIcon" />
              </div>
            </div>
            <p className="copyright-2023-all-rights-reserved-1 valign-text-middle proximanova-regular-normal-white-9px">
              {copyright2023AllRightsReserved}
            </p>
          </div>
        </div>
        <div className="overlap-group6-1">
          <img className="group-5251" src={group5251} alt="Group 5251" />
          <img className="vector-1" src={vector2} alt="Vector" />
        </div>
      </div>
    </div>
  );
}

export default HomeDesign;

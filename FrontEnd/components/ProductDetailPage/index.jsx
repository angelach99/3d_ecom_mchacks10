import React from "react";
import "./ProductDetailPage.css";

function ProductDetailPage(props) {
  const {
    welcometext,
    place,
    post,
    maskGroup,
    currpic,
    price,
    title1,
    number,
    addToCartText,
    pathHome,
    pathPost,
    pathProductName,
    description,
    title2,
    x111,
    windsorWhiteOak,
    x101,
    sicilyGreyDcor3060,
    x961,
    sardiniaWhite,
    x81,
    sicilyGrey3060,
    products,
    teaminfo,
    project,
    projectabout,
    contactInformation,
    teamMember,
    copyright2023AllRightsReserved,
    searchicon2,
    qrsrc,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="product-detail-page screen">
        <div className="flex-row">
          <img className="icon-search" src="/img/searchicon-1.svg" alt="icon-search" />
          <div className="logo-container">
            <div className="logo"></div>
            <div className="logo-1"></div>
          </div>
          <img className="small-man-icon" src="/img/smallmanicon.svg" alt="smallManIcon" />
          <div className="welcome-text poppins-medium-star-dust-14px">{welcometext}</div>
        </div>
        <div className="flex-col">
          <div className="group-5407 proximanova-bold-cod-gray-16px">
            <div className="place valign-text-middle">{place}</div>
            <div className="post valign-text-middle">{post}</div>
          </div>
          <div className="overlap-group6">
            <img className="mask-group" src={maskGroup} alt="Mask group" />
            <div className="path-space"></div>
            <img className="curr-pic" src={currpic} alt="currPic" />
            <div className="price poppins-normal-black-30px">{price}</div>
            <div className="title poppins-normal-black-30px">{title1}</div>
            <div className="add-to-cary-button"></div>
            <div className="quantaty"></div>
            <div className="number">{number}</div>
            <div className="add-to-cart-text">{addToCartText}</div>
            <div className="path-home poppins-normal-white-20px">{pathHome}</div>
            <div className="path-post poppins-normal-white-20px">{pathPost}</div>
            <div className="path-product-name poppins-normal-white-20px">{pathProductName}</div>
            <div className="description poppins-semi-bold-star-dust-12px">{description}</div>
            <img className="qr-code" src = {qrsrc}></img>
          </div>
          <h1 className="title-1">{title2}</h1>
          <div className="search-result">
            <div className="overlap-group">
              <img className="x11-1" src={x111} alt="11 1" />
              <div className="overlap-group-1">
                <div className="rectangle-113"></div>
                <div className="windsor-white-oak proximanova-normal-woodsmoke-26px">{windsorWhiteOak}</div>
              </div>
            </div>
            <div className="overlap-group">
              <img className="x10-1" src={x101} alt="10 1" />
              <div className="overlap-group-2">
                <div className="rectangle-113"></div>
                <div className="sicily-grey-dcor-3060 proximanova-normal-woodsmoke-26px">{sicilyGreyDcor3060}</div>
              </div>
            </div>
            <div className="overlap-group">
              <img className="x9-61" src={x961} alt="9 61" />
              <div className="overlap-group-3">
                <div className="rectangle-113"></div>
                <div className="sardinia-white proximanova-normal-woodsmoke-26px">{sardiniaWhite}</div>
              </div>
            </div>
            <div className="overlap-group4">
              <img className="x8-1" src={x81} alt="8 1" />
              <div className="overlap-group-1">
                <div className="rectangle-113"></div>
                <div className="sicily-grey-3060 proximanova-normal-woodsmoke-26px">{sicilyGrey3060}</div>
              </div>
            </div>
          </div>
          <div className="overlap-group5">
            <div className="flex-row-1">
              <div className="logo-ending"></div>
              <div className="flex-col-1">
                <div className="products poppins-semi-bold-white-14px">{products}</div>
                <div className="team-info poppins-normal-delta-14px">{teaminfo}</div>
              </div>
              <div className="project-container">
                <div className="project poppins-semi-bold-white-14px">{project}</div>
                <div className="project-about poppins-normal-delta-14px">{projectabout}</div>
              </div>
              <div className="flex-col-2">
                <div className="contact-information poppins-semi-bold-white-14px">{contactInformation}</div>
                <div className="team-member poppins-normal-white-14px">{teamMember}</div>
              </div>
            </div>
            <div className="flex-row-2">
              <img className="icon-facebook" src="/img/fbicon.svg" alt="icon-facebook" />
              <img className="icon-twitter" src="/img/twittericon.svg" alt="icon-twitter" />
              <div className="insicon-container">
                <img className="ins-icon2" src="/img/insicon2.svg" alt="insIcon2" />
                <img className="ins-icon" src="/img/insicon.svg" alt="InsIcon" />
              </div>
            </div>
            <p className="copyright-2023-all-rights-reserved valign-text-middle proximanova-regular-normal-white-9px">
              {copyright2023AllRightsReserved}
            </p>
          </div>
          <img className="search-icon" src={searchicon2} alt="SearchIcon" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;

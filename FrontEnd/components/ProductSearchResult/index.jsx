import React from "react";
import { Link } from "react-router-dom";
import "./ProductSearchResult.css";

function ProductSearchResult(props) {
  const {
    iconSearch,
    welcometext,
    place,
    post,
    overlapGroup10,
    t,
    loremIpsumIsSimpl,
    showingnumofitem,
    x111,
    windsorWhiteOak,
    x141,
    zurichPearl6060,
    x101,
    sicilyGreyDcor3060,
    x131,
    zurichGrey6060,
    x961,
    sardiniaWhite,
    x121,
    zurichDarkGrey6060,
    x81,
    sicilyGrey3060,
    products,
    teaminfo,
    project,
    projectabout,
    contactInformation,
    teamMember,
    copyright2023AllRightsReserved,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="product-search-result screen">
        <div className="logo-3"></div>
        <div className="flex-row-7">
          <img className="icon-search-2" src={iconSearch} alt="icon-search" />
          <img className="small-man-icon-2" src="/img/smallmanicon-2.svg" alt="smallManIcon" />
          <div className="welcome-text-2 poppins-medium-star-dust-14px">{welcometext}</div>
        </div>
        <div className="flex-row-8 proximanova-bold-cod-gray-16px">
          <div className="place-2 valign-text-middle">{place}</div>
          <div className="post-1 valign-text-middle">{post}</div>
        </div>
        <div className="overlap-group10" style={{ backgroundImage: `url(${overlapGroup10})` }}>
          <div className="rectangle-1205"></div>
          <h1 className="t">{t}</h1>
          <p className="lorem-ipsum-is-simpl">{loremIpsumIsSimpl}</p>
        </div>
        <div className="showing-num-of-item poppins-medium-star-dust-14px">{showingnumofitem}</div>
        <div className="result-container-1">
          <div className="search-result-1">
            <Link to="/product-detail-page">
              <div className="result">
                <div className="overlap-group-5">
                  <img className="x11-1-1" src={x111} alt="11 1" />
                  <div className="overlap-group-7">
                    <div className="windsor-white-oak-1 proximanova-normal-woodsmoke-26px">{windsorWhiteOak}</div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="result-container">
              <Link to="/product-detail-page">
                <div className="result">
                  <div className="overlap-group-5">
                    <img className="desk1" src={x141} alt="desk1" />
                    <div className="overlap-group-6">
                      <div className="zurich-pearl-6060 proximanova-normal-woodsmoke-26px">{zurichPearl6060}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/product-detail-page">
                <div className="result">
                  <div className="overlap-group-5">
                    <img className="x10-1-1" src={x101} alt="10 1" />
                    <div className="overlap-group-8">
                      <div className="sicily-grey-dcor-3060-1 proximanova-normal-woodsmoke-26px">
                        {sicilyGreyDcor3060}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="result-container">
              <Link to="/product-detail-page">
                <div className="result">
                  <div className="overlap-group-5">
                    <img className="x13-1" src={x131} alt="13 1" />
                    <div className="overlap-group-6">
                      <div className="zurich-grey-6060 proximanova-normal-woodsmoke-26px">{zurichGrey6060}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/product-detail-page">
                <div className="result">
                  <div className="overlap-group-5">
                    <img className="x9-61-1" src={x961} alt="9 61" />
                    <div className="overlap-group-9">
                      <div className="sardinia-white-1 proximanova-normal-woodsmoke-26px">{sardiniaWhite}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="result-container">
              <Link to="/product-detail-page">
                <div className="result">
                  <div className="overlap-group-5">
                    <img className="x12-1" src={x121} alt="12 1" />
                    <div className="overlap-group-10">
                      <div className="zurich-dark-grey-6060 proximanova-normal-woodsmoke-26px">
                        {zurichDarkGrey6060}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/product-detail-page">
                <div className="result">
                  <div className="overlap-group-5">
                    <img className="x8-1-1" src={x81} alt="8 1" />
                    <div className="overlap-group-11">
                      <div className="sicily-grey-3060-1 proximanova-normal-woodsmoke-26px">{sicilyGrey3060}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="overlap-group9">
          <div className="flex-row-9">
            <div className="logo-ending-2"></div>
            <div className="flex-col-6">
              <div className="products-2 poppins-semi-bold-white-14px">{products}</div>
              <div className="team-info-2 poppins-normal-delta-14px">{teaminfo}</div>
            </div>
            <div className="project-container-2">
              <div className="project-2 poppins-semi-bold-white-14px">{project}</div>
              <div className="project-about-2 poppins-normal-delta-14px">{projectabout}</div>
            </div>
            <div className="flex-col-7">
              <div className="contact-information-2 poppins-semi-bold-white-14px">{contactInformation}</div>
              <div className="team-member-2 poppins-normal-white-14px">{teamMember}</div>
            </div>
          </div>
          <div className="flex-row-10">
            <img className="icon-facebook-2" src="/img/fbicon.svg" alt="icon-facebook" />
            <img className="icon-twitter-2" src="/img/twittericon.svg" alt="icon-twitter" />
            <div className="insicon-container-2">
              <img className="ins-icon2-2" src="/img/cinsicon2.svg" alt="insIcon2" />
              <img className="ins-icon-2" src="/img/insicon.svg" alt="InsIcon" />
            </div>
          </div>
          <p className="copyright-2023-all-rights-reserved-2 valign-text-middle proximanova-regular-normal-white-9px">
            {copyright2023AllRightsReserved}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductSearchResult;

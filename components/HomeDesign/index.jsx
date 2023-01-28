import React from "react";
import { Link } from "react-router-dom";
import Group5407 from "../Group5407";
import "./HomeDesign.css";

function HomeDesign(props) {
  const {
    group5378,
    group5194,
    overlapGroup1,
    t1,
    penatibusSemVitae,
    learnMore,
    t2,
    loremIpsumIsSimpl,
    maskGroup1,
    bathroomTiles,
    anteMusBlanditSap1,
    maskGroup2,
    place,
    anteMusBlanditSapienSociosqu,
    maskGroup3,
    outdoorFlooring,
    anteMusBlanditSap2,
    maskGroup4,
    kitchenInterior,
    anteMusBlanditSap3,
    products,
    spanText1,
    spanText2,
    services,
    measurementService,
    contactInformation,
    address,
    iconFacebook,
    iconTwitter,
    iconInstagram,
    copyright2022AllRightsReserved,
    spanText3,
    spanText4,
    group5251,
    vector4,
    group5407Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-design screen">
        <div className="overlap-group6">
          <img className="group-5378-1" src={group5378} alt="Group 5378" />
          <img className="vector-2" src="/img/vector-5.svg" alt="Vector" />
        </div>
        <Group5407 className={group5407Props.className} />
        <div className="group-5194" style={{ backgroundImage: `url(${group5194})` }}>
          <div className="overlap-group1-2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <h1 className="t-5">{t1}</h1>
            <p className="penatibus-sem-vitae">{penatibusSemVitae}</p>
            <div className="overlap-group-12">
              <Link to="/product-search-result">
                <div className="rectangle-25"></div>
              </Link>
              <div className="learn-more valign-text-middle">{learnMore}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group8-1">
          <img className="vector-4" src="/img/vector-4.svg" alt="Vector" />
          <div className="group-5209">
            <div className="group-5201">
              <div className="t-6 valign-text-middle proximanova-bold-woodsmoke-48px">{t2}</div>
              <div className="rectangle-1091"></div>
            </div>
            <p className="lorem-ipsum-is-simpl-3 proximanova-regular-normal-storm-dust-20px">{loremIpsumIsSimpl}</p>
            <div className="group-5208">
              <div className="overlap-group3-1">
                <img className="mask-group-2" src={maskGroup1} alt="Mask group" />
                <Link to="/product-search-result">
                  <div className="rectangle-1108"></div>
                </Link>
                <div className="bathroom-tiles proximanova-normal-white-28px">{bathroomTiles}</div>
                <p className="ante-mus-blandit-sap-1 proximanova-regular-normal-nobel-16px">{anteMusBlanditSap1}</p>
              </div>
              <div className="overlap-group1-3">
                <img className="mask-group-3" src={maskGroup2} alt="Mask group" />
                <Link to="/product-search-result">
                  <div className="rectangle-1108-1"></div>
                </Link>
                <div className="place-3 proximanova-normal-white-28px">{place}</div>
                <p className="ante-mus-blandit-sapien-sociosqu proximanova-regular-normal-nobel-16px">
                  {anteMusBlanditSapienSociosqu}
                </p>
              </div>
              <div className="overlap-group-container-3">
                <div className="overlap-group-11">
                  <div className="overlap-group-13">
                    <img className="mask-group-1" src={maskGroup3} alt="Mask group" />
                    <Link to="/product-search-result">
                      <div className="rectangle-11-2"></div>
                    </Link>
                    <div className="outdoor-flooring proximanova-normal-white-28px">{outdoorFlooring}</div>
                  </div>
                  <p className="ante-mus-blandit-sap proximanova-regular-normal-nobel-16px">{anteMusBlanditSap2}</p>
                </div>
                <div className="overlap-group-11">
                  <img className="mask-group-1" src={maskGroup4} alt="Mask group" />
                  <Link to="/product-search-result">
                    <div className="rectangle-11-2"></div>
                  </Link>
                  <div className="kitchen-interior proximanova-normal-white-28px">{kitchenInterior}</div>
                  <p className="ante-mus-blandit-sap proximanova-regular-normal-nobel-16px">{anteMusBlanditSap3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-416-1">
          <div className="flex-col-5">
            <div className="flex-row-2">
              <img className="vector-5" src="/img/vector-6.svg" alt="Vector" />
              <div className="flex-col-6">
                <div className="products-1 poppins-semi-bold-white-14px">{products}</div>
                <div className="sand-stone-stone-cement-soft-stone-1 poppins-normal-white-14px-2">
                  <span className="poppins-normal-white-14px">{spanText1}</span>
                  <span className="poppins-normal-delta-14px">{spanText2}</span>
                </div>
              </div>
              <div className="service-container-1">
                <div className="services-1 poppins-semi-bold-white-14px">{services}</div>
                <div className="measurement-service-1 poppins-normal-delta-14px">{measurementService}</div>
              </div>
              <div className="group-5219-1">
                <div className="contact-information-1 poppins-semi-bold-white-14px">{contactInformation}</div>
                <p className="address-1 poppins-normal-white-14px">{address}</p>
              </div>
            </div>
            <div className="flex-row-3 proximanova-regular-normal-white-9px">
              <div className="flex-col-7">
                <div className="icon-container-1">
                  <img className="icon-facebook-1" src={iconFacebook} alt="icon-facebook" />
                  <img className="icon-twitter-1" src={iconTwitter} alt="icon-twitter" />
                  <img className="icon-instagram-1" src={iconInstagram} alt="icon-instagram" />
                </div>
                <p className="copyright-2022-all-rights-reserved-1 valign-text-middle">
                  {copyright2022AllRightsReserved}
                </p>
              </div>
              <p className="created-with-love-by-thecreationdesign-1 valign-text-middle">
                <span>
                  <span className="proximanova-regular-normal-white-9px">{spanText3}</span>
                  <a href="http://www.thecreation.design" target="_blank">
                    <span className="proximanova-bold-white-9px">{spanText4}</span>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="overlap-group7">
          <img className="group-5251" src={group5251} alt="Group 5251" />
          <img className="vector-6" src={vector4} alt="Vector" />
        </div>
      </div>
    </div>
  );
}

export default HomeDesign;

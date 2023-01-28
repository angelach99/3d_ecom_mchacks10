import React from "react";
import "./Component1.css";

function Component1(props) {
  const { x151, zurichVision6060, x44999Sar, x23799Sar, addToCart } = props;

  return (
    <div className="result1">
      <div className="overlap-group8">
        <img className="x15-1" src={x151} alt="15 1" />
        <div className="overlap-group1-1">
          <div className="zurich-vision-6060 proximanova-normal-woodsmoke-26px">{zurichVision6060}</div>
          <div className="group-5236">
            <div className="x44999-sar-2 proximanova-regular-normal-pumice-12px">{x44999Sar}</div>
            <div className="x23799-sar proximanova-normal-woodsmoke-18px">{x23799Sar}</div>
          </div>
          <div className="overlap-group-12">
            <div className="add-to-car-t valign-text-middle">{addToCart}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;

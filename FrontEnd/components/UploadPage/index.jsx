import React from "react";
import "./UploadPage.css";

function UploadPage(props) {
  const {
    uploadIcon,
    spanText1,
    spanText2,
    spanText3,
    supportedFormatesJpegPng,
    productname,
    description,
    price,
    submittext,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="uploadpage screen">
        <div className="overlap-group-13 mulish-bold-granite-gray-15-1px">
          <div className="file-upload-area">
            <img className="upload-icon" src={uploadIcon} alt="Upload icon" />
            <p className="drag-drop-files-or-browse valign-text-middle">
              <span>
                <span className="span">{spanText1}</span>
                <span className="span-1">{spanText2}</span>
                <span className="span-2">{spanText3}</span>
              </span>
            </p>
            <div className="supported-formates-jpeg-png valign-text-middle">{supportedFormatesJpegPng}</div>
          </div>
          <div className="productname valign-text-middle">{productname}</div>
          <div className="product-name-input"></div>
          <div className="description-1 valign-text-middle">{description}</div>
          <div className="description-input"></div>
          <div className="price-1 valign-text-middle">{price}</div>
          <div className="price-input"></div>
          <div className="submit-container">
            <img className="submit-button" src="/img/submitbutton.svg" alt="SubmitButton" />
            <div className="submit-text poppins-semi-bold-white-16px">{submittext}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;

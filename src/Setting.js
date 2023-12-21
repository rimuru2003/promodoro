import React from "react";
import { useState } from "react";

const Setting = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handlePopupClick() {
    setIsPopupOpen(!isPopupOpen);
  }
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  ></link>;
  return (
    <div>
      <div className="op">
        <button className="li" onClick={handlePopupClick}>
          Settings
        </button>
      </div>
      <div className="hii">
        {isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup-content"></div>

            <button className="kl" onClick={handlePopupClick}>
              <i class="fa fa-close"></i>X
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;

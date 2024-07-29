import React from "react";
import { SlEnvolope } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { IoMdHeadset } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
function MainHeader() {
  return (
    <>
      <div className="header-top">
        <div className="left-side-bar">
          <ul>
            <li>
              <div className="header-icon">
                <p>
                  {" "}
                  <SlEnvolope />
                </p>
              </div>
              <div className="inner-text">
                <h6>Mail Us</h6>
                <p>swasthyaclinics@hotmail.com</p>
              </div>
            </li>
            <li>
              <div className="header-icon">
                <p>
                  {" "}
                  <FaRegClock />
                </p>
              </div>
              <div className="inner-text">
                <h6>Mon to Sat</h6>
                <p>06:00 PM To 09:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="right-side-bar">
          <div className="contact-no">
            <div className="header-icon">
              <p>
                <IoMdHeadset />
              </p>
            </div>
            <div className="link-ph">
              <h6>Call Us</h6>
              <p>1234567890</p>
            </div>
          </div>
          <ul>
            <li>
              <p>
                <FaInstagram />
              </p>
            </li>
            <li>
              <p>
                <CiFacebook />
              </p>
            </li>
            <li>
              <p>
                <CiLinkedin />
              </p>
            </li>
            <li>
              <p>
                <CiTwitter />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export { MainHeader };

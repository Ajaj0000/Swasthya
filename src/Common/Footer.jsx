import React from "react";
import img from "../Image/1663225919_1.webp";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="container-footer">
          <div className="footer-row">
            <div className="first-content">
              <div className="footer-logo">
                <img src={img} alt="" />
              </div>
              <p>
                Swasthya Clinic, Jaipur is one of the advanced super-specialty
                clinics, that provides world-class treatment for asthma,
                allergy,diabetes, fever, joint pain, headache and migraine, etc.
                book an appointment now at +91 7300041110.
              </p>
              <div className="social-icon">
                <li>
                  <CiFacebook />
                </li>
                <li>
                  <CiTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <CiLinkedin />
                </li>
              </div>
            </div>
            <div className="second-content">
              <div className="link-footer">
                <div className="head-footer">
                  <h4>Quicks Link</h4>
                  <div className="divvv"></div>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                     
                    <Link to="/">
                    {" "}
                    <span>
                        <FaArrowRight />
                      </span>{" "}
                      Home
                    </Link>
                    </li>
                    <li>
                      {" "}
                   <Link to="/about">
                   <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      About Us
                   </Link>
                    </li>
                    <li>
                      {" "}
                     <Link to="/covid-19">
                     <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      COVID-19 Care
                     </Link>
                    </li>
                    <li>
                      {" "}
                     <Link to="/photo">
                     <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      Photo Gallery
                     </Link>
                    </li>
                    <li>
                      {" "}
                   <Link to="/video">
                   <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      Video Gallery
                   </Link>
                    </li>
                    <li>
                      {" "}
                     <Link to="/faq">
                     <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      FAQs
                     </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="third-content">
              <div className="third-footer-link">
                <div className="head-footer">
                  <h4>Service</h4>
                  <div className="divvv"></div>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      {" "}
                     <Link to="/faq">
                     <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      Diabetes
                     </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/faq">
                     <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      High BP
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/faq">
                     <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      Heart Disease
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/faq">
                     <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      Arthritis & Joint Pain
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/faq">
                     <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      Headache
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/faq">
                     <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      Anoemia
                      </Link>
                    </li>
                    <li>
                    <Link to="/faq">
                     <span>
                        {" "}
                        <FaArrowRight />{" "}
                      </span>
                      Fever
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="fourth-content">
              <div className="fourth-link">
                <h4>Contact</h4>

                <li>
                  <span>
                    <IoLocationSharp className="dot" />
                  </span>
                  <a href="/">
                    <strong>Swasthya Clinic-</strong>
                    1330, Kisan Marg, Barkat Nagar, Tonk Phatak, Jaipur
                  </a>
                </li>
                <li>
                  <span>
                    <FaRegClock className="dot" />
                  </span>
                  <a href="/">Mon To Sat - 06:00 PM To 09:00 PM</a>
                </li>
                <li>
                  <span>
                    <IoLocationSharp className="dot" />
                  </span>
                  <a href="/">
                    <strong> CK Birla Hospital-</strong>
                    Near Triveni Flyover, Gopalpura Bypass Road, Jaipur
                  </a>
                </li>
                <li>
                  <span>
                    <FaRegClock className="dot" />
                  </span>
                  <a href="/">Mon To Sat - 09:30 AM To 06:00 AM</a>
                </li>
                <li>
                  <a href="/">
                    <span>
                      <IoLocationSharp className="dot" />
                    </span>
                    <strong>Integrity Healthcare-</strong>
                    151, 3, Shipra Path, Mansarovar, Jaipur
                  </a>
                </li>
                <li>
                  <span>
                    <FaRegClock className="dot" />
                  </span>
                  <a href="/">Mon To Sat - 06:00 PM To 07:00 PM</a>
                </li>

                <div className="fourth-contect-no">
                  <li>
                    <span className="fa">
                      <FaPhoneAlt />
                    </span>
                    <a href="/">1234567890</a>
                  </li>
                  <li>
                    <span className="fa">
                      <SlEnvolope />
                    </span>
                    <a href="/">swasthyaclinics@hotmail.com</a>
                  </li>
                </div>
                <div className="footer-btn">
                 <Link to="/contectus">
                 <button>Book Appointment</button> 
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div"></div>
      <div className="footer-bottom">
        <p>
          Copyright © 2022 Swasthyaclinics All Rights Reserved. Design and
          Develop By <span>Farman khan</span>
        </p>
      </div>
    </>
  );
}
export { Footer };

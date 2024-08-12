import React, { useEffect, useState } from "react";
import img from "../Image/logo 2.jpg";
import {
  FaInstagram,
  FaRegClock,
  FaPhoneAlt,
  FaArrowRight,
  FaLongArrowAltUp,
  FaHeadset,
} from "react-icons/fa";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { IoLocationSharp, IoCallSharp, IoLogoWhatsapp } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

function Footer() {
  const [isToggled, setIsToggled] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const handleClickIcon1 = () => {
    setIsToggled(true); // Or whatever logic you want to handle when icon-1 is clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setButtonVisible(true);
      } else {
        setButtonVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="main-footer">
        <div className="container-footer">
          <div className="footer-row">
            <div className="first-content">
              <div className="footer-logo">
                <img src={img} alt="Gentle Clinic Logo" />
              </div>
              <p>
                Gentle Clinic, Jaipur is one of the advanced super-specialty
                clinics, that provides world-class treatment for asthma,
                allergy, diabetes, fever, joint pain, headache and migraine,
                etc. book an appointment now at +91 1234567890.
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
                  <h4>Quick Links</h4>
                  <div className="divvv"></div>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link to="/">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/covid-19">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
                        COVID-19 Care
                      </Link>
                    </li>
                    <li>
                      <Link to="/photo">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
                        Photo Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/video">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
                        Video Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
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
                  <h4>Services</h4>
                  <div className="divvv"></div>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link to="/treatment">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
                        Diabetes
                      </Link>
                    </li>
                    <li>
                      <Link to="/treatment">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
                        High BP
                      </Link>
                    </li>
                    <li>
                      <Link to="/treatment">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
                        Heart Disease
                      </Link>
                    </li>
                    <li>
                      <Link to="/treatment">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
                        Arthritis & Joint Pain
                      </Link>
                    </li>
                    <li>
                      <Link to="/treatment">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
                        Headache
                      </Link>
                    </li>
                    <li>
                      <Link to="/treatment">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
                        Anemia
                      </Link>
                    </li>
                    <li>
                      <Link to="/treatment">
                        <span>
                          <FaArrowRight />
                        </span>{" "}
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
                    <strong>Gentle Clinic-</strong> Govindpura, Govindam Tower,
                    Kalwar road, Jaipur
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
                    <strong> Hospital-</strong> Govindpura, Govindam Tower,
                    Kalwar road, Jaipur
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
                    <strong> Healthcare-</strong> Govindpura, Govindam Tower,
                    Kalwar road, Jaipur
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
                    <a href="/">clinics@hotmail.com</a>
                  </li>
                </div>
                <div className="footer-btn">
                  <Link to="/contactus">
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
          Copyright © 2024 Gentleclinics All Rights Reserved. Design and Develop
          By <span>Manju It solutions Pvt ltd</span>
        </p>
      </div>
      <div className="icon-toggle">
        <div className="icon">
          {!isToggled && (
            <>
              <p>
                <IoCallSharp />
              </p>
              <p className="icon-1" onClick={handleClickIcon1}>
                <IoLogoWhatsapp />
              </p>
            </>
          )}
          <p onClick={handleToggle} className={isToggled ? "close" : "icon-2"}>
            {isToggled ? <FaHeadset /> : <IoCloseSharp />}
          </p>
        </div>
        {buttonVisible && (
          <div className="icon-b">
            <p className="icon-3" onClick={scrollToTop}>
              <FaLongArrowAltUp />
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export { Footer };

import React from "react";
import img from "../Image/Rahul-Mathur.webp";
import img1 from "../Image/Diabetes.webp";
import img2 from "../Image/Fever.webp";
import img3 from "../Image/Headache.webp";
import img4 from "../Image/Heart-Disease.webp";
import video from "../"
import { IoIosCall } from "react-icons/io";
import { SlEnvolope } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
function Banner() {
  return (
    <>
      <div className="main-banner">
        <div className="b">
          <div className="banner">
            <div className="banner-list">
              <div className="doctor-img">
                <img src={img} alt="" />
              </div>
              <div className="doc">
                <h5 className="top-txt">Best General physician in Jaipur</h5>
                <h1>Dr. Rahul Mathur</h1>
                <h6>Associate Consultant - Internal Medicine</h6>
                <h6>MD (Gold Medalist)</h6>
              </div>
            </div>
            <p>
              Dr. Rahul Mathur is one of the highly Experienced General
              Physician In Jaipur, He has more than 9&nbsp;years of experience
              in this field and provides advanced treatment for diabetes,
              headache, joint pain, asthma &amp; allergy with maximum
              success&nbsp;rate.
            </p>
            <div className="features-list">
              <li>
                <a href="/">
                  <img src={img1} alt="" />
                </a>
                <h5>Diabetes</h5>
              </li>
              <li>
                <a href="/">
                  <img src={img2} alt="" />
                </a>
                <h5>Headache</h5>
              </li>
              <li>
                <a href="/">
                  <img src={img3} alt="" />
                </a>
                <h5>Asthma & Allergy</h5>
              </li>
              <li>
                <a href="/">
                  <img src={img4} alt="" />
                </a>
                <h5>Fever</h5>
              </li>
            </div>
            <div className="banner-btn">
              <button>Appointment</button>
            </div>
          </div>
        </div>
      </div>
      <div className="appointment">
        <div className="inner-box">
            <h3>Book an Appointment</h3>
        </div>
        <form action="">
            <input type="text" placeholder="Enter Your Name"/>
            <br />
            <input type="number" placeholder="Enter Your Phone"/>
            <br />
            <input type="email" placeholder="Enter Your email"/>
            <br />
            <input type="text" placeholder="Enter Your message" className="inn"/>
            <button>Submit</button>
        </form>
        
      </div>
      <div className="slide-bottom">
        <div className="slide-container">
          <div className="row">
            <div className="col">
              <div className="contact-box">
                <div className="icon">
                  <i><IoIosCall /></i>
                </div>
                <div className="inner-text">
                  <h6>Call Us</h6>
                  <p>1234567890</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-box">
                <div className="icon">
                  <i><SlEnvolope /></i>
                </div>
                <div className="inner-text">
                  <h6>Contact Us</h6>
                  <p>swasthyaclinics@hotmail.com</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-box">
                <div className="icon">
                  <i><IoLocationSharp /></i>
                </div>
                <div className="inner-text">
                <h6>Swasthya-</h6>
                <p>1330,kishan marg Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-box">
                <div className="icon">
                  <i><IoMdTime /></i>
                </div>
                <div className="inner-text">
                <h6>Open Hours</h6>
               <p>Mon to Sat | 07:30 PM to 09:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="div-line">
      </div>
    </>
  );
}
export { Banner };

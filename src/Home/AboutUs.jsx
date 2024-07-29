import React from "react";
import img from "../Image/dr_mukul_pareek.png.webp";

function AboutUs() {
  return (
    <>
      <div className="aboutus">
        <div className="about-text">
          <h2>About Us</h2>
          <h1>Dr.Mukul Pareek</h1>
          <p>
            Dr. Mukul Pareek is a Physiotherapist having experience of 18 years
            in this field. Dr. Mukul Pareek practices at The Reviva Pain &
            Physiotherapy Clinic in Jhotwara, Jaipur. He completed
            BPT/MPT(Orthopaedic) and Registered with the Indian Association of
            Physiotherapists (IAP).
          </p>
          <p>
            We take this opportunity to introduce ourselves as quality
            rehabilitation services; A premier organization engaged in quality
            treatment in the field of Rehabilitation, Health care, Physical
            Therapy, and patient Homecare.
          </p>
          <button>Read More</button>
        </div>
        <div className="about-img">
          <img src={img} alt="" />
          <div className="div"></div>
        </div>
      </div>
    </>
  );
}
export { AboutUs };

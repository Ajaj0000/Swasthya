import React from "react";
import { Headersec } from "../Common/Header-sec";
import { Footer } from "../Common/Footer";
import img from "../Image/cartoon-character-doctor-with-stethoscope-eyeglasses_890887-11305.avif";
import { Qualification } from "./Qulification";
import { Testimonial } from "../Home/Testimonia";
import { WhychooseClinic } from "../Home/WhyChooseClinic";
import { Banner } from "../Home/Banner";
import { MiddleHealthSection } from "../Home/Middle-Health-Section";

function RahulDetail() {
  return (
    <>
      <Headersec />
      <Banner />
      <section>
        <div className="about-doctor">
          <div className="contanier">
            <div className="row">
              <div className="col-first">
                <div className="about-doctor-detail">
                  <div className="img-about ">
                    <img src={img} alt="" />
                  </div>
                  <div className="detail-doctor">
                    <h4>Dr. Aman Kumar</h4>
                    <p>PGD Internal Medicine (UK)</p>
                    <p>MD (Gold Medalist)</p>
                  </div>
                </div>
              </div>
              <div className="col-second">
                <div className="doctor-info">
                  <h3> Dr. Aman Kumar</h3>
                  <h5>Best General Physician In Jaipur</h5>
                  <h6>MD (Gold Medalist), PGD Internal Medicine (UK)</h6>
                  <p>
                  A physician, also known as a medical doctor or simply a doctor, is a healthcare professional who practices medicine, which involves diagnosing, treating, and preventing illnesses and injuries. Physicians undergo extensive education and training, including a bachelor's degree, medical school, and residency programs, where they specialize in various fields such as internal medicine, pediatrics, or surgery. They use their expertise to examine patients, order and interpret diagnostic tests, prescribe medications, and develop treatment plans. Physicians often work in hospitals, clinics, or private practices and may collaborate with other healthcare professionals to provide comprehensive care. They play a crucial role in maintaining public health and improving patient outcomes through their knowledge, skills, and compassionate care.
                    <br />
                    <br />
                    
Physicians also engage in continuous education to stay updated with the latest medical advancements and best practices. They may conduct research, contribute to medical literature, and teach medical students and residents. Their dedication to patient care, ethical practice, and lifelong learning makes them vital contributors to the healthcare system.
                  </p>
                  <div className="list-footer">
                    <li>Asthma & Allergy</li>
                    <li>Covid Symptoms</li>
                    <li>Arthritis & Joint Pain</li>
                    <li>Diabetes</li>
                    <li>High Blood Pressure</li>
                    <li>Migraine & Headache</li>
                    <li>Thyroid</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="div"></div>

      <Qualification />
      <MiddleHealthSection/>
      <WhychooseClinic />
      <Testimonial />
      <Footer />
    </>
  );
}
export { RahulDetail };

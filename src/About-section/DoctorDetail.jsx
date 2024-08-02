import React from "react";
import { Headersec } from "../Common/Header-sec";
import { Footer } from "../Common/Footer";
import img from "../Image/Rahul-Mathur.webp";
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
                    <h4>Dr. Aman Mathur</h4>
                    <p>PGD Internal Medicine (UK)</p>
                    <p>MD (Gold Medalist)</p>
                  </div>
                </div>
              </div>
              <div className="col-second">
                <div className="doctor-info">
                  <h3> Dr. Aman Mathur</h3>
                  <h5>Best General Physician In Jaipur</h5>
                  <h6>MD (Gold Medalist), PGD Internal Medicine (UK)</h6>
                  <p>
                    Dr. Aman Mathur is a most renowned general physician in
                    Jaipur city, He has got international training from the UK
                    in Internal Medicine. Conducting several medical camps he
                    has worked at Apex, Metro hospital, and Mahatma Gandhi
                    Hospital in Jaipur. Dr. Rahul Mathur has undergone an
                    International Post Graduate Training in Internal Medicine
                    from the United Kingdom. With 9+ years of experience, he
                    always chooses to reflect liability, empathy, and hard work
                    as his foremost principles for excellence. Dr. Mathur worked
                    on various topics in medicine and published many research
                    papers at National & International conferences. He was
                    awarded as Best Scientific Researcher and got a Clinical
                    excellence award in recent years. He has particular interest
                    and expertise in Diabetes, Gastroenterology, and Preventive
                    Medicine.
                    <br />
                    <br />
                    Dr. Aman Mathur is associated with various prestigious
                    organizations and got awarded as a life member of the
                    American College of Physicians & Academy of Family
                    Physicians of India (AFPI). He had previously worked with
                    Mahatma Gandhi Hospital, Apex Hospitals, and Metro Hospital
                    Jaipur.
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

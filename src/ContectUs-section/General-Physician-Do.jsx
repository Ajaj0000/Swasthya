import React from "react";
import img from "../Image/general-physician.webp";

function GeneralPhysicianContect() {
  return (
    <>
      <div className="general-doctor ">
        <div className="contanier">
          <div className="row">
            <div className="col-a">
              <div className="doctor-info">
                <h3>What Does A General Physician Do?</h3>
                <p>
                  General Physician is a person who treats many major diseases
                  like cancer, fever, heart problem, paralysis, covid-19, etc.
                  The work of curing human diseases is done by the doctor. The
                  doctor has been given the status of God, he cures many
                  diseases of the people and gives them life. A General
                  Physician is called the doctor. The physician treats any kind
                  of disease related to the health-related human body and tells
                  about them.
                  <br />
                  <br />
                  The physician finds out what is the disease in the patient's
                  body, treats him at the right time, and also makes him aware
                  of what precautions the patient should take. They treat
                  patients and also do operations on those patients when they
                  have a major disease and if a patient does not have a more
                  serious disease, then by giving medicines to those patients,
                  they solve their problem and treat them
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
            <div className="col-first">
              <div className="about-doctor-detail">
                <div className="img-ab">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { GeneralPhysicianContect };

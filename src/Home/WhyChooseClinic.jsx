import React from "react";
import img1 from "../Image/experienced-physician.webp";
import img2 from "../Image/maximum-positive.webp";
import img3 from "../Image/several-treatments.webp";
import img4 from "../Image/best-consulting.webp";

function WhychooseClinic() {
  return (
    <>
      <section>
        <div className="clinic">
          <div className="contanier">
            <div className="row">
              <div className="title-choose-lite">
                <div className="title-choose">
                  <h1>Why Choose Gentle Clinic?</h1>
                  <p>
                    Everyone wants to get treated by the best and that’s why
                    people are happy choosing Gentle Clinic.
                  </p>
                </div>
              </div>
              <hr />
              <div className="main-colum">
                <div className="colum-a">
                  <div className="colum">
                    <div className="inner-box">
                      <div className="clinic-img">
                        <img src={img1} alt="" />
                      </div>
                      <div className="text-inner">
                        <h5>Maximum Positive Results</h5>
                        <p className="p">
                          Everyone wants to get the right treatment contributing
                          ton positive results and thankfully here you will get
                          the right treatment that will help you to get fine
                          soon.
                        </p>
                        <hr />
                      </div>
                    </div>
                  </div>
                  <div className="colum">
                    <div className="inner-box">
                      <div className="clinic-img">
                        <img src={img2} alt="" />
                      </div>

                      <div className="text-inner">
                        <h5>Expert In Several Treatments</h5>
                        <p>
                          Here you will get the best consultation at affordable
                          prices. You will not regret coming here for sure. You
                          can also ask the doctors if there is any doubt and
                          they will answer it as needed!
                        </p>
                        <hr />
                      </div>
                    </div>
                  </div>
                  <div className="colum">
                    <div className="inner-box">
                      <div className="clinic-img">
                        <img src={img3} alt="" />
                      </div>
                      <div className="text-inner">
                        <h5>Best Consultation</h5>
                        <p>
                          Doctors here possess a deep knowledge of the different
                          treatment options available, and are capable of
                          providing the best care and treatment for a range of
                          ailments.
                        </p>
                        <hr />
                      </div>
                    </div>
                  </div>
                  <div className="colum">
                    <div className="inner-box">
                      <div className="clinic-img">
                        <img src={img4} alt="" />
                      </div>
                      <div className="text-inner">
                        <h5>Experienced Physician</h5>
                        <p>
                          Dr. Aman Kumar and Dr. Piyush Singh are the
                          experienced physician here providing the best possible
                          treatment.
                        </p>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { WhychooseClinic };

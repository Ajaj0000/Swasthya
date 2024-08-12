import React from "react";
import img1 from "../Image/physician-1.webp";
import img2 from "../Image/Malariya.webp";
import img3 from "../Image/physician-6.webp";
import img4 from "../Image/AsthmaAllergy-1.webp";
import img5 from "../Image/thyroid-disorders.webp";
import img6 from "../Image/physician-5.webp";
import img7 from "../Image/Fever.webp";
import img8 from "../Image/physician-12.webp";
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
      <div className="general">
        <div className="general-row">
          <div className="col">
            <div className="home-page-heading">
              <h3 className="our">Our Service</h3>
              <p>
                We at Swasthya Clinic offers you the best treatments including
              </p>
            </div>
          </div>
          <div className="service-bock">
            <div className="service-row">
              <div className="col-md">
                <div className="service-outer">
                  <div className="service-box">
                    <div className="icon-img">
                      <img src={img1} alt="" />
                    </div>
                    <div className="service-text">
                      <h4>Diabetes</h4>
                      <p>
                        Take charge of your health! Get top-quality diabetes
                        treatment from Dr. Rahul Mathur at Swasthya Clinic and
                        reclaim your life today.
                      </p>
                      <div className="service-btn">
                        <Link to="/treatment">
                          <button>View More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="service-outer">
                  <div className="service-box">
                    <div className="icon-img">
                      <img src={img2} alt="" />
                    </div>
                    <div className="service-text">
                      <h4>Malaria</h4>
                      <p>
                        Take charge of your health! Get top-quality diabetes
                        treatment from Dr. Rahul Mathur at Swasthya Clinic and
                        reclaim your life today.
                      </p>
                      <div className="service-btn">
                        <Link to="/treatment">
                          <button>View More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="service-outer">
                  <div className="service-box">
                    <div className="icon-img">
                      <img src={img3} alt="" />
                    </div>
                    <div className="service-text">
                      <h4>High BP</h4>
                      <p>
                        Take charge of your health! Get top-quality diabetes
                        treatment from Dr. Rahul Mathur at Swasthya Clinic and
                        reclaim your life today.
                      </p>
                      <div className="service-btn">
                        <Link to="/treatment">
                          <button>View More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="service-outer">
                  <div className="service-box">
                    <div className="icon-img">
                      <img src={img4} alt="" />
                    </div>
                    <div className="service-text">
                      <h4>Asthma/Allergy</h4>
                      <p>
                        Take charge of your health! Get top-quality diabetes
                        treatment from Dr. Rahul Mathur at Swasthya Clinic and
                        reclaim your life today.
                      </p>
                      <div className="service-btn">
                        <Link to="/treatment">
                          <button>View More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="service-outer">
                  <div className="service-box">
                    <div className="icon-img">
                      <img src={img5} alt="" />
                    </div>
                    <div className="service-text">
                      <h4>Thyroid Disorders</h4>
                      <p>
                        Take charge of your health! Get top-quality diabetes
                        treatment from Dr. Rahul Mathur at Swasthya Clinic and
                        reclaim your life today.
                      </p>
                      <div className="service-btn">
                        <Link to="/treatment">
                          <button>View More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="service-outer">
                  <div className="service-box">
                    <div className="icon-img">
                      <img src={img6} alt="" />
                    </div>
                    <div className="service-text">
                      <h4>Joint Pain</h4>
                      <p>
                        Take charge of your health! Get top-quality diabetes
                        treatment from Dr. Rahul Mathur at Swasthya Clinic and
                        reclaim your life today.
                      </p>
                      <div className="service-btn">
                        <Link to="/treatment">
                          <button>View More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="service-outer">
                  <div className="service-box">
                    <div className="icon-img">
                      <img src={img7} alt="" />
                    </div>
                    <div className="service-text">
                      <h4>Jaundice</h4>
                      <p>
                        Take charge of your health! Get top-quality diabetes
                        treatment from Dr. Rahul Mathur at Swasthya Clinic and
                        reclaim your life today.
                      </p>
                      <div className="service-btn">
                        <Link to="/treatment">
                          <button>View More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="service-outer">
                  <div className="service-box">
                    <div className="icon-img">
                      <img src={img8} alt="" />
                    </div>
                    <div className="service-text">
                      <h4>Tuberculosis</h4>
                      <p>
                        Take charge of your health! Get top-quality diabetes
                        treatment from Dr. Rahul Mathur at Swasthya Clinic and
                        reclaim your life today.
                      </p>
                      <div className="service-btn">
                        <Link to="/treatment">
                          <button>View More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Service };

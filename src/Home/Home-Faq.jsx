import React, { useEffect, useState } from "react";
import img1 from "../Image/faq.webp";
import img2 from "../Image/Headache (1).webp";
import img3 from "../Image/Heart-Disease (1).webp";
import img4 from "../Image/Obesity.webp";
import img5 from "../Image/bp.webp";
import img6 from "../Image/Joint-Pain.webp";
import img7 from "../Image/Fever.webp";
import img8 from "../Image/Asthma-Allergy.webp";
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function HomeFaq() {
  const [add, subtract] = useState(null);
  const btn1 = (id) => {
    console.log(id, "id");
    subtract((previous) => {
      if (previous && previous.id === id) {
        return null;
      } else {
        return { id };
      }
    });
  };

  return (
    <>
      <section className="home-faq">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-heading">
                <h3>FAQ'S</h3>
                <p>
                  Read all the FAQ's that helped you to know about the symptoms
                  and their treatments and get all your answer related to this
                  disease.
                </p>
              </div>
            </div>
          </div>
          <div className="row-sec">
            <div className="row-col">
              <div className="faq-tab">
                <li>
                  <div className="faq-link">
                    <img src={img1} alt="img" />
                    <h3>Diabetes</h3>
                  </div>
                </li>
                <li>
                  <div className="faq-link">
                    <img src={img2} alt="img" />
                    <h3>Headache</h3>
                  </div>
                </li>
                <li>
                  <div className="faq-link">
                    <img src={img3} alt="img" />
                    <h3>Heart Disease</h3>
                  </div>
                </li>
                <li>
                  <div className="faq-link">
                    <img src={img4} alt="img" />
                    <h3>Obesity</h3>
                  </div>
                </li>
                <li>
                  <div className="faq-link">
                    <img src={img5} alt="img" />
                    <h3>High BP</h3>
                  </div>
                </li>
                <li>
                  <div className="faq-link">
                    <img src={img6} alt="img" />
                    <h3>Joint Pain</h3>
                  </div>
                </li>
                <li>
                  <div className="faq-link">
                    <img src={img7} alt="img" />
                    <h3>Fever</h3>
                  </div>
                </li>
                <li>
                  <div className="faq-link">
                    <img src={img8} alt="img" />
                    <h3>Asthma</h3>
                  </div>
                </li>
              </div>
            </div>

            <div className="row-c">
              <div className="tab-pane">
                <div className="tab-box">
                  <div
                    onClick={() => {
                      btn1("1");
                    }}
                    className="tab-item"
                  >
                    <h2>
                      {add && add?.id === "1" ? (
                        <span>
                          <RiSubtractFill />
                        </span>
                      ) : (
                        <span>
                          <MdAdd />
                        </span>
                      )}
                      What are the types of diabetes?
                    </h2>
                  </div>
                  <div
                    style={{
                      display: add?.id === "1" ? "block" : "none",
                      visibility: add?.id === "1" ? "visible" : "hidden",
                      transition:
                        "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
                    }}
                    className="faq-ans"
                  >
                    <p>
                      The two main types of diabetes are Type 1 Diabetes and
                      Type 2 Diabetes. Type 1 Diabetes is an autoimmune disorder
                      in which the body does not produce enough insulin, and
                      Type 2 Diabetes is a metabolic disorder due to by high
                      levels of sugar in the blood. Other types of diabetes
                      include gestational diabetes, Latent Autoimmune Diabetes
                      of Adults (LADA), and MODY (Maturity-Onset Diabetes of the
                      Young).
                    </p>
                  </div>
                  <div className="div"></div>
                  <div
                    onClick={() => {
                      btn1("2");
                    }}
                    className="tab-item"
                  >
                    <h2>
                      {add && add?.id === "2" ? (
                        <span>
                          <RiSubtractFill />
                        </span>
                      ) : (
                        <span>
                          <MdAdd />
                        </span>
                      )}
                      What is the best way to manage diabetes?
                    </h2>
                  </div>
                  <div
                    style={{ display: add?.id === "2" ? "block" : "none" }}
                    className="faq-ans"
                  >
                    <p>
                      The best way to manage diabetes is by eating a balanced
                      diet and exercising regularly. It is also important to
                      check blood sugar levels and take the prescribed
                      medications regularly. Additionally, the American Diabetes
                      Association recommends regular visits with a doctor or
                      other health care professional, monitoring
                      diabetes-related complications, and taking steps to
                      prevent them.
                    </p>
                  </div>
                  <div className="div"></div>
                  <div
                    onClick={() => {
                      btn1("3");
                    }}
                    className="tab-item"
                  >
                    <h2>
                      {add && add?.id === "3" ? (
                        <span>
                          <RiSubtractFill />
                        </span>
                      ) : (
                        <span>
                          <MdAdd />
                        </span>
                      )}
                      Are there any special diets that may help with controlling
                      diabetes?
                    </h2>
                  </div>
                  <div
                    style={{ display: add?.id === "3" ? "block" : "none" }}
                    className="faq-ans"
                  >
                    <p>
                      Healthy eating is very important in managing diabetes.
                      Examples of special diets that may help with controlling
                      diabetes include the Mediterranean diet, the DASH diet, a
                      low-carbohydrate diet, and a plant-based diet. Speak with
                      a registered dietician to get health eating advice that is
                      tailored to your specific needs.
                    </p>
                  </div>
                  <div className="div"></div>
                  <div
                    onClick={() => {
                      btn1("4");
                    }}
                    className="tab-item"
                  >
                    <h2>
                      {add && add?.id === "4" ? (
                        <span>
                          <RiSubtractFill />
                        </span>
                      ) : (
                        <span>
                          <MdAdd />
                        </span>
                      )}
                      What are the warning signs of diabetes?
                    </h2>
                  </div>
                  <div
                    style={{ display: add?.id === "4" ? "block" : "none" }}
                    className="faq-ans"
                  >
                    <p>
                      Common warning signs of diabetes include frequent
                      urination, excessive thirst, extreme hunger, blurred
                      vision, fatigue, and slow healing sores. It is important
                      to contact a doctor if you are experiencing any of these
                      symptoms.
                    </p>
                  </div>
                  <div className="div"></div>
                  <div
                    onClick={() => {
                      btn1("5");
                    }}
                    className="tab-item"
                  >
                    <h2>
                      {add && add?.id === "5" ? (
                        <span>
                          <RiSubtractFill />
                        </span>
                      ) : (
                        <span>
                          <MdAdd />
                        </span>
                      )}
                      Are there any complications associated with diabetes?
                    </h2>
                  </div>
                  <div
                    style={{ display: add?.id === "5" ? "block" : "none" }}
                    className="faq-ans"
                  >
                    <p>
                      Yes, diabetes can lead to a variety of complications,
                      including heart disease, stroke, nerve damage, kidney
                      failure, eye problems, and skin conditions. It is
                      important to take steps to reduce your risk for these
                      serious complications.
                    </p>
                  </div>
                  <div className="div"></div>
                  <div
                    onClick={() => {
                      btn1("6");
                    }}
                    className="tab-item"
                  >
                    <h2>
                      {add && add?.id === "6" ? (
                        <span>
                          <RiSubtractFill />
                        </span>
                      ) : (
                        <span>
                          <MdAdd />
                        </span>
                      )}
                      What are the types of diabetes?
                    </h2>
                  </div>
                  <div
                    style={{ display: add?.id === "6" ? "block" : "none" }}
                    className="faq-ans"
                  >
                    <p>
                      It is possible to prevent or delay the onset of diabetes
                      by making healthy lifestyle choices, such as eating a
                      balanced diet, exercising regularly, and maintaining a
                      healthy weight. Additionally, some other factors, such as
                      genetics, ethnicity, and age, may increase the risk of
                      developing diabetes.
                    </p>
                  </div>
                  <div className="div"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-d">
            <div className="btn">
              <Link to="/faq">
                <button>View More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { HomeFaq };

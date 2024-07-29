import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

function Faq() {
  const [open, close] = useState(null);
  const btn1 = (id) => {
    console.log(id, "id");
    close((previous) => {
      if (previous && previous.id === id) {
        return null;
      } else {
        return { id };
      }
    });
  };
  return (
    <>
      <section>
        <div className="page-section">
          <div className="container">
            <div className="row">
              <div className="colum">
                <div className="heading">
                  <h3>Diabetes</h3>
                </div>
                <div className="accordion">
                  <div
                    onClick={() => {
                      btn1("1");
                    }}
                    className="accordion-itm"
                  >
                    <h2>
                      <button>What are the early symptoms of diabetes?</button>
                      {open && open?.id === "1" ? (
                        <span>
                          <SlArrowDown />
                        </span>
                      ) : (
                        <span>
                          <SlArrowUp />
                        </span>
                      )}
                    </h2>
                  </div>
                  <div style={{ display: open?.id === "1" ? "block" : "none" }}>
                    <div className="answer">
                      <p>
                        Fatigue, headache, blurred vision, recurrent infection
                        (weakening of the immune system), discomfort in the
                        private part, and rapid heartbeat are early symptoms of
                        diabetes.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      btn1("2");
                    }}
                    className="accordion-itm"
                  >
                    <h2>
                      <button>What is the cause of diabetes?</button>
                      {open && open?.id === "2" ? (
                        <span>
                          <SlArrowDown />
                        </span>
                      ) : (
                        <span>
                          <SlArrowUp />
                        </span>
                      )}
                    </h2>
                  </div>
                  <div style={{ display: open?.id === "2" ? "block" : "none" }}>
                    <div className="answer">
                      <p>
                        When less insulin reaches the pancreas of the body, the
                        amount of glucose in the blood increases. This condition
                        is called diabetes. Insulin is a hormone produced by the
                        digestive gland in our body. Its job is to convert food
                        into energy.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      btn1("3");
                    }}
                    className="accordion-itm"
                  >
                    <h2>
                      <button>
                        What should be the blood sugar according to age?
                      </button>
                      {open && open?.id === "3" ? (
                        <span>
                          <SlArrowDown />
                        </span>
                      ) : (
                        <span>
                          <SlArrowUp />
                        </span>
                      )}
                    </h2>
                  </div>
                  <div style={{ display: open?.id === "3" ? "block" : "none" }}>
                    <div className="answer">
                      <p>
                        If you are 40-50 years old then your fasting blood sugar
                        level can be 90 to 130 mg/dL. Ra level should be less
                        than 140 mg/dl after lunch. At the same time, after
                        dinner, the blood sugar level of 150 mg/dl comes in the
                        normal range. Similarly, for those aged 50-60 years, the
                        fasting sugar level should be 90 to 130 mg/dL.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      btn1("4");
                    }}
                    className="accordion-itm"
                  >
                    <h2>
                      <button>How is diabetes diagnosed?</button>
                      {open && open?.id === "4" ? (
                        <span>
                          <SlArrowDown />
                        </span>
                      ) : (
                        <span>
                          <SlArrowUp />
                        </span>
                      )}
                    </h2>
                  </div>
                  <div style={{ display: open?.id === "4" ? "block" : "none" }}>
                    <div className="answer">
                      <p>
                        How to identify high sugar level: fainting, nausea,
                        blurred vision, Difficulty concentrating on things,
                        frequent feeling of thirst.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      btn1("5");
                    }}
                    className="accordion-itm"
                  >
                    <h2>
                      <button>Can diabetes be cured?</button>
                      {open && open?.id === "5" ? (
                        <span>
                          <SlArrowDown />
                        </span>
                      ) : (
                        <span>
                          <SlArrowUp />
                        </span>
                      )}
                    </h2>
                  </div>
                  <div style={{ display: open?.id === "5" ? "block" : "none" }}>
                    <div className="answer">
                      <p>
                        According to experts, type 2 diabetes can be fatal if it
                        is not treated at the right time. But a UK doctor has
                        claimed that he has cured diabetes in about 100 patients
                        by making just one change in diet without any medicine.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      btn1("6");
                    }}
                    className="accordion-itm"
                  >
                    <h2>
                      <button>What is the main cause of diabetes?</button>
                      {open && open?.id === "6" ? (
                        <span>
                          <SlArrowDown />
                        </span>
                      ) : (
                        <span>
                          <SlArrowUp />
                        </span>
                      )}
                    </h2>
                  </div>
                  <div style={{ display: open?.id === "6" ? "block" : "none" }}>
                    <div className="answer">
                      <p>
                        It is unknown what causes most types of diabetes. There
                        is always an increase in blood sugar levels. As a
                        result, the pancreas doesn't produce enough insulin. It
                        is possible to develop type 1 diabetes as well as type 2
                        diabetes due to a combination of genetics and
                        environment.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      btn1("7");
                    }}
                    className="accordion-itm"
                  >
                    <h2>
                      <button>Can diabetes go away?</button>
                      {open && open?.id === "7" ? (
                        <span>
                          <SlArrowDown />
                        </span>
                      ) : (
                        <span>
                          <SlArrowUp />
                        </span>
                      )}
                    </h2>
                  </div>
                  <div style={{ display: open?.id === "7" ? "block" : "none" }}>
                    <div className="answer">
                      <p>
                        Diabetes does not go away on its own. Managing Type 1,
                        Type 2, and other forms of diabetes can help you avoid
                        serious health conditions associated with diabetes
                        and—in some cases—may even help you reverse the
                        disease's course. However, this cannot happen on its
                        own.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      btn1("8");
                    }}
                    className="accordion-itm"
                  >
                    <h2>
                      <button> Can diabetes go away on its own?</button>
                      {open && open?.id === "8" ? (
                        <span>
                          <SlArrowDown />
                        </span>
                      ) : (
                        <span>
                          <SlArrowUp />
                        </span>
                      )}
                    </h2>
                  </div>
                  <div style={{ display: open?.id === "8" ? "block" : "none" }}>
                    <div className="answer">
                      <p>
                        sugar-sweetened beverages (juice, soda, sweet tea,
                        sports drinks) sweeteners (table sugar, brown sugar,
                        honey, maple syrup, molasses) processed foods (chips,
                        microwave popcorn, processed meat, convenience meals)
                        trans fats (vegetable shortening, fried foods).
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      btn1("9");
                    }}
                    className="accordion-itm"
                  >
                    <h2>
                      <button>Does diabetes cause weight gain?</button>
                      {open && open?.id === "9" ? (
                        <span>
                          <SlArrowDown />
                        </span>
                      ) : (
                        <span>
                          <SlArrowUp />
                        </span>
                      )}
                    </h2>
                  </div>
                  <div style={{ display: open?.id === "9" ? "block" : "none" }}>
                    <div className="answer">
                      <p>
                        People who take insulin often gain weight. Insulin is a
                        hormone that regulates how the body absorbs sugar, also
                        known as glucose. Weight gain can be frustrating because
                        keeping a healthy weight is important to manage your
                        diabetes.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      btn1("10");
                    }}
                    className="accordion-itm"
                  >
                    <h2>
                      <button>Does garlic help diabetes?</button>
                      {open && open?.id === "10" ? (
                        <span>
                          <SlArrowDown />
                        </span>
                      ) : (
                        <span>
                          <SlArrowUp />
                        </span>
                      )}
                    </h2>
                  </div>
                  <div
                    style={{ display: open?.id === "10" ? "block" : "none" }}
                  >
                    <div className="answer">
                      <p>
                        The present study confirms that additional garlic
                        contributes to improved blood glucose control in 1–2
                        weeks as well as in 24 weeks in T2DM, and plays positive
                        roles in total cholesterol and high/low density
                        lipoprotein regulation in 12 weeks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-colum-b">
                <div className="appointment-co ">
                  <div className="inner-box">
                    <h3>Bask Us If You Have Any Question?</h3>
                    <p>
                      If you have any questions please fell free to contact with
                      us.
                    </p>
                  </div>
                  <form action="">
                    <input type="text" placeholder="Enter Your Name" />
                    <br />
                    <input type="number" placeholder="Enter Your Phone" />
                    <br />
                    <input type="email" placeholder="Enter Your email" />
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Your message"
                      className="inn"
                    />
                    <button>Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { Faq };

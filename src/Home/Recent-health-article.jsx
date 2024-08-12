import React from "react";
import img1 from "../Image/1718884400_58.png";
import img2 from "../Image/1715934657_57.png";
import img3 from "../Image/1711619856_56.png";
import { Link } from "react-router-dom";

function RecentHealthArticle() {
  return (
    <>
      <div className="div"></div>
      <section>
        <div className="blog">
          <div className="container">
            <div className="article">
              <div className="health-article">
                <h1>Recent Health Articles</h1>
                <p>
                  Read all the blogs provided by our expert doctors on various
                  diseases and their possible treatments, so you easily
                  understand your symptoms and their treatments.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="colum">
                <div className="health-blog">
                  <div className="health-img">
                    <img src={img1} alt="img" />
                  </div>
                  <div className="health-text">
                    <h4>Health Tips</h4>
                    <h3>Easy Tips To Control Diabetes!</h3>
                    <p>
                      incorporating these easy-to-follow tips into your daily
                      routine, you can navigate life with diabetes with greater
                      confidence and achieve better overall health outcomes.
                    </p>
                  </div>
                </div>
                <div className="health-blog">
                  <div className="health-img">
                    <img src={img2} alt="img" />
                  </div>
                  <div className="health-text">
                    <h4>Health Tips</h4>
                    <h3>फीवर में डायट: क्या खाना चाहिए और क्या नहीं?</h3>
                    <p>
                      अक्सर गलत डायट बीमारी को बढ़ा देती है, इसलिए फीवर को हल्के
                      में न लें और फीवर में डायट के बारे में सही जानकारी लें।
                      Fever diet in Hindi
                    </p>
                  </div>
                </div>
                <div className="health-blog">
                  <div className="health-img">
                    <img src={img3} alt="img" />
                  </div>
                  <div className="health-text">
                    <h4>Health Tips</h4>
                    <h3>Typhoid Fever: टायफॉइड फीवर क्या है?</h3>
                    <p>
                      Typhoid Fever: टाइफाइड बुखार एक प्रकार का जीवाणु संक्रमण
                      है जो दूषित पानी और दूषित भोजन के कारण होता है। आपको बता
                      दें कि यह तेज बुखार के साथ-साथ पेट दर्द, सिरदर्द आदि का भी
                      कारण बनता है।
                    </p>
                  </div>
                </div>
              </div>
              <div className="btn">
                <Link to="/health">
                  <button>View More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="div"></div>
    </>
  );
}
export { RecentHealthArticle };

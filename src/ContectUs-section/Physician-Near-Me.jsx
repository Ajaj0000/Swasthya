import React from "react";
import img1 from "../Image/physician-1.webp";
import img2 from "../Image/Malariya.webp";
import img3 from "../Image/physician-6.webp";
import img4 from "../Image/AsthmaAllergy-1.webp";
import img5 from "../Image/thyroid-disorders.webp";
import img6 from "../Image/physician-5.webp";
import img7 from "../Image/Fever.webp";
import img8 from "../Image/physician-12.webp";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";


function PhysicianNearMe() {
  const customerReview = [
    {
      id: "a1",
      name: "Diabetes",
      pic: img1,
      message:
        "Take charge of your health! Get top-quality diabetes treatment from Dr. Rahul Mathur at Swasthya Clinic and reclaim your life today.",
    },
    {
      id: "a1",
      name: "Malaria",
      pic: img2,
      message:
        "Act now to get effective malaria treatment from Dr. Rahul Mathur at Swasthya Clinic and reclaim your health!",
    },
    {
      id: "a1",
      name: "High BP",
      pic: img3,
      message:
        "Take control of your high blood pressure today! Visit Dr. Rahul Mathur at Swasthya Clinic for effective treatment and reclaim your health.",
    },
    {
      id: "a1",
      name: "Asthma & Allergy",
      pic: img4,
      message:
        "Take control of your asthma and allergies today! Visit Dr. Rahul Mathur at Swasthya Clinic for expert treatment and breathe easier tomorrow.",
    },
    {
      id: "a1",
      name: "Thyroid",
      pic: img5,
      message:
        "Take control of your thyroid health today! Schedule an appointment with Dr. Rahul Mathur at Swasthya Clinic and experience personalized, effective treatment for thyroid disorders.",
    },
    {
      id: "a1",
      name: "Joint pain",
      pic: img6,
      message:
        "Relieve joint pain and regain your mobility today! Visit Dr. Rahul Mathur at Swasthya Clinic for effective joint pain treatment.",
    },
    {
      id: "a1",
      name: "Jaundice",
      pic: img7,
      message:
        "Take the first step towards a healthier tomorrow! Trust Dr. Rahul Mathur at Swasthya Clinic for effective jaundice treatment and regain your vitality today.",
    },
    {
      id: "a1",
      name: "Tuberculosis",
      pic: img8,
      message:
        "Take charge of your health today! Visit Swasthya Clinic for expert tuberculosis treatment by Dr. Rahul Mathur. Together, we can conquer TB and restore your well-being.",
    },
    {
      id: "a1",
      name: "Joint Pain",
      pic: img1,
      message:
        "Take charge of your health today! Visit Swasthya Clinic for expert tuberculosis treatment by Dr. Rahul Mathur. Together, we can conquer TB and restore your well-being.",
    },
  ];

  return (
    <>
      <section>
        <div className="physician-contect">
          <div className="container">
            <div className="row">
              <div className="contect-col">
                <h2>Best General Physician Near Me</h2>
                <p>
                  General practitioners are highly trained specialists who
                  provide a range of non-surgical health care to adult patients.
                  They care for difficult, serious, or unusual medical problems
                  such as fever, cold, cough, diabetes, typhoid, malaria,
                  dengue, etc, and watch the patient until these problems
                  resolve or stabilize. Through General Physician, we are able
                  to cure the problems of our routine or such diseases, which
                  arise due to normal physical problems. Under which problems
                  like cold, cold, fever, jaundice, malaria, blood pressure,
                  sugar, etc. are diagnosed.
                </p>
                {/* <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            > */}
                {customerReview.map((itm) => {
                  return (
                    <>
                     {/* <SwiperSlide> */}
                      <div className="service-bock">
                        <div className="service-row">
                          <div className="col-md">
                            <div className="service-outer">
                              <div className="service-box">
                                <div className="icon-img">
                                  <img src={itm.pic} alt="img" />
                                </div>
                                <div className="service-text">
                                  <h4>{itm.name}</h4>
                                  <p>
                                    {itm.message}
                                  </p>
                                  <div className="service-btn">
                                    <button>View More</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* </SwiperSlide> */}
                    </>
                  );
                })}
                 {/* </Swiper> */}
              </div>

              <div className="contect-col-b">
                <div className="appointment-co ">
                  <div className="inner-box">
                    <h3>Book an Appointment</h3>
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
                    <button>Submit</button>
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
export { PhysicianNearMe };

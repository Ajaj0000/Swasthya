import React from "react";
import profPic from '../Image/30_15.jpeg';
import { TiStarFullOutline } from "react-icons/ti";
import google from "../Image/Headache.webp";
import { Link } from "react-router-dom";
import googleLogo from "../Image/physician-7.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function Testimonial() {
    const customerReview = [
        {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        },
        {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        }, {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        }, {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        }, {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        }, {
            id: 'a1',
            name: "hello world",
            time: "one year age",
            pic: profPic,
            // rating:'',
            message: "In my opinion this is the one of the best clinic in Jaipur. It has the most well behaved& managed staff.Especially  Dr.Meenakshi Soni's behavior is praiseworthy. She is very sincere &dedicated.her counselling to the patient is wonderful.Dr.Dashrath from this clinic is also very much sincere towards his work as physiotherapist, I've experienced him during giving therapy to my son at our residence,he's100% sincere towards his patient.He explains very well to the patient about the treatment &problem. I personally strongly recommend this clinic for healthy treatment",
        },
    ]
  return (
    <>
      <section id="uniqueWork">
        <div className="choice-head">
          <div className="inner-head">
            <h1>Patient Testimonial</h1>
            <h4>Our happy patient always speaks for us</h4>
          </div>
        </div>
        <div className="review">
          <div className="review-lite">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {customerReview.map((itm) => {
                return (
                  <>
                    <SwiperSlide>
                      <div className="prof1">
                        <div className="prof-lite">
                          <div className="customer">
                            <div className="customer-pic">
                              <img src={itm.pic} alt="img" />
                            </div>
                            <div>
                              <h4>{itm.name}</h4>
                              <span>{itm.time}</span>
                            </div>
                          </div>
                          <div className="star">
                            <span>
                              <TiStarFullOutline />
                            </span>
                            <span>
                              <TiStarFullOutline />
                            </span>
                            <span>
                              <TiStarFullOutline />
                            </span>
                            <span>
                              <TiStarFullOutline />
                            </span>
                            <span>
                              <TiStarFullOutline />
                            </span>
                          </div>
                          <div className="customer-mes">
                            <p className="cus-mes">{itm.message}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
export { Testimonial };

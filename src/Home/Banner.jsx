import img from "../Image/Rahul-Mathur.webp";
import Img from "../Image/Raman-Mathur.webp";
import img1 from "../Image/Diabetes.webp";
import img2 from "../Image/Fever.webp";
import img3 from "../Image/Headache.webp";
import img4 from "../Image/Heart-Disease.webp";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { IoIosCall } from "react-icons/io";
// import { SlEnvolope } from "react-icons/sl";
// import { IoLocationSharp } from "react-icons/io5";
// import { IoMdTime } from "react-icons/io";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="main-banner">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner">
              <div className="banner-list">
                <div className="doctor-img">
                  <img src={img} alt="img" />
                </div>
                <div className="doc">
                  <h5 className="top-txt">Best General physician in Jaipur</h5>
                  <h1>Dr. Rahul Mathur</h1>
                  <h6>Associate Consultant - Internal Medicine</h6>
                  <h6>MD (Gold Medalist)</h6>
                </div>
              </div>
              <p>
                Dr. Rahul Mathur is a Consultant Emergency Physician in Jaipur.
                He has more than 7+ years of experience in treating successfully
                Immediate Medical Assistance In The Case Of Accidents, Grievous
                injuries, And Illness. Currently, he is working at Eternal
                Multispeciality Hospital (EHCC) as a Consultant Emergency
                Physician.
              </p>
              <div className="features-list">
                <li>
                  <a href="/">
                    <img src={img1} alt="" />
                  </a>
                  <h5>Diabetes</h5>
                </li>
                <li>
                  <a href="/">
                    <img src={img2} alt="" />
                  </a>
                  <h5>Headache</h5>
                </li>
                <li>
                  <a href="/">
                    <img src={img3} alt="" />
                  </a>
                  <h5>Asthma</h5>
                </li>
                <li>
                  <a href="/">
                    <img src={img4} alt="" />
                  </a>
                  <h5>Fever</h5>
                </li>
              </div>
              <div className="banner-btn">
                <button>Appointment</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner ">
              <div className="banner-list">
                <div className="doctor-img">
                  <img src={Img} alt="img" />
                </div>
                <div className="doc">
                  <h5 className="top-txt">Best General physician in Jaipur</h5>
                  <h1>Dr. Raman Mathur</h1>
                  <h6>Associate Consultant - Internal Medicine</h6>
                  <h6>MD (Gold Medalist)</h6>
                </div>
              </div>
              <p>
                Dr. Raman Mathur is a Consultant Emergency Physician in Jaipur.
                He has more than 7+ years of experience in treating successfully
                Immediate Medical Assistance In The Case Of Accidents, Grievous
                injuries, And Illness. Currently, he is working at Eternal
                Multispeciality Hospital (EHCC) as a Consultant Emergency
                Physician.
              </p>
              <div className="features-list">
                <li>
                  <a href="/">
                    <img src={img1} alt="" />
                  </a>
                  <h5>Diabetes</h5>
                </li>
                <li>
                  <a href="/">
                    <img src={img2} alt="" />
                  </a>
                  <h5>Headache</h5>
                </li>
                <li>
                  <a href="/">
                    <img src={img3} alt="" />
                  </a>
                  <h5>Asthma </h5>
                </li>
                <li>
                  <a href="/">
                    <img src={img4} alt="" />
                  </a>
                  <h5>Fever</h5>
                </li>
              </div>
              <div className="banner-btn">
                <Link to="/contectus">
                <button>Appointment</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="appointment">
        <div className="inner-box">
          <h3>Book an Appointment</h3>
        </div>
        <form action="">
          <input type="text" placeholder="Enter Your Name" required />
          <br />
          <input type="number" placeholder="Enter Your Phone" required />
          <br />
          <input type="email" placeholder="Enter Your email" required/>
          <br />
          <input type="text" placeholder="Enter Your message" className="inn" required />
          <button>Submit</button>
        </form>
      </div>
      {/* <div className="slide-bottom">
        <div className="slide-container">
          <div className="row">
            <div className="col">
              <div className="contact-box">
                <div className="icon">
                  <i>
                    <IoIosCall />
                  </i>
                </div>
                <div className="inner-text">
                  <h6>Call Us</h6>
                  <p>1234567890</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-box">
                <div className="icon">
                  <i>
                    <SlEnvolope />
                  </i>
                </div>
                <div className="inner-text">
                  <h6>Contact Us</h6>
                  <p>swasthyaclinics@hotmail.com</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-box">
                <div className="icon">
                  <i>
                    <IoLocationSharp />
                  </i>
                </div>
                <div className="inner-text">
                  <h6>Swasthya-</h6>
                  <p>1330,kishan marg Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-box">
                <div className="icon">
                  <i>
                    <IoMdTime />
                  </i>
                </div>
                <div className="inner-text">
                  <h6>Open Hours</h6>
                  <p>Mon to Sat | 07:30 PM to 09:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-line"></div> */}
    </>
  );
}
export { Banner };

import React, { useState } from "react";
import logo from "../Image/1663225919_1.webp";
import { MainHeader } from "./Main-Header";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
function Headersec() {
  const [menuToggle, setMenuToggle] = useState(false);
  const handelToggle = () => {
    setMenuToggle(!menuToggle);
  };
  const [listToggle, setListToggle] = useState(false);
  const handelListToggle = () => {
    setListToggle(!listToggle);
  };
  const [listToggle1, setListToggle1] = useState(false);
  const handelListToggle1 = () => {
    setListToggle1(!listToggle1);
  };
  const [listToggle2, setListToggle2] = useState(false);
  const handelListToggle2 = () => {
    setListToggle2(!listToggle2);
  };
  const [listToggle3, setListToggle3] = useState(false);
  const handelListToggle3 = () => {
    setListToggle3(!listToggle3);
  };

  // const head = [
  //   {
  //     id: 1,
  //     name: "Home",
  //     path:"/"
  //   },
  //   {
  //     id: 2,
  //     name: "About Us",
  //     icon:<IoMdArrowDropdown />,
  //     path:"/about"
  //   },
  //   {
  //     id: 3,
  //     name: "Treatments",
  //     icon:<IoMdArrowDropdown />,
  //     path:"/treatment"

  //   },
  //   {
  //     id: 4,
  //     name: "Gallery",
  //     icon:<IoMdArrowDropdown />,
  //     path:"/gallery"
  //   },
  //   {
  //     id: 5,
  //     name: "FAQ",
  //     icon:<IoMdArrowDropdown />,
  //     path:"/faq"
  //   },
  //   {
  //     id: 6,
  //     name: "Health Tips",
  //   },
  //   {
  //     id: 7,
  //     name: "contact Us",
  //     path:"/contectus"
  //   },
  // ];
  const aboutdrop = [
    {
      name: "Dr.Rahul Mathur",
      path: "/about",
    },
    {
      name: "Dr.Raman Mathur",
      path: "/about",
    },
  ];
  const treatmentdrop = [
    {
      name: "Diabetes",
      path: "/treatment",
    },
    {
      name: "High BP",
      path: "/treatment",
    },
    {
      name: "Heart Disease",
      path: "/treatment",
    },
    {
      name: "Arthrities & Joint Pain",
      path: "/treatment",
    },
    {
      name: "Headache",
      path: "/treatment",
    },
    {
      name: "Anomia",
      path: "/treatment",
    },
    {
      name: "Fever",
      path: "/treatment",
    },
    {
      name: "Asthma",
      path: "/treatment",
    },
    {
      name: "Jaundice",
      path: "/treatment",
    },
    {
      name: "Tuberculosis",
      path: "/treatment",
    },
    {
      name: "Thyroid Disorder",
      path: "/treatment",
    },
    {
      name: "Obesity",
      path: "/treatment",
    },
    {
      name: "Vaccination For Adult",
      path: "/treatment",
    },
    {
      name: "Allergy",
      path: "/treatment",
    },
  ];
  const gallerydrop = [
    {
      name: "Photo gallery",
      path: "/photo",
    },
    {
      name: "Video Gallery",
      path: "/video",
    },
  ];
  const faqdrop = [
    {
      name: "Diabetes FAQ",
      path: "/faq",
    },
    {
      name: "Headache FAQ",
      path: "/faq",
    },
    {
      name: "Heart Disease FAQ",
      path: "/faq",
    },
    {
      name: "Obesity FAQ",
      path: "/faq",
    },
    {
      name: "Asthma FAQ",
      path: "/faq",
    },
    {
      name: "Joint Pain FAQ",
      path: "/faq",
    },
  ];

  return (
    <>
      <div className="header-sec">
        <MainHeader />
        <div className="header-lower">
          <div className="container">
            <div className="logo">
              <img src={logo} alt="/" />
            </div>
            {/* <span>
            
            </span> */}
            <div className="text">
              <li>
                <Link to="/">
                  <h5>Home</h5>
                </Link>
              </li>
              <li className="service1">
                <h5>
                  About Us
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </h5>
                <div className="dropContent-lite">
                  {aboutdrop.map((itm) => {
                    return (
                      <>
                        <Link to={itm.path}>
                          <p key={itm.key}>{itm.name}</p>
                        </Link>
                      </>
                    );
                  })}
                </div>
              </li>
              <li className="service1">
                <h5>
                  Treatment
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </h5>
                <div className="dropContent-lite">
                  {treatmentdrop.map((itm) => {
                    return (
                      <>
                        <Link to={itm.path}>
                          <p key={itm.key}>{itm.name}</p>
                        </Link>
                      </>
                    );
                  })}
                </div>
              </li>
              <li className="service1">
                <h5>
                  Gallery{" "}
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </h5>
                <div className="dropContent-lite">
                  {gallerydrop.map((itm) => {
                    return (
                      <>
                        <Link to={itm.path}>
                          <p key={itm.key}>{itm.name}</p>
                        </Link>
                      </>
                    );
                  })}
                </div>
              </li>
              <li className="service1">
                <h5>
                  FAQ{" "}
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </h5>
                <div className="dropContent-lite">
                  {faqdrop.map((itm) => {
                    return (
                      <>
                        <Link to={itm.path}>
                          <p key={itm.key}>{itm.name}</p>
                        </Link>
                      </>
                    );
                  })}
                </div>
              </li>
              <Link to="/health">
                <li>
                  <h5>Health Tips</h5>
                </li>
              </Link>
              <Link to="/contectus">
                <li>
                  <h5>Contact Us</h5>
                </li>
              </Link>
              {/* {head.map((a) => {
              return (
                <>
                 
                    <li>
                      <Link to={a.path}>
                      <h5>{a.name} <span>{a.icon}</span></h5>
                      </Link>
                    </li>
                  
                </>
              );
            })} */}
              <div className="header-btn">
                <button>Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <div className="navbar-res ">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu-btn .d-none">
          <h1>
            <span onClick={handelToggle}>
              <IoMenu />
            </span>
          </h1>
        </div>
      </div>
      <div
        className={`site-nevigation-res ${
          menuToggle ? "" : "site-nevigation-toggle"
        } d-none`}
      >
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link>
            <li className="service1" onClick={handelListToggle}>
              About Us
              <span>
                <IoMdArrowDropdown />
              </span>
            </li>
          </Link>
          <div
            className={`inner-li-div ${listToggle ? "inner-list-toggle" : ""}`}
          >
            {aboutdrop.map((itm) => {
              return (
                <>
                  <Link to={itm.path}>
                    <li className="inner-li">{itm.name}</li>
                  </Link>
                </>
              );
            })}
          </div>
          <Link>
            <li className="service1" onClick={handelListToggle1}>
              Treatment
              <span>
                <IoMdArrowDropdown />
              </span>
            </li>
          </Link>
          <div
            className={`inner-li-div ${listToggle1 ? "inner-list-toggle" : ""}`}
          >
            {treatmentdrop.map((itm) => {
              return (
                <>
                  <Link to={itm.path}>
                    <li className="inner-li">{itm.name}</li>
                  </Link>
                </>
              );
            })}
          </div>
          <Link className="service2">
            <li onClick={handelListToggle2}>
              Gellery
              <span>
                <IoMdArrowDropdown />
              </span>
            </li>
          </Link>

          <div
            className={`inner-li-div1 ${
              listToggle2 ? "inner-list-toggle" : ""
            }`}
          >
            <Link to="/photo">
              <li>Photos</li>
            </Link>
            <Link to="/video">
              <li>Videos</li>
            </Link>
          </div>
          <Link>
            <li className="service1" onClick={handelListToggle3}>
              FAQ
              <span>
                <IoMdArrowDropdown />
              </span>
            </li>
          </Link>
          <div
            className={`inner-li-div ${listToggle3 ? "inner-list-toggle" : ""}`}
          >
            {faqdrop.map((itm) => {
              return (
                <>
                  <Link to={itm.path}>
                    <li className="inner-li">{itm.name}</li>
                  </Link>
                </>
              );
            })}
          </div>
          <Link to="/health">
            <li>Health Tips</li>
          </Link>
          <Link to="/contectus">
            <li>Contect Us</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
export { Headersec };

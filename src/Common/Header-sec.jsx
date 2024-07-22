import React from "react";
import logo from "../Image/1663225919_1.webp";
import { MainHeader } from "./Main-Header";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

function Headersec() {
  const head = [
    {
      id: 1,
      name: "Home",
      path:"/"
    },
    {
      id: 2,
      name: "About Us",
      icon:<IoMdArrowDropdown />,
      path:"/about"
    },
    {
      id: 3,
      name: "Treatments",
      icon:<IoMdArrowDropdown />,
      path:"/treatment"
      
    },
    {
      id: 4,
      name: "Gallery",
      icon:<IoMdArrowDropdown />,
      path:"/gallery"
    },
    {
      id: 5,
      name: "FAQ",
      icon:<IoMdArrowDropdown />,
      path:"/faq"
    },
    {
      id: 6,
      name: "Health Tips",
    },
    {
      id: 7,
      name: "contact Us",
      path:"/contectus"
    },
  ];
  const aboutdrop = [
    {
      name:"Dr.Rahul Mathur",
      Path:"/"
    },
    {
      name:"Dr.Raman Mathur",
      Path:"/"
    }
  ];
  
  return (
    <>
      <div className="header-sec">
       <MainHeader/>
        <div className="header-lower">
          <div className="container">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="text">
            {head.map((a) => {
              return (
                <>
                 
                    <li>
                      <Link to={a.path}>
                      <h5>{a.name} <span>{a.icon}</span></h5>
                      </Link>
                    </li>
                  
                </>
              );
            })}
           <div className="header-btn">
           <button>Appointment</button>
           </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export { Headersec };

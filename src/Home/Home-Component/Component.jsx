import React from "react";
import { Headersec } from "../../Common/Header-sec";
import { Banner } from "../Banner";
import { GeneralPhysician } from "../General-physician";
import { Service } from "../Service";
import { Footer } from "../../Common/Footer";
import { GeneralPhysicianContect } from "../../ContectUs-section/General-Physician-Do";
import { Testimonial } from "../Testimonia";
import { WhychooseClinic } from "../WhyChooseClinic";
import { MiddleHealthSection } from "../Middle-Health-Section";

function Homecomponent() {
  
  return (
    <>
      <Headersec />
      <Banner />
      {/* <AboutUs/> */}
      <GeneralPhysician />
      {/* <Ourtreatment/> */}
     
      <GeneralPhysicianContect />
      <Service />
      <MiddleHealthSection/>
      <WhychooseClinic />
      {/* <GeneralPhysician/> */}
      <Testimonial />
      <Footer />
    </>
  );
}
export { Homecomponent };

import React from "react";
import { Headersec } from "../../Common/Header-sec";
import { Banner } from "../Banner";
import { GeneralPhysician } from "../General-physician";
import { Service } from "../Service";
import { Footer } from "../../Common/Footer";
import { Testimonial } from "../Testimonia";
import { WhychooseClinic } from "../WhyChooseClinic";
import { MiddleHealthSection } from "../Middle-Health-Section";
import { RecentHealthArticle } from "../Recent-health-article";
import { HomeFaq } from "../Home-Faq";

function Homecomponent() {
  return (
    <>
      <Headersec />
      <Banner />
      {/* <AboutUs/> */}
      <GeneralPhysician />
      <MiddleHealthSection />
      {/* <Ourtreatment/> */}
      {/*      <GeneralPhysicianContect /> */}
      <Service />
      
      <WhychooseClinic />
      {/* <GeneralPhysician/> */}
      <Testimonial />
      <RecentHealthArticle />
      <HomeFaq/>
      <Footer />
    </>
  );
}
export { Homecomponent };

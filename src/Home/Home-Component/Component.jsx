import React from "react";
import { Headersec } from "../../Common/Header-sec";
import { Banner } from "../Banner";
import { AboutUs } from "../AboutUs";
import { GeneralPhysician } from "../General-physician";
import { Service } from "../Service";
import { Ourtreatment } from "../OurTreatment";
import { Footer } from "../../Common/Footer";
import { Testimonial } from "../Testimonia";
import { WhychoodeClinic, WhychooseClinic } from "../WhyChooseClinic";

function Homecomponent(){
    return(
        <>
        <Headersec/>
        <Banner/>
        <AboutUs/>
        <GeneralPhysician/>
        <Ourtreatment/>
        <Service/>
        <WhychooseClinic/>
        <Testimonial/>
        <Footer/>
        

        </>
    )
}
export{Homecomponent}
import React from "react";
import { Headersec } from "../../Common/Header-sec";
import { Footer } from "../../Common/Footer";
import { FaqBanner } from "../Faq-Banner";

function FaqComponent(){
    return(

        <>
        <Headersec/>
        <FaqBanner/>
        <Footer/>
        </>
    )
}
export{FaqComponent}
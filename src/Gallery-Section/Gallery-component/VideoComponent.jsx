import React from "react";
import { Headersec } from "../../Common/Header-sec";
import { Footer } from "../../Common/Footer";
import { GalleryBanner } from "../Gallery-Banner";
import { VideoBanner } from "../Video-Banner";
import { Videos } from "../Video";

function VideoComponent(){

    return(
        <>
        <Headersec/>
        <VideoBanner/>
        <Videos/>
        <Footer/>
        </>
    )
}
export{VideoComponent}
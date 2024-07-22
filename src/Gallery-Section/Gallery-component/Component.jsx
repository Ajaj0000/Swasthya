import React from "react";
import { GalleryBanner } from "../Gallery-Banner";
import { Headersec } from "../../Common/Header-sec";
import { Footer } from "../../Common/Footer";
import { Photos } from "../Photos";

function GalleryComponent(){
    return(
        <>
        <Headersec/>
        <GalleryBanner/>
        <Photos/>
        <Footer/>

        </>
    )
}
export{GalleryComponent}
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homecomponent } from "../Home/Home-Component/Component";
import { GalleryComponent } from "../Gallery-Section/Gallery-component/Component";
import { RahulDetail } from "../About-section/DoctorDetail";
import { VideoComponent } from "../Gallery-Section/Gallery-component/VideoComponent";
import { ContectUs } from "../ContectUs-section/Contect-component/ContectUs";
import { TreatmentComponent } from "../Treatment-section/Treatment-component/Main-Treatment-component";
import { FaqComponent } from "../FAQ-Section/Faq-component/Faq-Component";





function Routing(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homecomponent/>}/>
            <Route path="/treatment" element={<TreatmentComponent/>}/>
            <Route path="/faq" element={<FaqComponent/>}/>
            {/* <Route path="/gallery" element={<GalleryComponent/>}/> */}
            <Route path="gallery"element={<VideoComponent/>}/>
            <Route path="/about" element={<RahulDetail/>}/>
            <Route path="/contectus"element={<ContectUs/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export {Routing}
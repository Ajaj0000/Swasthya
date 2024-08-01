import React from "react";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import { Homecomponent } from "../Home/Home-Component/Component";
import { GalleryComponent } from "../Gallery-Section/Gallery-component/Component";
import { RahulDetail } from "../About-section/DoctorDetail";
import { VideoComponent } from "../Gallery-Section/Gallery-component/VideoComponent";
import { ContectUs } from "../ContectUs-section/Contect-component/ContectUs";
import { TreatmentComponent } from "../Treatment-section/Treatment-component/Main-Treatment-component";
import { FaqComponent } from "../FAQ-Section/Faq-component/Faq-Component";
import { HealthComponenet } from "../Health-Tips-section/Health-Tips-component/Health-component";
import { ScrollToTop } from "../Scrolltotop/Scrolltotop";

function Routing() {
 
  return (
    <>
      <BrowserRouter>
      <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Homecomponent />} />
          <Route path="/treatment" element={<TreatmentComponent />} />
          <Route path="/faq" element={<FaqComponent />} />
          {/* <Route path="/gallery" element={<GalleryComponent/>}/> */}
          <Route path="/video" element={<VideoComponent />} />
          <Route path="/photo" element={<GalleryComponent />} />
          <Route path="/about" element={<RahulDetail />} />
          <Route path="/health" element={<HealthComponenet />} />
          <Route path="/contectus" element={<ContectUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export { Routing };

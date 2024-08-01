import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(){
    const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
    return(
        <>
        </>
    )
}
export{ScrollToTop}
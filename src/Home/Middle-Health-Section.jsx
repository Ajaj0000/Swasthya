import React from "react";
import img1 from "../Image/happy-patients.webp"
import img2 from "../Image/Year-Experience.webp"
import img3 from "../Image/Awards.webp"

function MiddleHealthSection(){
    return(
        <>
        <section>
            <div className="middle-section">
                <div className="over-layer">
                    <div className="contanier">
                        <div className="row">
                            <div className="colum">
                                <div className="outer-box">
                                    <div className="icon-box">
                                        <img src={img1} alt="icon" />
                                    </div>
                                    <div className="inner-text">
                                        <h2>3000+</h2>
                                        <h4>Happy patients</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="colum">
                                <div className="outer-box">
                                    <div className="icon-box">
                                        <img src={img2} alt="icon" />
                                    </div>
                                    <div className="inner-text">
                                        <h2>8+</h2>
                                        <h4>Year of Experience</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="colum">
                                <div className="outer-box">
                                    <div className="icon-box">
                                        <img src={img3} alt="icon" />
                                    </div>
                                    <div className="inner-text">
                                        <h2>10+</h2>
                                        <h4>Awards</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export{MiddleHealthSection}
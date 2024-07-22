import React from "react";
import img1 from "../Image/50_8.jpg";
import img2 from "../Image/6_19.png";
import img3 from "../Image/22_10.jpg";
import img4 from "../Image/24_9.jpg";
import img5 from "../Image/26_11.jpg";
import img6 from "../Image/28_5.jpg";
import img7 from "../Image/30_15.jpeg";
import img8 from "../Image/30_6.jpg";
import img9 from "../Image/32_12.jpeg";
import img10 from "../Image/32_18.png";
import img11 from "../Image/34_22.jpg";
import img12 from "../Image/36_14.jpeg";
import img13 from "../Image/40_21.png";
import img14 from "../Image/45_13.jpeg";
import img15 from "../Image/46_17.png";
import img16 from "../Image/46_7.jpg";
import img17 from "../Image/47_4.png";
import img18 from "../Image/50_3.jpg";
import img19 from "../Image/50_8.jpg";
import img20 from "../Image/6_19.png";
import img21 from "../Image/9_20.png";
import img22 from "../Image/14_16.jpeg";



function Photos(){
    const serviceData = [
        {
            id: 'c1',
            img: img1
        },
        {
            id: 'c1',
            img: img2,
        },
        {
            id: 'c1',
           img: img3
        },
        {
            id: 'c1',
           img: img4
        },
        {
            id: 'c1',
            img: img5
        },
        {
            id: 'c1',
            img: img6
        },
        {
            id: 'c1',
           img: img7
        },
        {
            id: 'c1',
            img: img8
        },
        {
            id: 'c1',
            img: img9
        },
        {
            id: 'c1',
            img: img10
        },
        {
            id: 'c1',
            img: img11
        },
        {
            id: 'c1',
            img: img12
        },
        {
            id: 'c1',
            img: img13
        },
        {
            id: 'c1',
            img: img14
        },
        {
            id: 'c1',
            img: img15
        },
        {
            id: 'c1',
            img: img16
        },
        {
            id: 'c1',
            img: img17
        },

        {
            id: 'c1',
            img: img18
        }, {
            id: 'c1',
            img: img19
        },
        {
            id: 'c1',
            img: img20
        },
        {
            id: 'c1',
            img: img21
        },
        {
            id: 'c1',
            img: img22
        },
    ]

    return(
        <>
        <section id="service">
                <div className="service-inner">
                    <div className="gallery">
                        {
                            serviceData.map((itm) => {
                                return (
                                    <>
                                            <div className="card-img">
                                                <img src={itm.img} alt="img" />
                                            </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        
        </>
    )
}
export{Photos}
import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import img1 from "../Image/happy-patients.webp";
import img2 from "../Image/Year-Experience.webp";
import img3 from "../Image/Awards.webp";

function MiddleHealthSection() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.5, // Trigger when 50% of the section is in view
    });

    const [counts, setCounts] = useState([0, 0, 0]);

    useEffect(() => {
        if (inView) {
            const endValues = [3000, 8, 10];
            endValues.forEach((endValue, i) => {
                animateValue(i, 0, endValue, 2000);
            });
        }
    }, [inView]);

    const animateValue = (index, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCounts(prevCounts => {
                const newCounts = [...prevCounts];
                newCounts[index] = Math.floor(progress * (end - start) + start);
                return newCounts;
            });
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    return (
        <section ref={ref}>
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
                                        <h2>{counts[0]}+</h2>
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
                                        <h2>{counts[1]}+</h2>
                                        <h4>Years of Experience</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="colum">
                                <div className="outer-box">
                                    <div className="icon-box">
                                        <img src={img3} alt="icon" />
                                    </div>
                                    <div className="inner-text">
                                        <h2>{counts[2]}+</h2>
                                        <h4>Awards</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { MiddleHealthSection };
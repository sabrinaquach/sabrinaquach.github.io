import React, { useEffect, useState } from "react";
import './projectThree.css'
// import { BiSearchAlt, BiBook, BiRotateRight, BiSmile, BiPen, BiLayer, BiTargetLock, BiSliderAlt, BiBrain, BiShow } from "react-icons/bi";
import { useLocation, useNavigate } from 'react-router-dom';
// import Square from "../components/square/square";
// import Rectangle from "../components/theme-card/rectangle";
// import LargeRectangle from "../components/competitor-card/largeRectangle";
// import SmallRectangle from "../components/core-card/smallRectangle";
// import DesignCard from "../components/design-iteration-card/designCard";

const ProjectThree = () => {
    const location = useLocation();
    const navigate = useNavigate();
        
    useEffect(() => {
        setTimeout(() => {
          if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
            navigate(location.pathname, { replace: true, state: {} });
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }
        }, 0);
    }, [location, navigate]);

    const [modalImage, setModalImage] = useState(null);

    return (
        <div className="project-container" id="Aura">
            <div className="project-content">
                <div className="project-block">
                    <div className="text-column">
                        <h3 className="project-header">Case Study</h3>
                        <h1 className="project-title">Aura</h1>
                        <p className="project-description">Smart home app to view energy levels and change temperature in multiple rooms.</p>
                    </div>
                    <div className="project-content-items">
                        <img className="project2-image" src="/images/aura-image1.png" alt="Aura"/>
                    </div>
                </div>
            </div>

            <section className="case-study-container">
                <h1 className="section-header">Coming Soon...</h1>
            </section>
        </div>
    )
}

export default ProjectThree;
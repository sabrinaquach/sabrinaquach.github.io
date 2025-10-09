import React, { useEffect, useState } from "react";
import './projectThree.css'
import '../../../assets/fonts/font.css'
import { BiSearchAlt, BiBook, BiRotateRight, BiSmile, BiPen, BiLayer, BiTargetLock, BiSliderAlt, BiBrain, BiShow } from "react-icons/bi";
import { useLocation, useNavigate } from 'react-router-dom';
import Square from "../components/square/square";
import Rectangle from "../components/theme-card/rectangle";
import LargeRectangle from "../components/competitor-card/largeRectangle";
import SmallRectangle from "../components/core-card/smallRectangle";
import DesignCard from "../components/design-iteration-card/designCard";

const ProjectThree = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (location.state?.scrollTo === 'about') {
        const el = document.getElementById('about');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
    
          navigate(location.pathname, { replace: true, state: {} });
        }
      }
    }, [location, navigate]);
    

    const [modalImage, setModalImage] = useState(null);

    return (
        <div className="project3-container" id="Aura">
            <div className="project3-content">
                <div className="project3-block">
                    <div className="text-column">
                        <h3 className="project3-header">Case Study</h3>
                        <h1 className="project3-title">Aura</h1>
                        <p className="project3-description">Smart home app to view energy levels and change temperature in multiple rooms.</p>
                    </div>
                    <div className="project3-content-items">
                        <img className="project3-image" src="/images/aura-image1.png" alt="Aura Image"/>
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
import React, { useEffect, useState } from "react";
import './projectTwo.css'
import '../../../assets/fonts/font.css'
import { BiSearchAlt, BiBook, BiRotateRight, BiSmile, BiPen, BiLayer, BiTargetLock, BiSliderAlt, BiBrain, BiShow } from "react-icons/bi";
import { useLocation, useNavigate } from 'react-router-dom';
import Square from "../components/square/square";
import Rectangle from "../components/theme-card/rectangle";
import LargeRectangle from "../components/competitor-card/largeRectangle";
import SmallRectangle from "../components/core-card/smallRectangle";
import DesignCard from "../components/design-iteration-card/designCard";

const ProjectTwo = () => {
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
        <div className="project2-container" id="SpartanSync">
            <div className="project2-content">
                <div className="project2-block">
                    <div className="text-column">
                        <h3 className="project2-header">Case Study</h3>
                        <h1 className="project2-title">SpartanSync</h1>
                        <p className="project2-description">Smart scheduling for busy students.</p>
                    </div>
                    <div className="project2-content-items">
                        <img className="project2-image" src="/images/spartansync-image1.png" alt="SpartanSync Image"/>
                    </div>
                </div>
            </div>

            <section className="case-study-container">
                <h1 className="section-header">Coming Soon...</h1>
            </section>
        </div>
    )
}

export default ProjectTwo;
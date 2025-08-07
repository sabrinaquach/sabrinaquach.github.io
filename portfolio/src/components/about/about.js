import React, { useEffect } from "react";
import './about.css'
import '../../assets/fonts/font.css'
import { FiMessageSquare } from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
      if (location.state?.scrollTo === 'about') {
        const el = document.getElementById('about');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
    
          // optional: clear state after scrolling so it doesn't re-trigger
          navigate(location.pathname, { replace: true, state: {} });
        }
      }
    }, [location, navigate]);
    
    const handleContactClick = () => {
        const el = document.getElementById('footer');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };   

    return (
        <div className="about-container" id="about">
            <div className="about-content">
                <h2 className="about-title">About Me</h2>
                <div className="content-row">
                    <div className="pfp-circle"></div>
                    <div className="text-columns">
                        <div className="content-items">
                                <h3 className="about-subtitle">Hello I’m Sabrina!</h3>
                                <p className="about-description">An aspiring UX/Product Designer with a background in Computer Engineering. I’m passionate about creating products that focus on user needs.</p>
                        </div>
                        <div className="content-items">
                            <h3 className="about-subtitle">During “Me” time</h3>
                            <p className="about-description">I enjoy eating delicious food, yoga, and making new things. Ceramics is something I’ve enjoyed doing since high school, it feels nice to do something physically creative.</p>
                            <div className="message-row-about nav-buttons">
                                <button 
                                    className='message-button' 
                                    onClick={handleContactClick}
                                >
                                    <FiMessageSquare />
                                    Message Me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="photos-section">
                <h2 className="photo-title">Highlights</h2>
                <div className="photo-grid">
                    <div className="photo photo-1"></div>
                    <div className="photo photo-2"></div>
                    <div className="photo photo-3"></div>
                    <div className="photo photo-4"></div>
                    <div className="photo photo-5">
                        <video 
                            src="/videos/beyonce.mov" 
                            loop 
                            muted
                            autoPlay
                            playsInline
                            className="photo-video"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
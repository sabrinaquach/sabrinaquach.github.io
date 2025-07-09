import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './work.css'
import '../../assets/fonts/font.css'

const Work = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash === '#work') {
        const el = document.getElementById('work');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [location]);
    
    return (
        <div>
        <div className="work-container">
            <div className='main-nav'>
                <div className='nav-header'>
                    <h1 className='name'>Sabrina</h1>
                    <h1 className='description'>Sabrina Quach is a UX designer and software engineer. Studying engineering and design helped her see tech problems through a new lens, one that focuses on real people.</h1>
                </div>
                <div className='nav-artist'>
                    <h2 className='artist-tag'>
                        Photo by  
                        <a href="https://unsplash.com/@s_midili?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer"> serjan midili</a> on 
                        <a href="https://unsplash.com/photos/koi-fish-swim-in-dark-water-hJb7hOl7AEs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer"> Unsplash</a>
                    </h2>
                </div>
                {/* <button className='desktopMenuButton'>
                    <FiMessageSquare />
                    Contact Me
                </button> */}
            </div>
        </div>
        <section id="work" className="work-section">
            <h2 className="section-title">Work</h2>
        </section>
        </div>
    )
}

export default Work
import React from 'react';
import './navbar.css';
// import { FiMessageSquare } from "react-icons/fi";
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import '../../assets/fonts/font.css'

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const navigate = useNavigate();
    const handleWorkClick = () => {
    if (location.pathname === '/') {
        //if on homepage scroll directly to work section
        const el = document.getElementById('work');
        if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        //navigate home and scrolls to work section
        navigate('/#work');
    }
    };

    return (
        <nav className={`navbar ${isHome ? 'navbar-light' : 'navbar-dark'}`}>
            <div className='nav-content'>
                <div className={`nav-buttons ${isHome ? 'navbar-light' : 'navbar-dark'}`}>
                    <button 
                        className='resume-button' 
                        onClick={() => window.open('https://drive.google.com/file/d/1vh-xTEQ21noU3d0xxoUGupWvtbcraZHV/view?usp=sharing', '_blank')}
                    >
                        Resume
                    </button>
                    <button 
                        className='linkedin-button'
                        onClick={() => window.open('https://www.linkedin.com/in/sabrina-quach-sjsu/', '_blank')}
                    >
                        LinkedIn
                    </button>
                    <button 
                        className='github-button'
                        onClick={() => window.open('https://github.com/sabrinaquach', '_blank')}
                    >
                        GitHub
                    </button>
                </div>
                <div className='desktopMenuList'>
                <div onClick={handleWorkClick} className="desktopMenuListItem">
                    Work
                </div>


                    <RouterLink to="/about" className="desktopMenuListItem">About</RouterLink>
                    <RouterLink to="/contact" className="desktopMenuListItem">Contact</RouterLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
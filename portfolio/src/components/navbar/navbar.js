import React from 'react';
import './navbar.css';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import { BiSun, BiArrowToTop } from "react-icons/bi";
import '../../assets/fonts/font.css'

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleWorkClick = () => {
        if (location.pathname === '/') {
            const el = document.getElementById('work');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/#work');
        }
    };

    const handleContactClick = () => {
        if (location.pathname === '/') {
            const el = document.getElementById('footer');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/#footer');
        }
    };

    const handleTopPageClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };      

    return (
        <nav className="navbar">
            <div className='nav-content'>
                <div className="nav-row nav-buttons">
                    <p className='initial' 
                        onClick={handleTopPageClick}
                    >s.q.</p>
                </div>

                <div className='desktopMenuList'>
                    <div onClick={handleWorkClick} className="desktopMenuListItem">
                        Work
                    </div>
                    <RouterLink to="/about" className="desktopMenuListItem">About</RouterLink>
                    <div onClick={handleContactClick} className="desktopMenuListItem">
                        Contact
                    </div>
                </div>

                <div className='nav-buttons'>
                    <div className='circle-button'>
                        <button 
                            className='sun-button' 
                            onClick={handleContactClick}
                        >
                            <BiSun />
                        </button>
                    </div>
                    <div className='circle-button'>
                        <button 
                            className='top-button' 
                            onClick={handleTopPageClick}
                        >
                            <BiArrowToTop />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
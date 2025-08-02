import React from 'react';
import './navbar.css';
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
    const handleContactClick = () => {
        const scrollToFooter = () => {
          const el = document.getElementById('footer');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        };
      
        if (location.pathname === '/') {
          scrollToFooter();
        } else {
          navigate('/', { replace: false });
          // Delay to wait for homepage render
          setTimeout(() => {
            scrollToFooter();
          }, 100); // adjust if needed
        }
      };
      
    return (
        <nav className="navbar">
            <div className='nav-content'>
                <div className="nav-row nav-buttons">
                    <p className='initial' 
                        onClick={() => {
                            if (location.pathname !== '/') {
                                navigate('/');
                            } else {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
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
            </div>
        </nav>
    )
}

export default Navbar;
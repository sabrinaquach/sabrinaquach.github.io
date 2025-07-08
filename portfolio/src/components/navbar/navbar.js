import React from 'react';
import './navbar.css';
// import { FiMessageSquare } from "react-icons/fi";
import { Link } from 'react-scroll'
import '../../assets/fonts/font.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-content'>
                <div className='nav-buttons'>
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
                <div className='nav-description'>
                    <h1 className='description'>Sabrina Quach is a UX designer and software engineer. Studying engineering and design helped her see tech problems through a new lens, one that focuses on real people.</h1>
                </div>
                <div className='nav-artist'>
                    <h2 className='artist-tag'>
                        Photo by  
                        <a href="https://unsplash.com/@s_midili?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer"> serjan midili</a> on 
                        <a href="https://unsplash.com/photos/koi-fish-swim-in-dark-water-hJb7hOl7AEs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer"> Unsplash</a>
                    </h2>
                </div>
            </div>
            <div className='main-nav'>
                <div className='desktopMenuList'>
                    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Works</Link>
                    <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Contact</Link>
                </div>
                {/* <button className='desktopMenuButton'>
                    <FiMessageSquare />
                    Contact Me
                </button> */}
            </div>
        </nav>
    )
}

export default Navbar;
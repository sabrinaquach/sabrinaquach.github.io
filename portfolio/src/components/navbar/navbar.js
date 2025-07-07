import React from 'react';
import '../navbar.css';
// import { FiMessageSquare } from "react-icons/fi";
import { Link } from 'react-scroll'
import '../../assets/fonts/font.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='left-nav'>
                <h1 className='name'>SABRINA <br/> QUACH</h1>
            </div>
            <div className='right-nav'>
                <div className='desktopMenuList'>
                    <Link className='desktopMenuListItem'>Work</Link>
                    <Link className='desktopMenuListItem'>About</Link>
                    <Link className='desktopMenuListItem'>Resume</Link>
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
import React from "react";
import './footer.css'
import '../../assets/fonts/font.css'

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="main-row">
                <div className="column-left">
                    <div className="s-cube">
                        <h2 className="s-title">s.</h2>
                        <p className="inital-subtitle">Say "Hello"</p>
                        <p className="inital-email">sabrina.quach@sjsu.edu</p>
                    </div>
                    <div className="q-cube">
                        <h2 className="q-title">q.</h2>
                        <p className="inital-subtitle">Connect</p>
                        <div className="link-list">
                            <a className="resume-button" href="https://drive.google.com/file/d/1vh-xTEQ21noU3d0xxoUGupWvtbcraZHV/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume ↗</a>
                            <a className="linkedin-button" href="https://www.linkedin.com/in/sabrina-quach-sjsu/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                            <a className="github-button" href="https://github.com/sabrinaquach" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                        </div>
                    </div>
                </div>
                <div className="message-column">
                    <div className="message-content">
                        <div className="message-inner">
                            <h2 className="message-title">Send A Message</h2>
                            <p className="message-description">Reach out and let’s create amazing things. Let’s achieve greatness together!</p>             
                            <form className="contact-form">
                                <input type="text" className="message-name" placeholder="Your name"/>
                                <input type="email" className="message-email" placeholder="Your email"/>
                                <textarea type="message" className="message-msg" rows="8"  placeholder="Your message"/>
                                <div className="submit-container">
                                    <button type="submit" className="message-submit" value="send">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cutoff-wrapper">
                <h1 className="connect-bottom">Connect</h1>
            </div>
        </footer>
    )
}

export default Footer;
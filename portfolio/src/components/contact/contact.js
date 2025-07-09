import React from "react";
import './contact.css'
import '../../assets/fonts/font.css'

const Contact = () => {
    return (
        <div>
            <div className="contact-container">
                <div className="section-container">
                    <div className="section-row">
                        <h2 className="section-title">Connect With Me</h2>
                    </div>

                    <div className="section-row">
                        <div className="contact-column">
                            <h3 className="section-subtitle">Say "Hello"</h3>
                            <p className="section-item">sabrina.quach@sjsu.edu</p>
                        </div>

                        <div className="contact-column">
                            <h3 className="section-subtitle">Connect</h3>
                            <div className="link-list">
                            <a href="https://drive.google.com/file/d/1vh-xTEQ21noU3d0xxoUGupWvtbcraZHV/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume ↗</a>
                            <a href="https://www.linkedin.com/in/sabrina-quach-sjsu/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                            <a href="https://github.com/sabrinaquach" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="message-section">
                <div className="message-container">
                    <div className="message-row">
                        <div className="message-content">
                            <h2 className="message-title">Send A Message</h2>
                            <p className="message-description">Reach out and let’s create amazing things. Let’s achieve greatness together!</p>             
                            <form className="contact-form">
                                <input type="text" className="message-name" placeholder="Your name"/>
                                <input type="email" className="message-email" placeholder="Your email"/>
                                <textarea type="message" className="message-msg" rows="5" placeholder="Your message"/>
                                <div className="submit-container">
                                    <button type="submit" className="message-submit" value="send">Submit</button>
                                </div>
                            </form>
                        </div>
                        {/* <div className="message-decor">
                            <h2 className="decor-title">Let's Talk</h2>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
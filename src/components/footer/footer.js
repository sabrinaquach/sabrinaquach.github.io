import React, { useState } from "react";
import SpotlightCard from "../../utilities/SpotlightCard";
import { supabase } from "../../auth/supabaseClient";
import './footer.css'

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const { data, error } = await supabase
          .from('Messages') 
          .insert([
            {
              name: formData.name,
              email: formData.email,
              message: formData.message,
            },
          ]);
      
        console.log("Supabase response:", { data, error });
      
        if (error) {
          console.error("Submission error:", error.message);
          alert("Submission failed: " + error.message);
        } else {
          console.log("Message sent!", data);
          setFormData({ name: '', email: '', message: '' });
          alert("Message sent successfully!");
        }
    };

    return (  
        <footer className="footer" id="footer">
            <div className="main-row">
                <div className="column-left">
                    <SpotlightCard className="s-cube" spotlightColor="rgba(255, 178, 102, 0.2)">
                        <h2 className="s-title">s.</h2>
                        <p className="inital-subtitle">Say "Hello"</p>
                        <p className="inital-email">sabrinaquach998@gmail.com</p>
                    </SpotlightCard >
                    <SpotlightCard className="q-cube" spotlightColor="rgba(255, 178, 102, 0.2)">
                        <h2 className="q-title">q.</h2>
                        <p className="inital-subtitle">Connect</p>
                        <div className="link-list">
                            <a className="resume-button" href="https://drive.google.com/file/d/1T7LrRWQ8eam5iAzaSziJcGjNu1XFukbk/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume ↗</a>
                            <a className="linkedin-button" href="https://www.linkedin.com/in/sabrina-quach-sjsu/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                            <a className="github-button" href="https://github.com/sabrinaquach" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                        </div>
                    </SpotlightCard >
                </div>
                <div className="message-column">
                    <SpotlightCard className="message-content" spotlightColor="rgba(255, 178, 102, 0.2)">
                        <div className="message-inner">
                            <h2 className="message-title">Send A Message</h2>
                            <p className="message-description">Reach out and let’s create amazing things. Let’s achieve greatness together!</p>             
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    className="message-name" 
                                    placeholder="Your full name"
                                />
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className="message-email" 
                                    placeholder="Your email"
                                />
                                <textarea 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    className="message-msg" 
                                    rows="7"  
                                    placeholder="Your message"
                                />
                                <div className="submit-container">
                                    <button 
                                        type="submit" 
                                        className="message-submit" 
                                        value="send"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </SpotlightCard >
                </div>
            </div>
            <div className="cutoff-wrapper">
                <h1 className="connect-bottom">Connect</h1>
            </div>
        </footer>
    )
}

export default Footer;
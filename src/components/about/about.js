import React, { useEffect } from "react";
import './about.css'
import { FiMessageSquare } from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom';
import { openContactMenu } from '../../utilities/contactMenu';
import Moodboard from './moodboard';
import TextHighlighter from '../../utilities/TextHighlighter';
import { CONTACT_EMAIL, CopyEmail } from '../footer/contact';

import boothBaby from '../../assets/images/photobooth/booth-baby.jpg';
import boothYoung from '../../assets/images/photobooth/booth-young.jpg';
import boothNow from '../../assets/images/photobooth/booth-now.jpg';

// Frames of the photobooth strip, top to bottom: baby, kid, now. The files
// are already cropped to the frame's 5:6, so `position` just centres them.
const PHOTOBOOTH = [
    { src: boothBaby, position: '50% 50%', alt: 'Sabrina as a baby, asleep under a blanket' },
    { src: boothYoung, position: '50% 50%', alt: 'Sabrina as a little girl, smiling with her fingers on her cheeks' },
    { src: boothNow, position: '50% 50%', alt: 'Sabrina today, a portrait against a white wall' },
];

const About = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (location.state?.scrollTo === 'about') {
        const el = document.getElementById('about');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });

          navigate(location.pathname, { replace: true, state: {} });
        }
      }
    }, [location, navigate]);

    return (
        <div className="about" id="about">
            {/* A poster: giant marker "about me" scrawled across a photobooth
                strip on dusty pink, the name small in the corner and the details
                set small on the right. */}
            <section className="about-poster">
                <div className="poster-stage">

                    <figure className="photo-strip poster-strip">
                        {PHOTOBOOTH.map(({ src, position, alt }) => (
                            <span key={src} className="photo-strip-frame">
                                <img src={src} alt={alt} style={{ objectPosition: position }} />
                            </span>
                        ))}
                    </figure>

                    <h1 className="poster-title">
                        <span className="poster-word poster-word--about">about</span>{' '}
                        <span className="poster-word poster-word--me">me</span>
                    </h1>
                </div>

                <div className="poster-info">
                    <p className="poster-bio">
                        <TextHighlighter>Hi, I'm Sabrina!</TextHighlighter> I’m still growing as a designer, builder, but more importantly, as a person! 
                        I love creating products that <TextHighlighter delay={0.4}>focus on people and their needs</TextHighlighter>. Outside of design, I workout, 
                        listen to music, and spend time with my dog.
                    </p>
                    {/* <button className="message-button poster-message" onClick={openContactMenu}>
                        <FiMessageSquare />
                        Message Me
                    </button> */}
                </div>
            </section>

            {/* No visible heading: the receipt on the board says "During "Me" time". */}
            <section className="about-me-time" aria-label="During “Me” time">
                <Moodboard />
            </section>
        </div>
    )
}

export default About;

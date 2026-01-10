import { useEffect, useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import ASCIIText from '../../utilities/ASCIIText';
import TextType from '../../utilities/TextType';
import './hero.css'; 

const Hero = ({ onMessageClick }) => {
  const [showAscii, setShowAscii] = useState(true);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const asciiTimer = setTimeout(() => {
      setShowAscii(false);
      setShowHero(true);
    }, 5000);

    return () => clearTimeout(asciiTimer);
  }, []);

  return (
    <div className="hero-container" id="hero">
        <div className='main-nav'>
        {showAscii && (
            <div className="ascii-wrapper">
            <ASCIIText
                text="hi"
                asciiFontSize={8}
                textFontSize={300}
                enableWaves={true}
            />
            </div>
        )}
        {showHero && (
            <div className="nav-header fade-in">
            <h1 className="hello-message">
                I’M SABRINA,&nbsp;
                <TextType
                  className="hello-message"
                  text={["Designer", "Engineer", "Builder"]}
                  typingSpeed={75}
                  pauseDuration={2000}
                  showCursor={true}
                  cursorCharacter="|"
                />
            </h1>
            <p className="description">
                STUDYING ENGINEERING AND DESIGN HELPED ME SEE TECH PROBLEMS THROUGH A NEW LENS, 
                ONE THAT FOCUSES ON REAL PEOPLE.
            </p>
            <p className="ps-message">p.s. I built this from scratch :)</p>
            <div className="message-row nav-buttons">
                <button className='message-button' onClick={onMessageClick}>
                  <FiMessageSquare />
                  Message Me
                </button>
            </div>
            </div>
        )}
        </div>
    </div>
  );
};

export default Hero;

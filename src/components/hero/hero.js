import { useEffect, useRef, useState } from 'react';
import ASCIIText from '../../utilities/ASCIIText';
import TextType from '../../utilities/TextType';
import MessageMeButton from './messageMeButton';
import './hero.css';

const TYPED_WORDS = ["Designer", "Engineer", "Builder"];

// Visitors who've asked their system to reduce motion skip the wavy intro
// and land straight on the hero.
const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Hero = () => {
  const [showAscii, setShowAscii] = useState(() => !prefersReducedMotion());
  const [showHero, setShowHero] = useState(() => prefersReducedMotion());
  const introTimer = useRef(null);
  const nameRef = useRef(null);

  // Ends the intro: on its own after 5s, or early when the visitor clicks,
  // taps or uses the Skip intro button.
  const finishIntro = ({ moveFocus = false } = {}) => {
    clearTimeout(introTimer.current);
    setShowAscii(false);
    setShowHero(true);
    // From the keyboard, put focus on the hero so it isn't lost when the skip
    // button disappears.
    if (moveFocus) requestAnimationFrame(() => nameRef.current?.focus());
  };

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    introTimer.current = setTimeout(finishIntro, 5000);
    return () => clearTimeout(introTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`hero-container${showAscii ? ' is-intro' : ''}`}
      id="hero"
      onClick={showAscii ? () => finishIntro() : undefined}
    >
        <div className='main-nav'>
        {showAscii && (
            /* role="img" makes screen readers announce "hi" instead of reading
               out the thousands of characters the ASCII art is made of. */
            <div className="ascii-wrapper" role="img" aria-label="hi">
            <ASCIIText
                text="hi"
                asciiFontSize={8}
                textFontSize={300}
                enableWaves={true}
            />
            </div>
        )}
        {showAscii && (
            <button
              type="button"
              className="intro-skip"
              onClick={(e) => {
                e.stopPropagation();
                finishIntro({ moveFocus: e.detail === 0 });
              }}
            >
              Skip intro
            </button>
        )}
        {showHero && (
          <div className="nav-header fade-in">
            <h1 className="hello-message" ref={nameRef} tabIndex={-1}>
                I’M SABRINA,&nbsp;
                {/* The hidden copies hold the slot at the widest word's width, so
                    the centred block doesn't shift as letters are typed. */}
                <span className="typed-slot">
                  {TYPED_WORDS.map((word) => (
                    <span key={word} className="typed-ghost" aria-hidden="true">
                      {word}<span className="text-type__cursor">|</span>
                    </span>
                  ))}
                  <TextType
                    className="hello-message"
                    text={TYPED_WORDS}
                    typingSpeed={75}
                    pauseDuration={2000}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </span>
            </h1>
            <p className="description">
                Product designer who can build what she designs.
            </p>
            <div className="message-row nav-buttons">
                <MessageMeButton />
            </div>
          </div>
        )}
        </div>
    </div>
  );
};

export default Hero;

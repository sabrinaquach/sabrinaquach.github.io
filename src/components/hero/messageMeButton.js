import React, { useRef } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { ringBell } from "../../utilities/bellRing";
import { openContactMenu } from "../../utilities/contactMenu";
import "./messageMeButton.css";

/*
 * The Message Me pill. Hovering (or tabbing to it) rings the icon, BellToggle
 * style; clicking opens the menu at the contact form. Pass `className` to add
 * page-specific styles on top of .message-button.
 */
const MessageMeButton = ({ className = "" }) => {
    const glyphRef = useRef(null);
    const waveLeft = useRef(null);
    const waveRight = useRef(null);

    const ring = () => ringBell(glyphRef.current, [waveLeft.current, waveRight.current]);

    return (
        <button
            type="button"
            className={`message-button ${className}`}
            onClick={openContactMenu}
            onMouseEnter={ring}
            onFocus={(e) => {
                // Keyboard focus only; a click's focus already rang on hover.
                if (e.target.matches(":focus-visible")) ring();
            }}
        >
            <span className="message-button__icon" aria-hidden="true">
                <span ref={glyphRef} className="message-button__glyph">
                    <FiMessageSquare />
                </span>
                <svg ref={waveLeft} className="message-button__wave message-button__wave--left" viewBox="0 0 14 14">
                    <path d="M14 8a6 6 0 0 0-6 6" />
                    <path d="M14 4A10 10 0 0 0 4 14" />
                </svg>
                <svg ref={waveRight} className="message-button__wave message-button__wave--right" viewBox="0 0 14 14">
                    <path d="M0 8a6 6 0 0 1 6 6" />
                    <path d="M0 4a10 10 0 0 1 10 10" />
                </svg>
            </span>
            Message Me
        </button>
    );
};

export default MessageMeButton;

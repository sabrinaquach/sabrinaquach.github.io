import React, { useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";
import "./sendButton.css";
import { ringBell } from "../../utilities/bellRing";

/*
 * Send button with the React Bits <BellToggle /> animation (see
 * utilities/bellRing.js): when a message goes through, the paper airplane
 * rings and the label blurs from SEND to SENT as the colours flip.
 */
const SendButton = ({ visible, sending, sent, tabIndex }) => {
    const rootRef = useRef(null);
    const glyphRef = useRef(null);
    const waveLeft = useRef(null);
    const waveRight = useRef(null);

    const ring = () => ringBell(glyphRef.current, [waveLeft.current, waveRight.current]);

    useEffect(() => {
        if (sent) ring();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sent]);

    // Press-in, as in BellToggle: a slight shrink while the pointer is down.
    const press = (e) => {
        if (e.button === 0 && rootRef.current) rootRef.current.dataset.pressed = "";
    };
    const release = () => {
        if (rootRef.current) delete rootRef.current.dataset.pressed;
    };

    const shown = visible || sent;

    return (
        <span
            ref={rootRef}
            className={`send-button${shown ? " is-visible" : ""}`}
            data-on={sent ? "true" : "false"}
        >
            <button
                type="submit"
                className="send-button__button"
                aria-label={sent ? "Message sent" : "Send message"}
                aria-hidden={!shown}
                tabIndex={shown ? tabIndex : -1}
                disabled={!visible || sending || sent}
                onPointerDown={press}
                onPointerUp={release}
                onPointerCancel={release}
                onPointerLeave={release}
            >
                <span className="send-button__icon" aria-hidden="true">
                    <span ref={glyphRef} className="send-button__glyph">
                        <FiSend />
                    </span>
                    <svg ref={waveLeft} className="send-button__wave send-button__wave--left" viewBox="0 0 14 14">
                        <path d="M14 8a6 6 0 0 0-6 6" />
                        <path d="M14 4A10 10 0 0 0 4 14" />
                    </svg>
                    <svg ref={waveRight} className="send-button__wave send-button__wave--right" viewBox="0 0 14 14">
                        <path d="M0 8a6 6 0 0 1 6 6" />
                        <path d="M0 4a10 10 0 0 1 10 10" />
                    </svg>
                </span>
                <span className="send-button__say" aria-hidden="true">
                    <span className="send-button__face send-button__face--off">Send</span>
                    <span className="send-button__face send-button__face--on">Sent</span>
                </span>
            </button>
            <span className="send-button__status" aria-live="polite">
                {sent ? "Message sent" : ""}
            </span>
        </span>
    );
};

export default SendButton;

import React, { useEffect, useId, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";
import SendButton from "./sendButton";
import { supabase } from "../../auth/supabaseClient";
import "./contact.css";

// The menu's contact panel. CONTACT_EMAIL and SOCIAL_LINKS also feed the footer.

export const CONTACT_EMAIL = "sabrinaquach998@gmail.com";

export const SOCIAL_LINKS = [
    { label: "Resume", className: "resume-button", href: "https://drive.google.com/file/d/1_pvX8VvVLlSUFAOXRHYLfCokyVyJ7Thq/view?usp=sharing" },
    { label: "LinkedIn", className: "linkedin-button", href: "https://www.linkedin.com/in/sabrina-quach-sjsu/" },
    { label: "GitHub", className: "github-button", href: "https://github.com/sabrinaquach" },
];

// The ↗ on outbound links. Drawn rather than typed: the text glyph stays small
// in JetBrains Mono, and stock icons pad the arrow with empty space. The
// viewBox is cropped to the strokes, so the arrow fills its box and its tip
// sits on the box edge (which is what the footer aligns to).
export const LinkArrow = () => (
    <svg className="link-arrow" viewBox="-1.5 -1.5 15 15" fill="none" aria-hidden="true">
        <path d="M0 12 L12 0 M2 0 H12 V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/*
 * Copies the address instead of opening a mail app. The custom cursor shows
 * COPY EMAIL / EMAIL COPIED! on desktop; touch screens, which have no cursor,
 * get a small pill above the button instead.
 */
export const CopyEmail = ({ className = "", tabIndex, children }) => {
    const [copied, setCopied] = useState(false);
    const timer = useRef(null);

    useEffect(() => () => clearTimeout(timer.current), []);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
        } catch (e) {
            // No clipboard access (e.g. insecure context): open a mail app instead.
            window.location.href = `mailto:${CONTACT_EMAIL}`;
            return;
        }
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), 1500);
    };

    return (
        <span className="copy-email">
            <button
                type="button"
                className={`copy-email-button ${className}`}
                onClick={copy}
                tabIndex={tabIndex}
                data-cursor-text={copied ? "EMAIL COPIED!" : "COPY EMAIL"}
                data-cursor-icon={copied ? "check" : "mail"}
            >
                {children}
            </button>
            <span className={`copy-email-toast${copied ? " is-visible" : ""}`} aria-live="polite">
                {copied && <><FiCheck aria-hidden="true" /> Email copied!</>}
            </span>
        </span>
    );
};

export const SocialLinks = ({ tabIndex }) => (
    <div className="link-list">
        {SOCIAL_LINKS.map(({ label, className, href }) => (
            <a key={label} className={className} href={href} target="_blank" rel="noopener noreferrer" tabIndex={tabIndex}>
                {label}<LinkArrow />
            </a>
        ))}
    </div>
);

// Deliberately loose: something@something.something. The real check is
// whether a reply arrives.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ name, email }) => {
    const errors = {};
    if (!name.trim()) errors.name = "Please enter your name";
    if (!EMAIL_PATTERN.test(email.trim())) errors.email = "Please enter a valid email";
    return errors;
};

export const ContactForm = ({ tabIndex }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    // idle -> sending -> sent (the button rings) -> idle again.
    const [status, setStatus] = useState('idle');
    const resetTimer = useRef(null);
    // Shown only after a send attempt, and cleared field by field as it's fixed.
    const [errors, setErrors] = useState({});
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const id = useId();

    useEffect(() => () => clearTimeout(resetTimer.current), []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors(({ [name]: _, ...rest }) => rest);
    };

    // The send button only appears once there's something to send.
    const hasMessage = formData.message.trim().length > 0;

    // ⌘/Ctrl+Enter sends from the message box, as in most chat apps.
    const handleMessageKeyDown = (e) => {
        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey) && hasMessage && status === 'idle') {
            e.preventDefault();
            e.currentTarget.form.requestSubmit();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!hasMessage || status !== 'idle') return;

        // Name and email are required: point at the first one that's missing
        // instead of sending.
        const found = validate(formData);
        setErrors(found);
        if (found.name || found.email) {
            (found.name ? nameRef : emailRef).current?.focus();
            return;
        }

        setStatus('sending');

        const { data, error } = await supabase
          .from('Messages')
          .insert([
            {
              name: formData.name.trim(),
              email: formData.email.trim(),
              message: formData.message.trim(),
            },
          ]);

        console.log("Supabase response:", { data, error });

        if (error) {
          console.error("Submission error:", error.message);
          setStatus('idle');
          alert("Submission failed: " + error.message);
        } else {
          console.log("Message sent!", data);
          setFormData({ name: '', email: '', message: '' });
          // The button's ring and SENT label are the confirmation.
          setStatus('sent');
          resetTimer.current = setTimeout(() => setStatus('idle'), 2200);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input
                ref={nameRef}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`message-name${errors.name ? ' is-invalid' : ''}`}
                placeholder="Your full name"
                aria-label="Your full name"
                aria-required="true"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${id}-name-error` : undefined}
                autoComplete="name"
                tabIndex={tabIndex}
            />
            {errors.name && <p id={`${id}-name-error`} className="field-error">{errors.name}</p>}
            <input
                ref={emailRef}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`message-email${errors.email ? ' is-invalid' : ''}`}
                placeholder="Your email"
                aria-label="Your email"
                aria-required="true"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? `${id}-email-error` : undefined}
                autoComplete="email"
                tabIndex={tabIndex}
            />
            {errors.email && <p id={`${id}-email-error`} className="field-error">{errors.email}</p>}
            {/* The send button sits in the box's bottom-right corner, where typing
                ends and where chat apps put it; it fades in once the message has
                text, and rings (BellToggle-style) when the message goes through. */}
            <div className="message-msg-wrap">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onKeyDown={handleMessageKeyDown}
                    className="message-msg"
                    rows="3"
                    placeholder="Your message"
                    aria-label="Your message"
                    tabIndex={tabIndex}
                />
                <SendButton
                    visible={hasMessage}
                    sending={status === 'sending'}
                    sent={status === 'sent'}
                    tabIndex={tabIndex}
                />
            </div>
        </form>
    );
};

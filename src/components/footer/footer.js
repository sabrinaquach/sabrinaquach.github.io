import React from "react";
import { CopyEmail, LinkArrow, SOCIAL_LINKS } from "./contact";
import './footer.css'

/*
 * One quiet line, after rachelchen.tech: a credit on the left, links on the
 * right. EMAIL copies the address (see CopyEmail) rather than opening a mail
 * app.
 */
const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-inner">
                <p className="footer-credit">Made from scratch by Sabrina :)</p>

                <nav className="footer-links" aria-label="Elsewhere">
                    <CopyEmail>Email</CopyEmail>
                    {/* Same order as the menu's contact links. */}
                    {SOCIAL_LINKS.map(({ label, className, href }) => (
                        <a key={label} className={className} href={href} target="_blank" rel="noopener noreferrer">
                            {label}<LinkArrow />
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    )
}

export default Footer;

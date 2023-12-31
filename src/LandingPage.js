import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
    const [typingText, setTypingText] = useState('');
    const animatedText = "Coming Soon";

    useEffect(() => {
        let charIndex = 0;

        const interval = setInterval(() => {
            if (charIndex === animatedText.length) {
                clearInterval(interval);
                return;
            }

            setTypingText(animatedText.slice(0, charIndex + 1));
            charIndex++;
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div className="universe-hack">UniVerse Hack</div>
            <div className="title">
                {typingText}
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTi50WY5KzpOp-ctjQpvt5YnPJFY60I2PTXIJ_cLyM-905ZQ/viewform" target="_blank" rel="noopener noreferrer">
                <button className="contact-button">Contact Us</button>
            </a>
        </div>
    );
};

export default LandingPage;

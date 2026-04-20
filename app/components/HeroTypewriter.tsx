"use client";

import { useState, useEffect } from "react";

const PHRASES = [
  "Like Never Before",
  "At Enterprise Scale",
  "With AI Automation",
  "While You Sleep"
];

export default function HeroTypewriter() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentPhrase = PHRASES[currentIndex];

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 100 + Math.random() * 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((currentIndex + 1) % PHRASES.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="hero-typewriter">
      {displayText}
      <span style={{ 
        display: 'inline-block',
        width: '3px',
        height: '1.2em',
        background: 'linear-gradient(180deg, #7F77DD, #3B8BD4)',
        marginLeft: '2px',
        verticalAlign: 'text-bottom',
        animation: isVisible ? 'cursorBlink 0.5s infinite' : 'none',
        borderRadius: '2px'
      }} />
      <style>{`
        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .hero-typewriter {
          background: linear-gradient(90deg, #7F77DD, #3B8BD4, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </span>
  );
}
"use client";

import { useState, useEffect } from "react";

const PHRASES = [
  "Data-Driven Digital Growth",
  "High-Performance Websites",
  "Performance Marketing",
  "SEO Dominance",
  "Next-Gen Architecture"
];

export default function Typewriter({ className }: { className?: string }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentPhrase = PHRASES[currentIndex];

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 80 + Math.random() * 50);
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
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((currentIndex + 1) % PHRASES.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentIndex]);

  return (
    <span className={className}>
      {displayText}
      <span style={{ 
        color: 'var(--primary-blue)', 
        animation: showCursor ? 'none' : 'blink 1s infinite'
      }}>|</span>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./ParallaxBackground.module.css";

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 0);
    let targetScroll = 0;
    let rafId: number;

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.width / 2) / (rect.width / 2),
          y: (e.clientY - rect.height / 2) / (rect.height / 2),
        });
      }
    };

    const animate = () => {
      setScrollY((prev) => prev + (targetScroll - prev) * 0.08);
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animate();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isLoaded) return null;

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <div className={styles.base} />

      <div 
        className={styles.layer1}
        style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
      >
        <div className={styles.nebula1} />
        <div className={styles.nebula2} />
      </div>

      <div 
        className={styles.layer2}
        style={{ transform: `translate3d(${mousePos.x * -15}px, ${scrollY * 0.25 + mousePos.y * -15}px, 0)` }}
      >
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      <div 
        className={styles.layer3}
        style={{ transform: `translate3d(${mousePos.x * -30}px, ${scrollY * 0.4 + mousePos.y * -25}px, 0)` }}
      >
        <div className={styles.hex1} />
        <div className={styles.hex2} />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              top: `${10 + (i * 8) % 70}%`,
              left: `${5 + (i * 11) % 85}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div 
        className={styles.layer4}
        style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
      >
        <div className={styles.grid} />
      </div>

      <div 
        className={styles.layer5}
        style={{ transform: `translate3d(${mousePos.x * -50}px, ${scrollY * 0.5 + mousePos.y * -35}px, 0)` }}
      >
        <svg className={styles.lines} viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="10" y1="15" x2="25" y2="40" className={styles.line1} />
          <line x1="25" y1="40" x2="20" y2="65" className={styles.line2} />
          <line x1="80" y1="10" x2="92" y2="30" className={styles.line3} />
          <line x1="92" y1="30" x2="82" y2="55" className={styles.line4} />
        </svg>
      </div>

      <div className={styles.vignette} />
      <div className={styles.noise} />
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let targetScroll = 0;
    let rafId: number;

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };

    const animate = () => {
      setScrollY((prev) => prev + (targetScroll - prev) * 0.08);
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const bgStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    pointerEvents: 'none',
  };

  return (
    <>
      {/* Base */}
      <div style={{ ...bgStyle, background: '#0B0B0B' }} />

      {/* Animated orbs layer */}
      <div 
        style={{
          ...bgStyle,
          transform: `translate3d(0, ${scrollY * 0.35}px, 0)`,
          willChange: 'transform',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(59, 139, 212, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float1 20s ease-in-out infinite',
        }} />

        <div style={{
          position: 'absolute',
          top: '50%',
          right: '0%',
          width: 450,
          height: 450,
          background: 'radial-gradient(circle, rgba(127, 119, 221, 0.18) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float2 25s ease-in-out infinite reverse',
        }} />

        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '30%',
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(59, 200, 218, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'float3 18s ease-in-out infinite',
        }} />
        
        {/* Subtle grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(127, 119, 221, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(127, 119, 221, 0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Vignette */}
      <div style={{ ...bgStyle, background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.6) 80%)' }} />

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(25px) scale(1.05); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.08); }
        }
      `}</style>
    </>
  );
}
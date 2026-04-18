"use client";
import React, { useEffect, useRef } from 'react';

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // 3D Engine configuration
    const fov = 350;
    const maxZ = 2000;
    let scrollY = 0;
    let targetScrollY = 0;
    
    // Grid generation
    const points: {x: number, y: number, z: number, colorOffset: number}[] = [];
    const spacingX = 120;
    const spacingZ = 120;
    const size = 3000;
    
    for (let x = -size; x <= size; x += spacingX) {
      for (let z = 100; z <= maxZ; z += spacingZ) {
        // Create an organic wave map
        const y = Math.sin(x * 0.003) * 80 + Math.cos(z * 0.003) * 80 + 300; 
        const colorOffset = Math.random();
        points.push({ x, y, z, colorOffset });
      }
    }

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let time = 0;

    const draw = () => {
      time += 0.01;
      // Smooth scroll interpolation for silky 3D movement
      scrollY += (targetScrollY - scrollY) * 0.05;

      ctx.clearRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;

      // Base rotation from scroll (creates the parallax 3D effect)
      // Moving Z forwards based on scroll, moving Y slightly for tipping perspective
      const scrollZOffset = scrollY * 0.6;
      
      // Draw Points
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        
        let currentZ = p.z - scrollZOffset - (time * 30);
        
        // Loop wrapping logic
        while (currentZ < 10) currentZ += maxZ;
        while (currentZ > maxZ) currentZ -= maxZ;

        // 3D to 2D projection
        const scale = fov / (fov + currentZ);
        const screenX = centerX + p.x * scale;
        
        // Calculate Y tipping perspective based on scroll
        const wave = Math.sin(time + p.x * 0.005) * 20;
        const perspectiveY = p.y + wave + (scrollY * 0.15); 
        const screenY = centerY + perspectiveY * scale;

        // Fading into distance
        const opacity = Math.max(0, 1 - (currentZ / maxZ));

        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
           ctx.beginPath();
           ctx.arc(screenX, screenY, Math.max(0.8, 2.5 * scale), 0, Math.PI * 2);
           
           // Dynamic Zaviroq colors: shifting between blue and purple
           const mix = Math.sin(time + p.colorOffset * Math.PI * 2) * 0.5 + 0.5;
           const r = Math.floor(59 * (1-mix) + 127 * mix);
           const g = Math.floor(139 * (1-mix) + 119 * mix);
           const b = Math.floor(212 * (1-mix) + 221 * mix); 
           
           ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.8})`;
           ctx.fill();
        }
      }

      // Draw dynamic data streaming lines (Tech aesthetic)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < points.length; i+=12) {
         const p = points[i];
         let cZ = p.z - scrollZOffset - (time * 30);
         while (cZ < 10) cZ += maxZ;
         while (cZ > maxZ) cZ -= maxZ;
         
         if (cZ < 800) {
             const scale = fov / (fov + cZ);
             const sX = centerX + p.x * scale;
             const wave = Math.sin(time + p.x * 0.005) * 20;
             const sY = centerY + (p.y + wave + (scrollY * 0.15)) * scale;
             
             // Draw vertical trailing lines occasionally
             if (Math.random() > 0.4) {
                 ctx.beginPath();
                 ctx.moveTo(sX, sY);
                 ctx.lineTo(sX, sY - (20 * scale));
                 ctx.strokeStyle = `rgba(127, 119, 221, ${0.15 * (1 - cZ/maxZ)})`;
                 ctx.stroke();
             }
         }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at top, #110e1a 0%, #0a0a0f 100%)',
      overflow: 'hidden'
    }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', opacity: 0.9 }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '35vh',
        background: 'linear-gradient(to top, rgba(10, 10, 15, 1) 0%, rgba(10, 10, 15, 0) 100%)',
        pointerEvents: 'none'
      }} />
    </div>
  );
}

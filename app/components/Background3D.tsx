"use client";
import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  z: number;
}

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

    const fov = 400;
    const maxZ = 1500;
    
    let scrollY = 0;
    let targetScrollY = 0;
    let lastScrollY = 0;
    let scrollVelocity = 0;
    
    const points: Point[] = [];
    const spacing = 100;
    const cols = 20;
    const rows = 12;
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        points.push({
          x: (i - cols / 2) * spacing,
          y: (j - rows / 2) * spacing,
          z: 0
        });
      }
    }
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = currentScrollY - lastScrollY;
      targetScrollY = currentScrollY;
      lastScrollY = currentScrollY;
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
      time += 0.006;
      scrollY += (targetScrollY - scrollY) * 0.06;
      scrollVelocity *= 0.92;

      ctx.fillStyle = 'rgba(11, 11, 11, 0.25)';
      ctx.fillRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;
      const scrollZOffset = scrollY * 0.5;

      ctx.lineWidth = 0.5;
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        let currentZ = point.z - scrollZOffset - time * 15;
        while (currentZ < 10) currentZ += maxZ;
        while (currentZ > maxZ) currentZ -= maxZ;
        
        if (currentZ > maxZ * 0.8) continue;

        const scale = fov / (fov + currentZ);
        const opacity = Math.max(0, 1 - currentZ / maxZ) * 0.5;
        
        const screenX = centerX + (point.x + scrollY * 0.08) * scale;
        const screenY = centerY + (point.y + scrollY * 0.06) * scale;
        
        if (screenX < -50 || screenX > width + 50 || screenY < -50 || screenY > height + 50) continue;

        ctx.beginPath();
        ctx.arc(screenX, screenY, Math.max(1.5, 2.5 * scale), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(127, 119, 221, ${opacity * 1.2})`;
        ctx.fill();

        const col = i % cols;
        const row = Math.floor(i / cols);
        
        if (col < cols - 1 && i + 1 < points.length) {
          const next = points[i + 1];
          let nz = next.z - scrollZOffset - time * 15;
          while (nz < 10) nz += maxZ;
          while (nz > maxZ) nz -= maxZ;
          
          if (nz < maxZ * 0.8) {
            const scale2 = fov / (fov + nz);
            const nx = centerX + (next.x + scrollY * 0.08) * scale2;
            const ny = centerY + (next.y + scrollY * 0.06) * scale2;
            
            const avgOp = (Math.max(0, 1 - currentZ / maxZ) + Math.max(0, 1 - nz / maxZ)) / 2;
            ctx.beginPath();
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = `rgba(127, 119, 221, ${avgOp * 0.25})`;
            ctx.stroke();
          }
        }
        
        if (row < rows - 1 && i + cols < points.length) {
          const below = points[i + cols];
          let bz = below.z - scrollZOffset - time * 15;
          while (bz < 10) bz += maxZ;
          while (bz > maxZ) bz -= maxZ;
          
          if (bz < maxZ * 0.8) {
            const scale2 = fov / (fov + bz);
            const bx = centerX + (below.x + scrollY * 0.08) * scale2;
            const by = centerY + (below.y + scrollY * 0.06) * scale2;
            
            const avgOp = (Math.max(0, 1 - currentZ / maxZ) + Math.max(0, 1 - bz / maxZ)) / 2;
            ctx.beginPath();
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = `rgba(127, 119, 221, ${avgOp * 0.25})`;
            ctx.stroke();
          }
        }
      }

      if (Math.abs(scrollVelocity) > 4) {
        const speed = Math.abs(scrollVelocity);
        const gradient = ctx.createLinearGradient(
          centerX - 600, centerY, 
          centerX + 600, centerY
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${Math.min(0.05, speed * 0.003)})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
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
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at top, #0f0d18 0%, #0B0B0B 60%, #08070d 100%)'
    }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
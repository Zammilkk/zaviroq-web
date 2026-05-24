"use client";
import React, { useEffect, useRef } from 'react';

export default function Riyadh3DSkyline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 400;
    let height = 500;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width || 400;
      height = rect.height || 500;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let time = 0;
    let animId: number;

    const draw = () => {
      time += 0.006;
      ctx.clearRect(0, 0, width, height);

      const groundY = height * 0.72;

      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#07070f');
      skyGrad.addColorStop(0.5, '#0b0a1a');
      skyGrad.addColorStop(1, '#120e25');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 60; i++) {
        const sx = ((i * 137.5 + 42.3) % width);
        const sy = ((i * 97.3 + 13.7) % (groundY * 0.8));
        const s = 0.8 + (i % 3) * 0.4;
        const t = 0.3 + 0.5 * Math.sin(time * 1.5 + i * 2.1);
        ctx.fillStyle = `rgba(255,255,255,${t * 0.5})`;
        ctx.beginPath();
        ctx.arc(sx, sy, s, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.moveTo(0, groundY);
      for (let x = 0; x <= width; x += 3) {
        const y = groundY + Math.sin(x * 0.015 + time) * 6 + Math.sin(x * 0.04 + time * 0.7) * 3;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      const duneGrad = ctx.createLinearGradient(0, groundY, 0, height);
      duneGrad.addColorStop(0, '#1a1225');
      duneGrad.addColorStop(0.5, '#120d1a');
      duneGrad.addColorStop(1, '#0a0810');
      ctx.fillStyle = duneGrad;
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, groundY - 5);
      for (let x = 0; x <= width; x += 3) {
        const y = groundY - 5 + Math.sin(x * 0.015 + time) * 6 + Math.sin(x * 0.04 + time * 0.7) * 3;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, 0);
      ctx.lineTo(0, 0);
      ctx.closePath();
      ctx.clip();

      const gridCenter = width * 0.45;
      ctx.strokeStyle = 'rgba(127, 119, 221, 0.04)';
      ctx.lineWidth = 0.5;
      for (let i = -8; i <= 8; i++) {
        const gx = gridCenter + i * 30;
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx + i * 2, groundY);
        ctx.stroke();
      }
      for (let j = 0; j < 15; j++) {
        const gy = (j / 14) * groundY;
        const spread = 30 + (1 - j / 14) * 250;
        ctx.beginPath();
        ctx.moveTo(gridCenter - spread, gy);
        ctx.lineTo(gridCenter + spread, gy);
        ctx.stroke();
      }
      ctx.restore();

      const buildings = [
        { x: width * 0.08, w: 20, h: 0.28, color: '59, 139, 212' },
        { x: width * 0.14, w: 16, h: 0.35, color: '127, 119, 221' },
        { x: width * 0.20, w: 22, h: 0.22, color: '107, 99, 208' },
        { x: width * 0.52, w: 18, h: 0.32, color: '59, 139, 212' },
        { x: width * 0.58, w: 14, h: 0.25, color: '127, 119, 221' },
        { x: width * 0.65, w: 20, h: 0.18, color: '107, 99, 208' },
        { x: width * 0.72, w: 16, h: 0.30, color: '59, 139, 212' },
        { x: width * 0.78, w: 22, h: 0.20, color: '127, 119, 221' },
        { x: width * 0.85, w: 14, h: 0.26, color: '107, 99, 208' },
        { x: width * 0.90, w: 18, h: 0.15, color: '59, 139, 212' },
      ];

      buildings.forEach((b) => {
        const bh = groundY - groundY * b.h;
        ctx.fillStyle = `rgba(${b.color}, 0.08)`;
        ctx.fillRect(b.x, bh, b.w, groundY - bh);
        ctx.strokeStyle = `rgba(${b.color}, 0.25)`;
        ctx.lineWidth = 1;
        ctx.strokeRect(b.x, bh, b.w, groundY - bh);
        for (let wy = bh + 6; wy < groundY - 4; wy += 10) {
          const lit = Math.sin(b.x * 3.1 + wy * 0.7 + time * 0.5) > 0.2;
          if (lit) {
            ctx.fillStyle = `rgba(255, 220, 100, ${0.15 + 0.2 * Math.sin(time + b.x + wy)})`;
            ctx.fillRect(b.x + 3, wy, 3, 4);
          }
        }
      });

      const kcX = width * 0.33;
      const kcW = 22;
      const kcH = groundY * 0.65;
      const kcTop = groundY - kcH;

      ctx.fillStyle = 'rgba(127, 119, 221, 0.12)';
      ctx.fillRect(kcX, kcTop + 30, kcW, kcH - 30);
      ctx.strokeStyle = 'rgba(127, 119, 221, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(kcX, kcTop + 30, kcW, kcH - 30);

      ctx.beginPath();
      ctx.moveTo(kcX, kcTop + 30);
      ctx.lineTo(kcX + kcW * 0.2, kcTop);
      ctx.lineTo(kcX + kcW * 0.8, kcTop);
      ctx.lineTo(kcX + kcW, kcTop + 30);
      ctx.closePath();
      ctx.fillStyle = 'rgba(127, 119, 221, 0.18)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(127, 119, 221, 0.7)';
      ctx.lineWidth = 2;
      ctx.stroke();

      const bridgeY = kcTop + 16;
      ctx.beginPath();
      ctx.moveTo(kcX + 5, bridgeY);
      ctx.lineTo(kcX + kcW - 5, bridgeY);
      ctx.strokeStyle = 'rgba(59, 139, 212, 0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(kcX + 3, bridgeY - 4);
      ctx.lineTo(kcX + 5, bridgeY);
      ctx.lineTo(kcX + 3, bridgeY + 4);
      ctx.strokeStyle = 'rgba(59, 139, 212, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(kcX + kcW - 3, bridgeY - 4);
      ctx.lineTo(kcX + kcW - 5, bridgeY);
      ctx.lineTo(kcX + kcW - 3, bridgeY + 4);
      ctx.strokeStyle = 'rgba(59, 139, 212, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const glow1 = ctx.createRadialGradient(kcX + kcW / 2, kcTop + 15, 0, kcX + kcW / 2, kcTop + 15, 50);
      glow1.addColorStop(0, 'rgba(127, 119, 221, 0.25)');
      glow1.addColorStop(1, 'rgba(127, 119, 221, 0)');
      ctx.fillStyle = glow1;
      ctx.fillRect(kcX - 25, kcTop - 20, kcW + 50, 70);

      const afX = width * 0.45;
      const afW = 16;
      const afH = groundY * 0.48;
      const afTop = groundY - afH;

      ctx.fillStyle = 'rgba(59, 139, 212, 0.12)';
      ctx.fillRect(afX, afTop + 12, afW, afH - 12);
      ctx.strokeStyle = 'rgba(59, 139, 212, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(afX, afTop + 12, afW, afH - 12);
      ctx.beginPath();
      ctx.moveTo(afX, afTop + 12);
      ctx.lineTo(afX + afW / 2, afTop);
      ctx.lineTo(afX + afW, afTop + 12);
      ctx.closePath();
      ctx.fillStyle = 'rgba(59, 139, 212, 0.25)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(59, 139, 212, 0.7)';
      ctx.lineWidth = 2;
      ctx.stroke();

      const sphereGlow = ctx.createRadialGradient(afX + afW / 2, afTop, 0, afX + afW / 2, afTop, 18);
      sphereGlow.addColorStop(0, 'rgba(59, 139, 212, 0.5)');
      sphereGlow.addColorStop(1, 'rgba(59, 139, 212, 0)');
      ctx.fillStyle = sphereGlow;
      ctx.beginPath();
      ctx.arc(afX + afW / 2, afTop, 18, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(afX + afW / 2, afTop, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59, 139, 212, 0.9)';
      ctx.fill();

      for (let i = 0; i < 20; i++) {
        const px = ((i * 89.7 + time * 15 * (1 + i % 3)) % width);
        const py = 20 + ((i * 67.3 + time * 10 * (1 + (i + 1) % 3)) % (groundY * 0.7));
        const ps = 1.2 + 0.6 * Math.sin(time + i * 0.7);
        ctx.fillStyle = `rgba(127, 119, 221, ${0.08 + 0.12 * Math.sin(time * 1.2 + i * 0.9)})`;
        ctx.beginPath();
        ctx.arc(px, py, ps, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        borderRadius: '20px',
      }}
    />
  );
}

"use client";
import { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({ 
  children, delay = 0, yOffset = 40, runOnce = true, minWidth, className 
}: { 
  children: React.ReactNode, delay?: number, yOffset?: number, runOnce?: boolean, minWidth?: string, className?: string 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (runOnce) observer.unobserve(entry.target);
        } else {
          if (!runOnce) {
            setIsVisible(false);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [delay, runOnce]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? `translateY(0)` : `translateY(${yOffset}px)`,
        transition: 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
        width: minWidth ? 'auto' : '100%',
        minWidth: minWidth,
        flex: minWidth ? `0 0 ${minWidth}` : undefined,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {children}
    </div>
  );
}

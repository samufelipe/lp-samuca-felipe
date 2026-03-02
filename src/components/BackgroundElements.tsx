import React, { useEffect, useState } from 'react';

const BackgroundElements: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden" aria-hidden="true">
      {/* Orb - top right */}
      <div
        className="absolute top-[25%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.18)_0%,_transparent_65%)] blur-[60px]"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      />

      {/* Orb - left side */}
      <div
        className="absolute top-[50%] left-[-8%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(226,194,132,0.15)_0%,_transparent_65%)] blur-[80px]"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />

      {/* Orb - center bottom */}
      <div
        className="absolute top-[75%] left-[35%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.12)_0%,_transparent_65%)] blur-[100px]"
        style={{ transform: `translateY(${scrollY * -0.04}px)` }}
      />

      {/* Thin diagonal line - right */}
      <div
        className="absolute top-[35%] right-[10%] w-[1px] h-[350px] bg-gradient-to-b from-transparent via-[rgba(197,160,89,0.25)] to-transparent"
        style={{ transform: `rotate(25deg) translateY(${scrollY * -0.12}px)` }}
      />

      {/* Thin diagonal line - left */}
      <div
        className="absolute top-[60%] left-[15%] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[rgba(226,194,132,0.2)] to-transparent"
        style={{ transform: `rotate(-20deg) translateY(${scrollY * 0.1}px)` }}
      />

      {/* Horizontal accent line */}
      <div
        className="absolute top-[40%] left-[5%] w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(197,160,89,0.2)] to-transparent"
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      />

      {/* Small dots with parallax */}
      <div
        className="absolute top-[20%] left-[20%] w-2.5 h-2.5 rounded-full bg-yellow-500/20"
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      />
      <div
        className="absolute top-[45%] right-[25%] w-2 h-2 rounded-full bg-yellow-500/[0.18]"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
      <div
        className="absolute top-[70%] left-[60%] w-3 h-3 rounded-full bg-yellow-400/[0.15]"
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      />
      <div
        className="absolute top-[85%] right-[15%] w-2.5 h-2.5 rounded-full bg-yellow-500/[0.18]"
        style={{ transform: `translateY(${scrollY * 0.07}px)` }}
      />
    </div>
  );
};

export default BackgroundElements;

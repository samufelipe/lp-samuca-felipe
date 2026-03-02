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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Orb - top right */}
      <div
        className="absolute top-[25%] right-[-5%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.12)_0%,_transparent_70%)] blur-[80px]"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      />

      {/* Orb - left side */}
      <div
        className="absolute top-[50%] left-[-8%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(226,194,132,0.1)_0%,_transparent_70%)] blur-[100px]"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />

      {/* Orb - center bottom */}
      <div
        className="absolute top-[80%] left-[40%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.08)_0%,_transparent_70%)] blur-[120px]"
        style={{ transform: `translateY(${scrollY * -0.04}px)` }}
      />

      {/* Thin diagonal line - right */}
      <div
        className="absolute top-[35%] right-[10%] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[rgba(197,160,89,0.15)] to-transparent rotate-[25deg]"
        style={{ transform: `rotate(25deg) translateY(${scrollY * -0.12}px)` }}
      />

      {/* Thin diagonal line - left */}
      <div
        className="absolute top-[60%] left-[15%] w-[1px] h-[250px] bg-gradient-to-b from-transparent via-[rgba(226,194,132,0.12)] to-transparent rotate-[-20deg]"
        style={{ transform: `rotate(-20deg) translateY(${scrollY * 0.1}px)` }}
      />

      {/* Small dots with parallax */}
      <div
        className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-yellow-500/[0.15]"
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      />
      <div
        className="absolute top-[45%] right-[25%] w-1.5 h-1.5 rounded-full bg-yellow-500/[0.12]"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
      <div
        className="absolute top-[70%] left-[60%] w-2.5 h-2.5 rounded-full bg-yellow-400/[0.1]"
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      />
      <div
        className="absolute top-[85%] right-[15%] w-2 h-2 rounded-full bg-yellow-500/[0.13]"
        style={{ transform: `translateY(${scrollY * 0.07}px)` }}
      />
    </div>
  );
};

export default BackgroundElements;

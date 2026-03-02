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

      {/* ── Subtle dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(rgba(197,160,89,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Orbs ── */}
      <div
        className="absolute top-[25%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.18)_0%,_transparent_65%)] blur-[60px]"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      />
      <div
        className="absolute top-[50%] left-[-8%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(226,194,132,0.15)_0%,_transparent_65%)] blur-[80px]"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      <div
        className="absolute top-[75%] left-[35%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.12)_0%,_transparent_65%)] blur-[100px]"
        style={{ transform: `translateY(${scrollY * -0.04}px)` }}
      />

      {/* ── Diagonal lines ── */}
      <div
        className="absolute top-[35%] right-[10%] w-[1px] h-[350px] bg-gradient-to-b from-transparent via-[rgba(197,160,89,0.25)] to-transparent"
        style={{ transform: `rotate(25deg) translateY(${scrollY * -0.12}px)` }}
      />
      <div
        className="absolute top-[60%] left-[15%] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[rgba(226,194,132,0.2)] to-transparent"
        style={{ transform: `rotate(-20deg) translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className="absolute top-[40%] left-[5%] w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(197,160,89,0.2)] to-transparent"
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      />

      {/* ── Floating particles (CSS animated) ── */}
      {[
        { top: '12%', left: '8%', size: 3, delay: '0s', dur: '12s' },
        { top: '28%', left: '75%', size: 2, delay: '2s', dur: '15s' },
        { top: '55%', left: '85%', size: 2.5, delay: '4s', dur: '10s' },
        { top: '68%', left: '12%', size: 3, delay: '1s', dur: '14s' },
        { top: '82%', left: '55%', size: 2, delay: '3s', dur: '11s' },
        { top: '38%', left: '45%', size: 1.5, delay: '5s', dur: '16s' },
        { top: '92%', left: '30%', size: 2, delay: '6s', dur: '13s' },
        { top: '15%', left: '60%', size: 2.5, delay: '7s', dur: '9s' },
      ].map((p, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full bg-yellow-500/20"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `float-particle ${p.dur} ease-in-out ${p.delay} infinite`,
            transform: `translateY(${scrollY * (i % 2 === 0 ? -0.03 : 0.03)}px)`,
          }}
        />
      ))}

      {/* ── Marketing digital icons (subtle SVG outlines) ── */}
      {/* Cursor/click icon - top area */}
      <svg
        className="absolute top-[18%] right-[18%] opacity-[0.06]"
        width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(197,160,89,1)" strokeWidth="1.5"
        style={{ transform: `translateY(${scrollY * -0.07}px) rotate(12deg)` }}
      >
        <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" />
      </svg>

      {/* Bar chart icon - mid left */}
      <svg
        className="absolute top-[42%] left-[6%] opacity-[0.05]"
        width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(226,194,132,1)" strokeWidth="1.5"
        style={{ transform: `translateY(${scrollY * 0.06}px) rotate(-8deg)` }}
      >
        <rect x="3" y="12" width="4" height="9" rx="1" />
        <rect x="10" y="7" width="4" height="14" rx="1" />
        <rect x="17" y="3" width="4" height="18" rx="1" />
      </svg>

      {/* Target/bullseye icon - center right */}
      <svg
        className="absolute top-[58%] right-[8%] opacity-[0.05]"
        width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(197,160,89,1)" strokeWidth="1.2"
        style={{ transform: `translateY(${scrollY * -0.05}px) rotate(5deg)` }}
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>

      {/* Trending up icon - bottom left */}
      <svg
        className="absolute top-[78%] left-[22%] opacity-[0.06]"
        width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="rgba(226,194,132,1)" strokeWidth="1.5"
        style={{ transform: `translateY(${scrollY * 0.04}px) rotate(-5deg)` }}
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>

      {/* Megaphone/speaker icon - top left */}
      <svg
        className="absolute top-[30%] left-[30%] opacity-[0.04]"
        width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(197,160,89,1)" strokeWidth="1.5"
        style={{ transform: `translateY(${scrollY * -0.08}px) rotate(15deg)` }}
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>

      {/* Lightning/zap - bottom right */}
      <svg
        className="absolute top-[88%] right-[25%] opacity-[0.05]"
        width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(197,160,89,1)" strokeWidth="1.5"
        style={{ transform: `translateY(${scrollY * 0.06}px) rotate(-10deg)` }}
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>

      {/* ── Accent dots ── */}
      <div className="absolute top-[20%] left-[20%] w-2.5 h-2.5 rounded-full bg-yellow-500/20" style={{ transform: `translateY(${scrollY * -0.06}px)` }} />
      <div className="absolute top-[45%] right-[25%] w-2 h-2 rounded-full bg-yellow-500/[0.18]" style={{ transform: `translateY(${scrollY * 0.08}px)` }} />
      <div className="absolute top-[70%] left-[60%] w-3 h-3 rounded-full bg-yellow-400/[0.15]" style={{ transform: `translateY(${scrollY * -0.05}px)` }} />
      <div className="absolute top-[85%] right-[15%] w-2.5 h-2.5 rounded-full bg-yellow-500/[0.18]" style={{ transform: `translateY(${scrollY * 0.07}px)` }} />
    </div>
  );
};

export default BackgroundElements;

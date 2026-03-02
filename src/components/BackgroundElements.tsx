import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Orb - top right, between Stats and GoogleExpertise */}
      <div className="absolute top-[25%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.06)_0%,_transparent_70%)] blur-[80px]"></div>

      {/* Orb - left side, near Methodology */}
      <div className="absolute top-[50%] left-[-8%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(226,194,132,0.05)_0%,_transparent_70%)] blur-[100px]"></div>

      {/* Orb - center, near Contact */}
      <div className="absolute top-[80%] left-[40%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.04)_0%,_transparent_70%)] blur-[120px]"></div>

      {/* Thin diagonal line - right side */}
      <div className="absolute top-[35%] right-[10%] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[rgba(197,160,89,0.08)] to-transparent rotate-[25deg]"></div>

      {/* Thin diagonal line - left side */}
      <div className="absolute top-[60%] left-[15%] w-[1px] h-[250px] bg-gradient-to-b from-transparent via-[rgba(226,194,132,0.06)] to-transparent rotate-[-20deg]"></div>

      {/* Small dots */}
      <div className="absolute top-[20%] left-[20%] w-1.5 h-1.5 rounded-full bg-yellow-500/[0.08]"></div>
      <div className="absolute top-[45%] right-[25%] w-1 h-1 rounded-full bg-yellow-500/[0.06]"></div>
      <div className="absolute top-[70%] left-[60%] w-2 h-2 rounded-full bg-yellow-400/[0.05]"></div>
      <div className="absolute top-[85%] right-[15%] w-1.5 h-1.5 rounded-full bg-yellow-500/[0.07]"></div>
    </div>
  );
};

export default BackgroundElements;

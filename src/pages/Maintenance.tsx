import React from 'react';

const Maintenance: React.FC = () => (
  <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 blur-[140px] rounded-full pointer-events-none" />
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent" />

    <div className="relative z-10 text-center max-w-xl">
      <p className="text-[9px] font-black text-yellow-500 uppercase tracking-[0.5em] mb-8">
        Samuel Felipe
      </p>

      <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
        Site em{' '}
        <span
          className="italic"
          style={{
            background: 'linear-gradient(135deg, #f59e0b, #d97706, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          Manutenção
        </span>
      </h1>

      <p className="text-gray-400 text-base leading-relaxed mb-12">
        Estamos atualizando o site. Em breve voltamos com novidades.
      </p>

      <a
        href="https://wa.me/5531992976990"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-6 py-3 rounded-xl"
      >
        Entre em contato
      </a>
    </div>

    <p className="absolute bottom-8 text-[10px] text-gray-700 uppercase tracking-widest">
      samucads.com.br
    </p>

    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap"
      rel="stylesheet"
    />
  </div>
);

export default Maintenance;

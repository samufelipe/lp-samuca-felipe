import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { trackSocialClick } from '@/lib/gtm';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 md:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <a href="#inicio" className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div>
                <h2 className="text-white text-xl font-bold">Samuel Felipe</h2>
                <p className="text-[9px] text-yellow-500 uppercase tracking-[0.3em] font-black opacity-80">Estrategista de Mídia Paga</p>
              </div>
            </a>
            <p className="text-gray-400 max-w-sm mx-auto md:mx-0 mb-8 text-sm md:text-base">
              Estrategista de Mídia Paga especializado em geração de demanda comercial, escala de infoprodutos e desenvolvimento de soluções digitais com IA.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/in/samufeelipe/" target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('linkedin')} className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-yellow-500/50 transition-all"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com/samufeelipe/" target="_blank" rel="noopener noreferrer" onClick={() => trackSocialClick('instagram')} className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-yellow-500/50 transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h5 className="font-bold mb-6 uppercase text-[10px] tracking-widest text-gray-500">Links</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#experiencia" className="text-gray-400 hover:text-white transition-colors">Metodologia</a></li>
              <li><a href="#projetos" className="text-gray-400 hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="/aprender" className="text-gray-400 hover:text-white transition-colors">Aprender</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h5 className="font-bold mb-6 uppercase text-[10px] tracking-widest text-gray-500">Certificação</h5>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
              <span>Google Partner Certificado</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4 text-[10px] md:text-xs text-gray-500 text-center">
          <p>© {new Date().getFullYear()} Samuel Felipe - Estrategista de Mídia Paga.</p>
          <p>Demanda Comercial · Infoprodutos · Marcas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

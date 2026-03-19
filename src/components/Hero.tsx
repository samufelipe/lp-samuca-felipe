import React from 'react';
import { ChevronRight, Star, Handshake, TrendingUp, Code, Cpu } from 'lucide-react';
import samuelPhoto from '@/assets/samuel-felipe.jpeg';
import avatar1 from '@/assets/avatar-1.jpg';
import avatar2 from '@/assets/avatar-2.jpg';
import avatar3 from '@/assets/avatar-3.jpg';
import ScrollReveal from './ScrollReveal';
import { trackCtaClick } from '@/lib/gtm';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Dynamic Background Elements — reduced on mobile */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-yellow-500/5 md:bg-yellow-500/10 blur-[180px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-yellow-600/3 md:bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:flex-1 text-center lg:text-left order-2 lg:order-1">
            <ScrollReveal className="overflow-hidden">
              <h1 className="mask-reveal text-[2.1rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black mb-8 text-white">
                Mais Demanda.{' '}
                <br className="sm:hidden" />
                Mais Vendas.
              </h1>
            </ScrollReveal>

            <ScrollReveal stagger={1}>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-light">
                Estratégias de tráfego pago para lotar a agenda de times comerciais, escalar infoprodutos e gerar demanda para profissionais da saúde, educação e serviços. Landing Pages, sites e apps com IA. <strong className="text-white">+7 milhões geridos em mídia paga.</strong>
              </p>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-14">
                <a href="#contato" className="group relative w-auto max-w-xs sm:max-w-none shrink-0" onClick={() => trackCtaClick('solicitar_diagnostico', 'hero')}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                  <button className="relative px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all shadow-xl active:scale-95 whitespace-nowrap">
                    Solicitar Diagnóstico Gratuito <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="mt-2 text-center lg:text-left">
                    <span className="text-[9px] text-yellow-500/70 uppercase font-black tracking-widest flex items-center justify-center lg:justify-start gap-1">
                       Agenda Limitada para Novos Projetos
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 px-6 py-5 lg:ml-4">
                  <div className="flex -space-x-3">
                    <img src={avatar1} className="w-10 h-10 rounded-full border-2 border-zinc-950 shadow-xl object-cover" alt="Cliente" />
                    <img src={avatar2} className="w-10 h-10 rounded-full border-2 border-zinc-950 shadow-xl object-cover" alt="Cliente" />
                    <img src={avatar3} className="w-10 h-10 rounded-full border-2 border-zinc-950 shadow-xl object-cover" alt="Cliente" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white">+7 Milhões Geridos</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={8} className="fill-yellow-500 text-yellow-500" />)}
                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-1">Avaliação 5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={3}>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="flex items-center gap-2 group cursor-default">
                  <Handshake size={18} className="group-hover:text-blue-500 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Google Partner</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <TrendingUp size={18} className="group-hover:text-pink-500 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Meta Expert</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <Code size={18} className="group-hover:text-green-500 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Landing Pages & Sites</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <Cpu size={18} className="group-hover:text-purple-500 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">IA & Tecnologia</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full lg:flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <ScrollReveal className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
              {/* Golden glow behind image — reduced on mobile */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.03)_0%,_transparent_70%)] md:bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.06)_0%,_transparent_70%)] blur-[60px] scale-110 pointer-events-none"></div>

              <div
                className="relative z-10 w-full h-full group"
                style={{
                  maskImage: 'radial-gradient(ellipse 70% 70% at center, black 50%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, black 50%, transparent 100%)',
                }}
              >
                <img
                  src={samuelPhoto}
                  className="w-full h-full object-cover object-[center_15%] brightness-[0.55] contrast-[1.1] saturate-[0.9] md:brightness-[0.60] md:contrast-[1.12] lg:brightness-[0.65] md:group-hover:brightness-[0.75] md:group-hover:scale-105 transition-all duration-1000"
                  alt="Samuel Felipe - Estrategista de Mídia Paga"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

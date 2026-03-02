import React from 'react';
import { ChevronRight, Star, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import samuelPhoto from '@/assets/samuel-felipe.jpeg';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-yellow-500/10 blur-[180px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:flex-1 text-center lg:text-left order-2 lg:order-1">
            <ScrollReveal className="overflow-hidden">
              <h1 className="mask-reveal text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black mb-8 text-white">
                Digital Descomplicado, <br className="hidden md:block" />
                <span className="gold-gradient italic playfair font-medium">Resultados Reais.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal stagger={1}>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-light">
                Estratégias simplificadas que geram resultados diários para centenas de clientes. O digital pode ser fácil e acessível com o acompanhamento certo.
              </p>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-14">
                <a href="#contato" className="group relative w-full sm:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                  <button className="relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all shadow-2xl active:scale-95">
                    Quero Escalar meu Negócio <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="absolute -bottom-6 left-0 right-0 text-center lg:text-left">
                    <span className="text-[9px] text-yellow-500/70 uppercase font-black tracking-widest flex items-center justify-center lg:justify-start gap-1">
                       <Sparkles size={10} /> Agenda Limitada para Novos Projetos
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 px-6 py-5 lg:ml-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-10 h-10 rounded-full border-2 border-zinc-950 shadow-xl" alt="Client" />
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white">+7 Milhões Geridos</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={8} className="fill-yellow-500 text-yellow-500" />)}
                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-1">Rating 5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={3}>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="flex items-center gap-2 group cursor-default">
                  <ShieldCheck size={18} className="group-hover:text-blue-500 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Google Partner</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <TrendingUp size={18} className="group-hover:text-pink-500 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Meta Expert</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full lg:flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <ScrollReveal className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
              <div className="absolute inset-0 rounded-full opacity-0 blur-[120px] animate-pulse"></div>

              <div className="relative z-10 w-full h-full rounded-[3rem] border border-white/10 overflow-hidden group shadow-[0_0_50px_rgba(212,175,55,0.05)]">
                <img
                  src={samuelPhoto}
                  className="w-full h-full object-cover object-[center_25%] grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  alt="Samuel Felipe - Estrategista Digital focado em resultados reais"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>

                <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl border-white/5">
                  <p className="text-yellow-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Mentalidade de Dono</p>
                  <p className="text-white text-base md:text-xl font-bold leading-tight">"Meu foco é tornar o digital simples e lucrativo para o seu negócio."</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

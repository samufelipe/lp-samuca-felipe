import React from 'react';
import { Target, Search, BarChart3, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Methodology: React.FC = () => {
  const steps = [
    { title: "Entendimento do Negócio", desc: "Analisamos seus números e o seu mercado para entender o melhor caminho antes de começar.", icon: <Search /> },
    { title: "Jornada do Cliente", desc: "Organizamos como o seu cliente te encontra e como ele decide comprar de você.", icon: <Target /> },
    { title: "Crescimento Constante", desc: "Ajustamos os anúncios para que você tenha resultados consistentes todos os dias.", icon: <Rocket /> },
    { title: "Clareza nos Dados", desc: "Relatórios simples para você saber exatamente quanto está ganhando com o digital.", icon: <BarChart3 /> },
  ];

  return (
    <section id="metodologia" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <ScrollReveal>
              <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-[0.3em] mb-6">O Processo</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8">Método Simples de <br className="hidden md:block" />Crescimento Diário</h3>
              <p className="text-gray-400 text-lg md:text-xl mb-10 font-light">
                O digital não precisa ser complicado. Minha metodologia foca no que realmente importa: estratégias acessíveis que geram resultados constantes.
              </p>
              <a href="#contato" className="inline-flex items-center gap-3 text-white font-bold border-b-2 border-yellow-500 pb-2 hover:gap-5 transition-all">
                Ver Como Aplicar ao Seu Negócio <Target size={20} />
              </a>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} stagger={i + 1}>
                <div className="glass-card p-8 rounded-[2.5rem] group h-full">
                  <div className="w-14 h-14 gold-bg rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform">
                    {React.cloneElement(step.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

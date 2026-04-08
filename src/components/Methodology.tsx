import React from 'react';
import { Target, Search, BarChart3, Rocket, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useWhatsAppDialog } from '@/hooks/useWhatsAppDialog';

const Methodology: React.FC = () => {
  const { openWhatsApp } = useWhatsAppDialog();
  const steps = [
    { title: "Diagnóstico de Demanda", desc: "Entendemos seu mercado, concorrência e oportunidades reais de geração de leads e vendas antes de investir um centavo.", icon: <Search /> },
    { title: "Estrutura de Campanhas & Funil", desc: "Criamos campanhas, landing pages e funis otimizados para converter visitantes em clientes pagantes.", icon: <Target /> },
    { title: "Escala Controlada", desc: "Aumentamos o investimento com inteligência, garantindo que cada real a mais traga retorno proporcional.", icon: <Rocket /> },
    { title: "Acompanhamento Próximo", desc: "Reports semanais sob medida, reuniões de alinhamento e decisões tomadas junto com você. Sem surpresas, sem distância.", icon: <BarChart3 /> },
  ];

  return (
    <section id="metodologia" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <ScrollReveal>
              <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-[0.3em] mb-6">O Processo</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8">Método de Escala <br className="hidden md:block" /><span className="gold-gradient italic playfair">com Previsibilidade</span></h3>
              <p className="text-gray-400 text-lg md:text-xl mb-10 font-light">
                Um processo testado em +170 projetos para gerar demanda comercial, escalar infoprodutos e posicionar marcas — do diagnóstico à escala.
              </p>
              <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm hover:translate-y-[-2px] transition-all shadow-xl active:scale-95">
                Aplicar ao Seu Negócio <ChevronRight size={18} />
              </button>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} stagger={i + 1}>
                <div className="glass-card p-8 rounded-[2.5rem] group h-full">
                  <div className="mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
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

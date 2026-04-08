import React from 'react';
import { Check, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useWhatsAppDialog } from '@/hooks/useWhatsAppDialog';
import { ChevronRight } from 'lucide-react';

const forItems = [
  'Infoprodutores que querem escalar cursos, mentorias e programas digitais',
  'Clínicas de estética e saúde que precisam lotar a agenda',
  'Empresas com times comerciais que precisam de leads qualificados',
  'Quem está cansado de agências genéricas e quer parceria real',
  'Quem investe a partir de R$ 3.000/mês em mídia paga',
];

const notForItems = [
  'Quem busca serviço barato e genérico',
  'Quem quer resultados sem investir em mídia',
  'Quem não tem produto/serviço validado',
  'Quem procura "fórmula mágica" sem estratégia',
];

const TargetAudience: React.FC = () => {
  const { openWhatsApp } = useWhatsAppDialog();

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">
              QUALIFICAÇÃO
            </h2>
            <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-white">
              Para Quem é Este Serviço?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Transparência desde o primeiro contato. Veja se faz sentido para o seu momento.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal stagger={0}>
            <div className="glass-card rounded-2xl p-8 border border-[#25D366]/20 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                  <Check size={20} className="text-[#25D366]" />
                </div>
                <h4 className="text-xl font-bold text-white">Para Quem É</h4>
              </div>
              <ul className="space-y-4">
                {forItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-[#25D366] mt-1 shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={1}>
            <div className="glass-card rounded-2xl p-8 border border-red-500/20 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X size={20} className="text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-white">Para Quem NÃO É</h4>
              </div>
              <ul className="space-y-4">
                {notForItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X size={16} className="text-red-500 mt-1 shrink-0" />
                    <span className="text-gray-400 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal stagger={2}>
          <div className="text-center mt-12">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm hover:translate-y-[-2px] transition-all shadow-xl active:scale-95"
            >
              Me identifico, quero um diagnóstico <ChevronRight size={18} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TargetAudience;

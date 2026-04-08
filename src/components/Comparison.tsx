import React from 'react';
import { X, Check, ChevronRight } from 'lucide-react';
import { trackCtaClick } from '@/lib/gtm';
import ScrollReveal from './ScrollReveal';
import { useWhatsAppDialog } from '@/hooks/useWhatsAppDialog';

const comparisonItems = [
  { label: "Atendimento", bad: "Fila de tickets e demora", good: "Contato direto e ágil" },
  { label: "Projeto", bad: "Template replicado para todos", good: "100% exclusivo para seu negócio" },
  { label: "Analista", bad: "Rotatividade constante", good: "Estrategista fixo e dedicado" },
  { label: "Relatórios", bad: "Mensais e genéricos", good: "Semanais e sob medida" },
  { label: "Decisões", bad: "Unilaterais, sem consulta", good: "Em conjunto com você" },
  { label: "Estratégia", bad: "Fórmula pronta para todos", good: "Personalizada para sua realidade" },
  { label: "Landing Pages & Sites", bad: "Não oferece ou terceiriza", good: "Páginas de alta conversão inclusas" },
  { label: "Funil de Vendas", bad: "Tráfego direto sem estratégia", good: "Direcionamento completo do funil" },
  { label: "Foco no Resultado", bad: "Métricas de vaidade", good: "ROI e lucratividade real" },
];

const Comparison: React.FC = () => {
  const { openWhatsApp } = useWhatsAppDialog();
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight uppercase playfair">
            Agência Genérica vs.{' '}
            <span className="gold-gradient italic">Estrategista Dedicado</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light">
            Você já sabe como é: atendimento por ticket, analista que nem sabe seu nome, reports que não dizem nada e dinheiro escorrendo pelo ralo. Compare com o que deveria ser.
          </p>
        </ScrollReveal>

        {/* Desktop: compact table */}
        <ScrollReveal stagger={1} className="hidden md:block">
          <div className="glass-card rounded-3xl overflow-hidden border-white/5">
            <div className="grid grid-cols-[1fr_auto_auto] text-left border-b border-white/5 bg-white/[0.02]">
              <div className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest"></div>
              <div className="px-8 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest text-center w-48">Agência Genérica</div>
              <div className="px-8 py-4 text-[10px] font-black text-yellow-500 uppercase tracking-widest text-center w-56 border-l border-white/5 bg-yellow-500/[0.02]">Samuel Felipe</div>
            </div>
            {comparisonItems.map((item, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto_auto] border-b border-white/5 last:border-0 group hover:bg-white/[0.02] transition-colors">
                <div className="px-6 py-4 font-bold text-sm text-gray-300 group-hover:text-white transition-colors">{item.label}</div>
                <div className="px-8 py-4 text-center w-48 flex items-center justify-center gap-2">
                  <X size={12} className="text-red-500/50" />
                  <span className="text-xs text-red-500/40 italic">{item.bad}</span>
                </div>
                <div className="px-8 py-4 text-center w-56 border-l border-white/5 bg-yellow-500/[0.01] group-hover:bg-yellow-500/[0.03] transition-all flex items-center justify-center gap-2">
                  <Check size={12} className="text-yellow-500 shrink-0" />
                  <span className="text-xs font-bold text-white">{item.good}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Mobile: only strategic partnership benefits */}
        <div className="md:hidden">
          <ScrollReveal>
            <div className="glass-card rounded-3xl p-6 border-white/5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">O que você recebe com um estrategista dedicado</span>
              </div>
              <div className="space-y-4">
                {comparisonItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-white">{item.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.good}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <button onClick={() => { trackCtaClick('quero_parceria', 'comparison'); openWhatsApp(); }} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm hover:translate-y-[-2px] transition-all shadow-xl active:scale-95">
              Quero um Estrategista Dedicado <ChevronRight size={18} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Comparison;

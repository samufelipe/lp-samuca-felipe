import React from 'react';
import { X, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const comparisonItems = [
  { label: "Direcionamento Estratégico", bad: "Apenas sobe campanhas", good: "Estratégia personalizada para escala" },
  { label: "Leads Qualificados", bad: "Tráfego genérico", good: "Pipeline lotado para times comerciais" },
  { label: "Escala de Infoprodutos", bad: "Não entende o mercado", good: "Cursos, mentorias e programas" },
  { label: "Criativos", bad: "Espera o cliente enviar", good: "Orientação de criativos que convertem" },
  { label: "Landing Pages & Sites", bad: "Não oferece", good: "Páginas de alta conversão" },
  { label: "Funil de Vendas", bad: "Tráfego direto sem estratégia", good: "Direcionamento completo do funil ideal para cada oferta" },
  { label: "Planejamento do Zero", bad: "Assume que você já sabe", good: "Direcionamento completo" },
  { label: "Conteúdo", bad: "Não direciona", good: "Direcionamento estratégico" },
  { label: "Foco no Resultado", bad: "Métricas de vaidade", good: "ROI e lucratividade" },
];

const Comparison: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight uppercase playfair">
            Gestão de Tráfego vs.{' '}
            <span className="gold-gradient italic">Parceria Estratégica</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light">
            Um gestor comum apenas sobe campanhas. O estrategista certo gera demanda, escala vendas e desenvolve as ferramentas que seu negócio precisa.
          </p>
        </ScrollReveal>

        {/* Desktop: compact table */}
        <ScrollReveal stagger={1} className="hidden md:block">
          <div className="glass-card rounded-3xl overflow-hidden border-white/5">
            <div className="grid grid-cols-[1fr_auto_auto] text-left border-b border-white/5 bg-white/[0.02]">
              <div className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest"></div>
              <div className="px-8 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest text-center w-48">Gestor Comum</div>
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
                <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">O que você recebe na parceria</span>
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
      </div>
    </section>
  );
};

export default Comparison;

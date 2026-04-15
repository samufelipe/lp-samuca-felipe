import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useWhatsAppDialog } from '@/hooks/useWhatsAppDialog';

const faqs = [
  { q: "Qual a diferença entre contratar você e uma agência de marketing?", a: "Na agência, você é mais um cliente na fila, com atendimento por tickets, analistas rotativos e templates replicados. Comigo, seu projeto é exclusivo: atendimento direto, reports semanais sob medida, decisões tomadas em conjunto e um estrategista fixo dedicado ao seu negócio." },
  { q: "Quais tipos de negócio você atende?", a: "Atendo infoprodutores que desejam escalar vendas de cursos e mentorias, clínicas de estética e saúde que precisam lotar a agenda, e empresas com times comerciais que buscam leads qualificados. Cada estratégia é personalizada para o seu modelo de negócio." },
  { q: "Trabalho com infoproduto (curso/mentoria), como vocês ajudam?", a: "Criamos funis de venda completos com Meta Ads e Google Ads, landing pages otimizadas e estratégias de escala progressiva. Trabalhamos desde lançamentos até vendas no perpétuo, sempre com foco em ROAS e CAC saudável." },
  { q: "Tenho uma clínica de estética, como gero mais agendamentos?", a: "Utilizamos Google Ads com foco em buscas locais e Meta Ads para geração de demanda. Criamos landing pages específicas para cada procedimento e implementamos formulários de qualificação para filtrar leads com real interesse." },
  { q: "Preciso de leads para meu time comercial, qual a abordagem?", a: "Montamos campanhas de geração de leads B2B com formulários qualificados, integramos com seu CRM e otimizamos continuamente o custo por lead qualificado. O foco é entregar oportunidades reais para seu time fechar." },
  { q: "Você também cria landing pages e sites?", a: "Sim! Desenvolvo landing pages de alta conversão, sites profissionais e até aplicativos com inteligência artificial. Tudo integrado à estratégia de mídia paga para maximizar seus resultados." },
  { q: "Nunca anunciei, vocês me ajudam do zero?", a: "Com certeza. Faço o planejamento estratégico completo: desde a definição de público, criação de campanhas, desenvolvimento de landing pages até o acompanhamento diário. Você não precisa saber nada de tráfego pago." },
  { q: "Já anuncio mas quero escalar, como funciona?", a: "Começo com um diagnóstico completo das suas campanhas atuais, identifico gargalos e oportunidades, e implemento estratégias de escala controlada para multiplicar seus resultados sem desperdiçar investimento." },
  { q: "Em quanto tempo vejo resultados?", a: "Resultados iniciais aparecem nas primeiras semanas conforme as estratégias são validadas. A escala consistente acontece a partir do segundo mês, com otimizações contínuas baseadas em dados reais." },
];

const FAQItem: React.FC<{ q: string; a: string; index: number }> = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal stagger={Math.min(index + 1, 8)}>
      <div
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          open
            ? 'border-yellow-500/20 bg-white/[0.03]'
            : 'border-white/5 bg-white/[0.015] hover:border-white/10 hover:bg-white/[0.025]'
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left"
          aria-expanded={open}
        >
          <span className="font-bold text-base md:text-lg text-white leading-snug">{q}</span>
          <ChevronDown
            size={18}
            className={`text-yellow-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              {a}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const FAQ: React.FC = () => {
  const { openWhatsApp } = useWhatsAppDialog();

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Dúvidas Frequentes</h3>
          <p className="text-gray-500 text-sm md:text-base">Tudo o que você precisa saber antes de dar o próximo passo.</p>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <FAQItem key={idx} q={item.q} a={item.a} index={idx} />
          ))}
        </div>

        <ScrollReveal stagger={2}>
          <div className="text-center mt-12">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm hover:translate-y-[-2px] transition-all shadow-xl active:scale-95"
            >
              Ainda tem dúvidas? Fale comigo <ChevronRight size={18} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
import React from 'react';
import { DollarSign, UserX, FileX, ShieldOff } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useWhatsAppDialog } from '@/hooks/useWhatsAppDialog';

const pains = [
  { icon: <DollarSign />, title: "Dinheiro jogado fora", desc: "Você investe rios de dinheiro e não sabe para onde vai. Sem clareza, sem retorno." },
  { icon: <UserX />, title: "Analista rotativo", desc: "Seu analista muda a cada 3 meses e você recomeça do zero, toda vez." },
  { icon: <FileX />, title: "Reports que não dizem nada", desc: "Relatórios mensais genéricos, cheios de métricas de vaidade que não pagam suas contas." },
  { icon: <ShieldOff />, title: "Decisões sem você", desc: "Mudanças na sua conta sem te consultar. Você paga, mas não decide." },
];

const PainPoints: React.FC = () => {
  const { openWhatsApp } = useWhatsAppDialog();
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal className="text-center mb-10 md:mb-14">
          <h2 className="text-[10px] md:text-xs font-bold text-red-500/80 uppercase tracking-[0.3em] mb-3">Isso te parece familiar?</h2>
          <h3 className="text-2xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
            Se você contrata uma agência genérica,<br className="hidden md:block" />
            <span className="text-red-500/70"> provavelmente já viveu isso:</span>
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {pains.map((pain, i) => (
            <ScrollReveal key={i} stagger={i + 1}>
              <div className="glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl group h-full border-red-500/5 hover:border-red-500/10 transition-colors">
                <div className="mb-4 text-red-500/60 group-hover:text-red-500/80 group-hover:scale-110 transition-all">
                  {React.cloneElement(pain.icon as React.ReactElement, { size: 24 })}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2 text-white">{pain.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{pain.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal stagger={5}>
          <div className="text-center mt-10 md:mt-14">
            <p className="text-lg md:text-2xl font-black text-white mb-3">
              Existe um jeito diferente de fazer isso.
            </p>
            <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm hover:translate-y-[-2px] transition-all shadow-xl active:scale-95">
              Descubra como <ChevronRight size={18} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainPoints;

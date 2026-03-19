import React from 'react';
import { Briefcase, TrendingUp, Users, Trophy } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Stats: React.FC = () => {
  const stats = [
    { label: "+5 Anos", sub: "de Mercado Digital", icon: <Briefcase /> },
    { label: "+7M", sub: "em Mídia Gerida", icon: <TrendingUp /> },
    { label: "+800K", sub: "Leads Gerados", icon: <Users /> },
    { label: "+170", sub: "Projetos Entregues", icon: <Trophy /> },
  ];

  return (
    <section id="experiencia" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <h2 className="text-[10px] md:text-xs font-bold text-yellow-500 uppercase tracking-[0.3em] mb-3 md:mb-4">Resultados que Falam por Si</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Demanda gerada para times comerciais e vendas escaladas para infoprodutores</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light">
            Números construídos com estratégias de mídia paga que lotam pipelines de vendas, escalam cursos e mentorias, e posicionam marcas no digital.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} stagger={idx + 1}>
              <div className="glass-card p-5 md:p-8 rounded-2xl md:rounded-3xl group h-full">
                <div className="mb-4 md:mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
                  {React.cloneElement(stat.icon as React.ReactElement, { size: 24 })}
                </div>
                <h4 className="text-2xl md:text-4xl font-extrabold mb-1 tracking-tight">{stat.label}</h4>
                <p className="text-xs md:text-gray-400 font-medium">{stat.sub}</p>
                <div className="mt-3 w-0 group-hover:w-full h-0.5 gold-bg transition-all duration-500 hidden md:block"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

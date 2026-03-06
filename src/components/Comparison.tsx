import React from 'react';
import ScrollReveal from './ScrollReveal';

const Comparison: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight uppercase playfair">
            Gestão de Tráfego vs. <br className="hidden md:block" />
            <span className="gold-gradient italic">Parceria Estratégica</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Um gestor comum apenas sobe campanhas. O estrategista certo gera demanda, escala vendas e desenvolve as ferramentas que o seu negócio precisa para crescer.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger={1}>
          <div className="glass-card rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-white/5 shadow-2xl overflow-x-auto bg-white/[0.01] backdrop-blur-sm">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-8 md:p-10 text-xs font-black text-gray-500 uppercase tracking-widest">O que você recebe</th>
                  <th className="p-8 md:p-10 text-xs font-black text-gray-500 uppercase tracking-widest text-center">Gestor Comum</th>
                  <th className="p-8 md:p-10 text-xs font-black text-yellow-500 uppercase tracking-widest text-center border-l border-white/5 bg-yellow-500/[0.02]">Estratégia Samuel</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {[
                  ["Direcionamento Estratégico", "Foca apenas em subir campanhas", "Estratégia Personalizada para Escala"],
                  ["Geração de Leads Qualificados", "Tráfego genérico sem qualificação", "Pipeline Lotado para Times Comerciais"],
                  ["Escala de Infoprodutos", "Não entende o mercado digital", "Estratégias para Cursos, Mentorias e Programas"],
                  ["Direcionamento de Criativos", "Espera o cliente enviar o que tem", "Orientação de Criativos que Convertem"],
                  ["Desenvolvimento de LP/Site", "Não oferece", "Landing Pages e Sites de Alta Conversão"],
                  ["Funil Completo de Vendas", "Tráfego direto sem inteligência", "Funil 360º com Landing Pages e Automação"],
                  ["Planejamento do Zero", "Assume que o cliente sabe o que precisa", "Direcionamento Completo desde o Zero"],
                  ["Produção de Conteúdo", "Não direciona", "Direcionamento Estratégico de Conteúdo"],
                  ["Foco no Resultado", "Métricas de vaidade (cliques/CPC)", "Foco total em ROI e Lucratividade"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 group/row hover:bg-white/[0.02] transition-colors">
                    <td className="p-8 md:p-10 font-bold text-gray-300 group-hover/row:text-white transition-colors">{row[0]}</td>
                    <td className="p-8 md:p-10 text-center text-red-500/40 italic font-light">{row[1]}</td>
                    <td className="p-8 md:p-10 text-center font-black text-white border-l border-white/5 bg-yellow-500/[0.01] group-hover/row:bg-yellow-500/[0.03] transition-all">
                      <span className="inline-flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        {row[2]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Comparison;

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Stats from '@/components/Stats';
import BackgroundElements from '@/components/BackgroundElements';
import Methodology from '@/components/Methodology';
import Comparison from '@/components/Comparison';
import Cases from '@/components/Cases';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundElements />
      <Navbar />
      <main className="overflow-x-hidden relative z-10">
        <Hero />
        <PainPoints />
        <Stats />
        <Methodology />
        <Comparison />
        <Cases />

        {/* FAQ Section */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">FAQ</h2>
              <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Dúvidas Frequentes</h3>
            </div>

            <div className="space-y-4">
              {[
                { q: "Qual a diferença entre contratar você e uma agência de marketing?", a: "Na agência, você é mais um cliente na fila — com atendimento por tickets, analistas rotativos e templates replicados. Comigo, seu projeto é exclusivo: atendimento direto, reports semanais sob medida, decisões tomadas em conjunto e um estrategista fixo dedicado ao seu negócio." },
                { q: "Quais tipos de negócio você atende?", a: "Atendo times comerciais que precisam de mais leads qualificados, infoprodutores que desejam escalar vendas de cursos e mentorias, marcas que querem aumentar visibilidade e e-commerces que buscam mais vendas. Cada estratégia é personalizada para o seu modelo de negócio." },
                { q: "Você também cria landing pages e sites?", a: "Sim! Desenvolvo landing pages de alta conversão, sites profissionais e até aplicativos com inteligência artificial. Tudo integrado à estratégia de mídia paga para maximizar seus resultados." },
                { q: "Nunca anunciei, vocês me ajudam do zero?", a: "Com certeza. Faço o planejamento estratégico completo: desde a definição de público, criação de campanhas, desenvolvimento de landing pages até o acompanhamento diário. Você não precisa saber nada de tráfego pago." },
                { q: "Já anuncio mas quero escalar, como funciona?", a: "Começo com um diagnóstico completo das suas campanhas atuais, identifico gargalos e oportunidades, e implemento estratégias de escala controlada para multiplicar seus resultados sem desperdiçar investimento." },
                { q: "Em quanto tempo vejo resultados?", a: "Resultados iniciais aparecem nas primeiras semanas conforme as estratégias são validadas. A escala consistente acontece a partir do segundo mês, com otimizações contínuas baseadas em dados reais." },
              ].map((item, idx) => (
                <details key={idx} className="glass-card rounded-2xl group transition-all border-white/5">
                  <summary className="p-6 cursor-pointer flex items-center justify-between font-bold text-lg md:text-xl select-none list-none">
                    {item.q}
                    <span className="text-yellow-500 group-open:rotate-180 transition-transform text-sm">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-4 text-sm md:text-base">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="#contato" className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
                Ainda tem dúvidas? Fale comigo <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

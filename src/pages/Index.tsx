import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import BackgroundElements from '@/components/BackgroundElements';
import GoogleExpertise from '@/components/GoogleExpertise';
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
        <Stats />
        <GoogleExpertise />
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
                { q: "Como funciona o seu trabalho?", a: "Eu simplifico o digital para você. Analiso o seu negócio e implemento as estratégias de tráfego que trazem resultados reais, sem complicações." },
                { q: "Em quanto tempo vejo resultados?", a: "Resultados consistentes começam a aparecer conforme as estratégias são validadas, geralmente nas primeiras semanas de acompanhamento." },
                { q: "O digital é para o meu negócio?", a: "Sim! Com a estratégia certa e simplificada, qualquer negócio pode crescer e encontrar o seu público ideal na internet." },
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

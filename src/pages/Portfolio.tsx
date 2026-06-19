import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { allCases, sectors, getFaviconUrl, type Sector } from '@/data/cases';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const sectorColors: Record<string, string> = {
  Automotivo: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Educação: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Saúde & Estética': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'E-commerce': 'bg-green-500/10 text-green-400 border-green-500/20',
  Indústria: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Serviços: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Turismo: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

const ClientInitial: React.FC<{ name: string }> = ({ name }) => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-500/10 to-yellow-500/5">
    <span className="text-2xl font-black text-yellow-500/60 playfair">
      {name.charAt(0)}
    </span>
  </div>
);

const Portfolio: React.FC = () => {
  const [activeSector, setActiveSector] = useState<Sector>('Todos');

  const filtered = activeSector === 'Todos'
    ? allCases
    : allCases.filter((c) => c.sector === activeSector);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors mb-12"
            >
              <ArrowLeft size={14} />
              Voltar ao início
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-yellow-500/50" />
              <span className="text-[9px] font-bold text-yellow-500 uppercase tracking-[0.4em]">
                Projetos Selecionados
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Portfólio de{' '}
              <span className="gold-gradient italic playfair font-medium">Cases</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl mb-12">
              Marcas reais. Estratégias sob medida. Resultados que aparecem no faturamento, não só no relatório.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal stagger={1}>
            <div className="flex flex-wrap gap-8 pb-12 border-b border-white/5">
              {[
                { value: '+170', label: 'Projetos Entregues' },
                { value: '+R$7M', label: 'em Mídia Gerida' },
                { value: '+800K', label: 'Leads Gerados' },
                { value: '17', label: 'Cases no Portfólio' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl font-black gold-gradient">{stat.value}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-8 sticky top-[76px] z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide py-4">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                  activeSector === sector
                    ? 'bg-yellow-500 text-black border-yellow-500'
                    : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {sector}
                {sector !== 'Todos' && (
                  <span className="ml-1.5 opacity-50">
                    {allCases.filter((c) => c.sector === sector).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((client, i) => (
              <ScrollReveal key={client.id} stagger={i % 3}>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card rounded-2xl p-6 flex flex-col gap-4 border border-white/[0.06] hover:border-yellow-500/20 transition-all duration-500 relative overflow-hidden hover:bg-white/[0.04] h-full"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-500/0 blur-[40px] pointer-events-none group-hover:bg-yellow-500/[0.06] transition-all duration-700" />

                  {/* Logo + Sector */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-16 h-16 rounded-xl border border-white/10 overflow-hidden bg-white/5 flex-shrink-0 group-hover:border-yellow-500/30 transition-all duration-500">
                      {client.logo ? (
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                        />
                      ) : (
                        <img
                          src={getFaviconUrl(client.url)}
                          alt={`${client.name} logo`}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-xl font-black text-yellow-500/60" style="font-family:serif">${client.name.charAt(0)}</span></div>`;
                            }
                          }}
                        />
                      )}
                    </div>

                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        sectorColors[client.sector] || 'bg-white/5 text-gray-400 border-white/10'
                      }`}
                    >
                      {client.sector}
                    </span>
                  </div>

                  {/* Name + Niche */}
                  <div>
                    <h3 className="text-base font-black text-white group-hover:text-yellow-400 transition-colors leading-tight mb-1">
                      {client.name}
                    </h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                      {client.niche}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed flex-1">
                    {client.desc}
                  </p>

                  {/* Result badge */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                    <span className="text-[10px] font-black text-yellow-500 uppercase tracking-wider">
                      {client.result}
                    </span>
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-1.5">
                    {client.services.map((service) => (
                      <span
                        key={service}
                        className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/5"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                    <span className="text-[9px] font-bold text-gray-600 uppercase tracking-wider">
                      Ver projeto
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-gray-600 group-hover:text-yellow-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-500">
              <p className="text-lg font-bold">Nenhum case neste setor ainda.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.4em] mb-4">
              Próximo da lista
            </p>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Seu negócio pode{' '}
              <span className="gold-gradient italic playfair font-medium">ser o próximo.</span>
            </h2>
            <p className="text-gray-400 mb-10">
              Diagnóstico gratuito. Sem enrolação. 5 minutos para saber se dá para crescer.
            </p>
            <a
              href="https://wa.me/5531992976990?text=Oi%20Samuel%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20um%20diagn%C3%B3stico%20gratuito"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-sm hover:scale-[1.03] transition-all shadow-xl"
            >
              Solicitar Diagnóstico Gratuito
              <ExternalLink size={16} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

export default Portfolio;

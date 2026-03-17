import React from 'react';
import { ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { trackCaseClick, trackCtaClick } from '@/lib/gtm';
import gladysLogo from '@/assets/gladys-logo.jpg';
import becharaLogo from '@/assets/bechara-logo.png';
import fasLogo from '@/assets/fas-logo.png';
import ciatripLogo from '@/assets/ciatrip-logo.jpg';
import ituranLogo from '@/assets/ituran-logo.jpg';
import valemLogo from '@/assets/valem-logo.png';

const Cases: React.FC = () => {
  const allClients = [
    { name: "Móveis Bechara", niche: "Indústria Moveleira", desc: "Líder na fabricação de móveis modernos com design funcional e distribuição nacional.", result: "Escala Nacional", url: "https://moveisbechara.com.br/", customLogo: becharaLogo },
    { name: "FAS Iluminação", niche: "Design & Luxo", desc: "Curadoria de iluminação técnica e decorativa internacional de alto padrão.", result: "Posicionamento Premium", url: "https://fasiluminacao.com.br/", customLogo: fasLogo },
    { name: "Grupo AL7 Motos", niche: "Setor Automotivo", desc: "Concessionária Dafra com venda de motos 0km, seminovas, peças, consórcio e seguros.", result: "Autoridade Local", url: "https://grupoal7.com.br/" },
    { name: "Inovando na sua Obra", niche: "Educação & Arquitetura", desc: "Mentoria para arquitetas e designers de interiores sobre gerenciamento lucrativo de obras.", result: "Captação Qualificada", url: "https://www.inovandonasuaobra.com.br/" },
    { name: "Lu Guerra", niche: "Iluminação & Arquitetura", desc: "Arquiteta especialista em lighting design com projetos autorais e cursos para profissionais da iluminação.", result: "Branding de Luxo", url: "https://www.luguerra.com/" },
    { name: "VALEM Administradora de Benefícios", niche: "Gestão de Saúde", desc: "Administradora líder em benefícios e planos de saúde corporativos.", result: "Lead B2B", url: "https://www.valem.com.br/", customLogo: valemLogo },
    { name: "HDI Brasil", niche: "Padrões de TI", desc: "Autoridade global em suporte técnico e melhores práticas de tecnologia.", result: "Educação Corporativa", url: "https://hdibrasil.com.br/" },
    { name: "Instituto Embelleze", niche: "Educação Profissional", desc: "Maior rede mundial de cursos profissionalizantes na área da beleza.", result: "Conversão em Massa", url: "https://institutoembelleze.com/" },
    { name: "Colina dos Ipês", niche: "Planos Funerários", desc: "Planos funerários com atendimento humanizado e clube de benefícios com mais de 500 parceiros.", result: "Acolhimento Digital", url: "https://www.colinadosipes.com.br/" },
    { name: "Ituran Seguros", niche: "Segurança Veicular", desc: "Líder em rastreamento veicular, seguros e proteção automotiva com tecnologia de ponta.", result: "Performance Global", url: "https://ituran.com.br/", customLogo: ituranLogo },
    { name: "São José Confecções", niche: "Produtos Promocionais", desc: "Fábrica de bonés, viseiras, camisetas e ecobags personalizados para ações promocionais e eventos.", result: "Venda Direta", url: "https://www.saojoseconfeccoes.com.br/" },
    { name: "Ciatrip", niche: "Turismo Premium", desc: "Agência especializada em roteiros personalizados e experiências internacionais.", result: "Ticket Médio Alto", url: "https://ciatrip.com/", customLogo: ciatripLogo },
    { name: "Paula Cromão", niche: "Estética & Saúde", desc: "Fisioterapeuta especializada em pós-operatório de cirurgia plástica, com atendimento domiciliar personalizado.", result: "Agenda Lotada", url: "https://www.paulacromao.com.br/" },
    { name: "Gladys Religiosos", niche: "Varejo Especializado", desc: "Principal e-commerce de artigos sacros e religiosos do mercado brasileiro.", result: "E-commerce Escalonável", url: "https://www.gladysreligiosos.com.br/", customLogo: gladysLogo },
  ];

  const getFaviconUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch {
      return '';
    }
  };

  return (
    <section id="projetos" className="py-20 md:py-32 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-[60%] h-[60%] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="h-px w-8 md:w-12 bg-yellow-500/50"></div>
                <span className="text-[9px] md:text-xs font-bold text-yellow-500 uppercase tracking-[0.4em]">Marcas que Confiam</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black mb-6 text-white">
                Estratégias que <br className="hidden md:block" />
                <span className="gold-gradient italic playfair font-medium">Geram Resultados.</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg font-light max-w-2xl">
                Conheça alguns dos projetos que utilizam minhas estratégias simplificadas para crescer diariamente no digital.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal stagger={1} className="w-full md:w-auto">
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-2 w-full">
              <div className="flex items-center gap-3 text-yellow-500 font-bold px-5 md:px-8 py-3 md:py-5 rounded-2xl md:rounded-[2rem] border border-white/5 text-[9px] md:text-[10px] uppercase tracking-widest shadow-2xl">
                <ShieldCheck size={18} className="shrink-0" />
                <span className="whitespace-nowrap">Projetos Gerenciados</span>
              </div>
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest animate-pulse">Arraste para explorar</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative group/carousel cursor-grab active:cursor-grabbing" role="region" aria-roledescription="carousel" aria-label="Projetos e Clientes">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-60 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-60 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none"></div>

        <div className="flex animate-marquee gap-4 md:gap-6 py-8 md:py-10 px-4 md:px-6 touch-pan-x">
          {[...allClients, ...allClients].map((client, idx) => (
            <a
              key={idx}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCaseClick(client.name, client.url)}
              className="min-w-[200px] md:min-w-[240px] group/card"
              role="group"
              aria-roledescription="slide"
              aria-label={`${client.name}`}
            >
              <div className="rounded-xl p-4 md:p-5 h-full flex flex-col gap-3 md:gap-4 border border-white/[0.06] hover:border-yellow-500/20 transition-all duration-500 relative overflow-hidden bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04]">
                {/* Hover glow */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-500/0 blur-[30px] pointer-events-none group-hover/card:bg-yellow-500/[0.08] transition-all duration-700"></div>

                {/* Logo + Name + Niche */}
                <div className="flex flex-col gap-2">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl border border-yellow-500/20 overflow-hidden bg-white/10 flex-shrink-0 p-3 group-hover/card:border-yellow-500/40 group-hover/card:bg-white/15 transition-all duration-500">
                    <img
                      src={client.customLogo || getFaviconUrl(client.url)}
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white group-hover/card:text-yellow-500 transition-colors leading-tight tracking-tight">
                    {client.name}
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-[3px] h-[3px] rounded-full bg-yellow-500/40"></span>
                    <span className="text-[8px] text-gray-500 uppercase tracking-widest font-medium">{client.niche}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[11px] md:text-xs text-gray-400 font-light leading-relaxed line-clamp-2">{client.desc}</p>

                {/* Result + Arrow */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/[0.04]">
                  <span className="text-[8px] md:text-[9px] font-bold text-yellow-500/60 uppercase tracking-wider">Ver Projeto</span>
                  <ArrowUpRight size={12} className="text-white/20 group-hover/card:text-yellow-500 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Authority Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-24">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 py-8 md:py-10 border-t border-white/5 opacity-50 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="text-4xl md:text-7xl font-black text-white/10 playfair">14</span>
              <div className="text-left">
                <p className="text-[10px] md:text-xs font-black text-yellow-500 uppercase tracking-widest">Parcerias de Sucesso</p>
                <p className="text-gray-500 text-[10px] md:text-sm">Modelos de negócio validados por escala real.</p>
              </div>
            </div>

            <a href="#contato" onClick={() => trackCtaClick('diagnostico_semelhante', 'cases_section')} className="flex items-center gap-2 group cursor-pointer">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Solicitar Diagnóstico Semelhante</span>
              <ArrowRight size={14} className="text-yellow-500 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-200px * 14 - 14 * 16px)); }
        }
        @media (min-width: 768px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-240px * 14 - 14 * 24px)); }
          }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 45s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee:focus-within {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
};

export default Cases;

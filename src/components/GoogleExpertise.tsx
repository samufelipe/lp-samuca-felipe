import React from 'react';
import { Shield, CheckCircle2, Award, Target, Layout, Search, Handshake, Users, Megaphone, Code, Compass, TrendingUp, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useWhatsAppDialog } from '@/hooks/useWhatsAppDialog';

const GoogleExpertise: React.FC = () => {
  const { openWhatsApp } = useWhatsAppDialog();
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <div className="inline-flex items-center gap-3 mb-8">
            <Award size={16} className="text-yellow-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-yellow-500/90">Autoridade Validada</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
            Soluções Completas <br className="hidden md:block" /><span className="gold-gradient">para Escalar seu Negócio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light">
            Da geração de leads para times comerciais à escala de infoprodutos, passando por desenvolvimento de Landing Pages, sites e aplicativos com IA.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          {/* Main Certification Card */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-yellow-500/20 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative h-full glass-card rounded-[3rem] p-10 md:p-14 flex flex-col items-center justify-center text-center border-white/5 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent"></div>

              <div className="bg-white p-10 rounded-[2.5rem] mb-10 shadow-[0_20px_50px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-700">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg"
                  alt="Google Ads Logo"
                  className="w-48 md:w-56 h-auto"
                />
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-gray-900 font-black text-2xl tracking-tighter italic">Certified</p>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-4">Estrategista Certificado</h3>
              <p className="text-gray-500 text-sm md:text-base font-medium">
                Selo que garante domínio das ferramentas e estratégias que geram resultados reais em mídia paga.
              </p>
            </div>
          </div>

          {/* Side Cards Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="glass-card rounded-[2.5rem] p-10 border-white/5 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-10">
                <div className="text-yellow-500">
                  <Handshake size={24} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-[0.2em] text-white">Como eu ajudo</h4>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Leads para Times Comerciais", desc: "Campanhas de mídia paga para lotar o pipeline de vendas — ideal para clínicas, consultórios, escritórios e equipes comerciais.", icon: <Users size={20} /> },
                  { title: "Escala de Infoprodutos", desc: "Estratégias para vender mais cursos, mentorias e programas digitais com previsibilidade.", icon: <TrendingUp size={20} /> },
                  { title: "Visibilidade de Marcas", desc: "Branding e awareness estratégico com Google Ads e Meta Ads para posicionar sua marca.", icon: <Megaphone size={20} /> },
                  { title: "Landing Pages & Sites", desc: "Desenvolvimento de páginas de alta conversão e sites profissionais que vendem.", icon: <Code size={20} /> },
                  { title: "Do Zero ao Primeiro Anúncio", desc: "Planejamento estratégico completo para quem nunca anunciou e precisa de direcionamento.", icon: <Compass size={20} /> },
                  { title: "Escala para quem já Anuncia", desc: "Otimização e direcionamento para multiplicar resultados de campanhas existentes.", icon: <Target size={20} /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group/item">
                    <div className="text-yellow-500/50 group-hover/item:text-yellow-500 transition-colors shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold mb-1 group-hover/item:text-yellow-500 transition-colors">{item.title}</h5>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[2.5rem] p-10 border-white/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-yellow-500">
                  <Shield size={24} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-[0.2em] text-white">Garantias do Selo</h4>
              </div>

              <div className="grid md:grid-cols-2 gap-y-6 gap-x-10">
                {[
                  "Processos validados pelo Google",
                  "Beta testing de ferramentas",
                  "Auditoria de boas práticas",
                  "Suporte direto de engenharia",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 group/check">
                    <CheckCircle2 size={14} className="text-yellow-500" />
                    <span className="text-sm text-gray-300 font-semibold tracking-wide">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <ScrollReveal>
          <div className="relative mt-16 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative glass-card rounded-3xl p-8 md:p-12 text-center border-white/5">
              <h4 className="text-xl md:text-3xl font-black mb-3 tracking-tight">
                Estratégia Certificada + Tecnologia + <span className="gold-gradient">5 Anos de Mercado Digital</span>
              </h4>
              <p className="text-gray-500 text-sm md:text-lg font-medium max-w-2xl mx-auto mb-8">
                A união entre certificação Google, desenvolvimento de soluções digitais com IA e a experiência de quem já geriu +R$ 7 milhões em mídia paga.
              </p>
              <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm hover:translate-y-[-2px] transition-all shadow-xl active:scale-95">
                Solicitar Diagnóstico Gratuito <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GoogleExpertise;

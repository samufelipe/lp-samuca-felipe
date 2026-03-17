import React from 'react';
import { ChevronRight, BookOpen, Target, TrendingUp, Monitor, BarChart3, Rocket, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackgroundElements from '@/components/BackgroundElements';
import ScrollReveal from '@/components/ScrollReveal';

const Aprender: React.FC = () => {
  const modules = [
    { title: "Google Ads Completo", desc: "Do zero ao avançado: Rede de Pesquisa, Display, YouTube e Performance Max.", icon: <Monitor size={24} /> },
    { title: "Meta Ads Estratégico", desc: "Facebook e Instagram Ads com estruturas que convertem e escalam.", icon: <Target size={24} /> },
    { title: "Criação de Funis", desc: "Monte funis de vendas completos que transformam visitantes em clientes.", icon: <TrendingUp size={24} /> },
    { title: "Landing Pages que Vendem", desc: "Aprenda a criar páginas de alta conversão mesmo sem saber programar.", icon: <BookOpen size={24} /> },
    { title: "Análise de Dados", desc: "Leia métricas como um profissional e tome decisões baseadas em números reais.", icon: <BarChart3 size={24} /> },
    { title: "Estratégias de Escala", desc: "Técnicas avançadas para multiplicar resultados sem multiplicar custos.", icon: <Rocket size={24} /> },
  ];

  const audiences = [
    { title: "Empresários", desc: "Que querem anunciar o próprio negócio e parar de depender de terceiros para gerar demanda.", icon: <Users size={24} /> },
    { title: "Profissionais Iniciantes", desc: "Que desejam aprender tráfego pago do zero e construir uma carreira no digital.", icon: <BookOpen size={24} /> },
    { title: "Infoprodutores", desc: "Que querem dominar suas campanhas e escalar vendas de cursos, mentorias e programas.", icon: <TrendingUp size={24} /> },
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundElements />
      <Navbar />
      <main className="overflow-x-hidden relative z-10">
        {/* Hero */}
        <section className="relative pt-32 md:pt-44 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-yellow-500/5 md:bg-yellow-500/8 blur-[180px] rounded-full pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-yellow-600/3 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 glass-card rounded-full">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500">Formação em Tráfego Pago</span>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 text-white leading-[1.05]">
                Aprenda Tráfego Pago e <br className="hidden md:block" />
                <span className="gold-gradient italic playfair font-medium">Estratégias Digitais</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal stagger={1}>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                Do zero ao avançado, com quem já geriu <strong className="text-white">+7 milhões em mídia paga</strong> e entregou <strong className="text-white">+170 projetos</strong>. Aprenda a anunciar o seu negócio ou construa uma carreira no tráfego pago.
              </p>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#quero-aprender" className="group relative w-full sm:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                  <button className="relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all shadow-2xl active:scale-95">
                    Quero Começar a Aprender <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a href="/#contato" className="text-gray-400 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors flex items-center gap-2">
                  Prefiro contratar o serviço <ArrowRight size={16} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Para Quem é */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-[10px] md:text-xs font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">Para Quem é</h2>
              <h3 className="text-3xl md:text-5xl font-black mb-6">Essa formação é para você que...</h3>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {audiences.map((item, i) => (
                <ScrollReveal key={i} stagger={i + 1}>
                  <div className="glass-card p-8 md:p-10 rounded-[2.5rem] group h-full text-center">
                    <div className="mb-6 text-yellow-500 group-hover:scale-110 transition-transform inline-flex">
                      {item.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-black mb-4">{item.title}</h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* O que Vai Aprender */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-[10px] md:text-xs font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">Conteúdo</h2>
              <h3 className="text-3xl md:text-5xl font-black mb-6">O que Você Vai Aprender</h3>
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light">
                Conteúdo prático e direto ao ponto. Sem enrolação, sem teoria excessiva. Apenas o que funciona na prática.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod, i) => (
                <ScrollReveal key={i} stagger={i + 1}>
                  <div className="glass-card p-8 rounded-[2rem] group h-full">
                    <div className="mb-5 text-yellow-500 group-hover:scale-110 transition-transform">
                      {mod.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-yellow-500 transition-colors">{mod.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{mod.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-[10px] md:text-xs font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">Diferenciais</h2>
              <h3 className="text-3xl md:text-5xl font-black mb-6">Aprenda com quem <span className="gold-gradient italic playfair">faz na prática</span></h3>
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light">
                Não é teoria de quem só leu livros. É experiência real de quem gerencia campanhas todos os dias.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
              {[
                { number: "+170", label: "Projetos Entregues", icon: <Award size={20} /> },
                { number: "+7M", label: "em Mídia Gerida", icon: <TrendingUp size={20} /> },
                { number: "Google", label: "Partner Certificado", icon: <CheckCircle2 size={20} /> },
              ].map((item, i) => (
                <ScrollReveal key={i} stagger={i + 1}>
                  <div className="glass-card p-8 md:p-10 rounded-[2rem] text-center group">
                    <div className="text-yellow-500 mb-4 inline-flex group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-3xl md:text-4xl font-black mb-2">{item.number}</h4>
                    <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">FAQ</h2>
              <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Dúvidas sobre a Formação</h3>
            </ScrollReveal>

            <div className="space-y-4">
              {[
                { q: "Preciso ter experiência com tráfego pago?", a: "Não! O conteúdo começa do absoluto zero e vai até estratégias avançadas. Você aprende no seu ritmo, com suporte direto." },
                { q: "É indicado para quem já anuncia?", a: "Sim! Se você já anuncia mas sente que pode melhorar seus resultados, vai encontrar estratégias de escala e otimização que aplicamos em +170 projetos." },
                { q: "Terei acesso a suporte?", a: "Sim. Você terá acesso direto para tirar dúvidas e receber orientações durante toda a sua jornada de aprendizado." },
                { q: "Quanto tempo tenho de acesso?", a: "Os detalhes de acesso serão informados na página de inscrição. O conteúdo é atualizado constantemente com as últimas novidades do mercado." },
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

        {/* CTA Final */}
        <section id="quero-aprender" className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 via-yellow-500/30 to-yellow-600/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-80 transition-all duration-700"></div>
                <div className="relative glass-card rounded-[3rem] p-12 md:p-20 text-center border-yellow-500/10">
                  <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500">Vagas Limitadas</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                    Pronto para dominar <br className="hidden md:block" />
                    <span className="gold-gradient italic playfair">o tráfego pago?</span>
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto font-light">
                    Garanta sua vaga e comece a aprender com quem já geriu +7 milhões em mídia paga e entregou resultados para +170 projetos.
                  </p>
                  <a href="#" className="group/btn relative inline-flex">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl blur opacity-40 group-hover/btn:opacity-70 transition duration-500"></div>
                    <button className="relative px-12 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-2xl font-black text-lg flex items-center gap-3 hover:translate-y-[-2px] transition-all shadow-2xl active:scale-95">
                      Garanta Sua Vaga <ChevronRight size={22} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </a>
                  <p className="text-[10px] text-gray-500 mt-6 uppercase tracking-widest font-bold">Em breve • Lista de espera aberta</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Aprender;

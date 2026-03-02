import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-[10px] md:text-sm font-bold text-yellow-500 uppercase tracking-[0.2em] mb-4">Vamos Escalar?</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-[1.1] text-balance tracking-tight">Vamos simplificar o seu digital?</h3>
            <p className="text-gray-400 text-base md:text-lg mb-10 md:mb-12 leading-relaxed">
              Estou pronto para ajudar o seu negócio a crescer com as estratégias certas e acessíveis.
            </p>

            <div className="space-y-4 md:space-y-6 max-w-sm mx-auto lg:mx-0">
              {[
                { label: 'E-mail', val: 'samucafe01@gmail.com', icon: <Mail />, href: 'mailto:samucafe01@gmail.com' },
                { label: 'WhatsApp', val: '31 99297-6990', icon: <Phone />, href: 'https://wa.me/5531992976990' },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-left group hover:translate-x-2 transition-transform">
                  <div className="shrink-0 text-yellow-500 group-hover:text-white transition-colors">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 22 })}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[9px] md:text-xs text-gray-500 font-bold uppercase">{item.label}</p>
                    <p className="text-sm md:text-lg font-medium truncate group-hover:text-yellow-500 transition-colors">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border-white/10 w-full min-h-[550px] flex flex-col justify-center relative overflow-hidden bg-white/[0.02]">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/5 blur-[80px] pointer-events-none"></div>

            {!isSubmitted ? (
              <>
                <div className="mb-10">
                  <h4 className="text-2xl md:text-3xl font-black mb-3 flex items-center gap-4">
                    Solicitar Diagnóstico
                  </h4>
                  <p className="text-gray-500 text-sm md:text-base font-medium">Preencha os dados abaixo e entrarei em contato.</p>
                </div>

                <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-2.5">
                    <label className="text-[10px] md:text-xs font-black uppercase text-yellow-500/70 ml-1 tracking-widest">Nome Completo</label>
                    <div className="relative group">
                      <input required type="text" placeholder="Ex: João Silva" className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-sm md:text-base focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-600" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-focus-within:w-[90%] transition-all duration-500 rounded-full opacity-50"></div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2.5">
                      <label className="text-[10px] md:text-xs font-black uppercase text-yellow-500/70 ml-1 tracking-widest">E-mail Corporativo</label>
                      <div className="relative group">
                        <input required type="email" placeholder="email@empresa.com" className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-sm md:text-base focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-600" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-focus-within:w-[90%] transition-all duration-500 rounded-full opacity-50"></div>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <label className="text-[10px] md:text-xs font-black uppercase text-yellow-500/70 ml-1 tracking-widest">WhatsApp</label>
                      <div className="relative group">
                        <input required type="tel" placeholder="(31) 99297-6990" className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-sm md:text-base focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-600" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-focus-within:w-[90%] transition-all duration-500 rounded-full opacity-50"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-[10px] md:text-xs font-black uppercase text-yellow-500/70 ml-1 tracking-widest">Investimento Mensal</label>
                    <div className="relative group">
                      <select required className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-sm md:text-base focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.05] transition-all appearance-none text-white cursor-pointer">
                        <option value="" className="bg-zinc-900">Selecione uma faixa</option>
                        <option value="ate-5k" className="bg-zinc-900">Até R$ 5.000 /mês</option>
                        <option value="5k-15k" className="bg-zinc-900">R$ 5.000 a R$ 15.000 /mês</option>
                        <option value="acima-15k" className="bg-zinc-900">Acima de R$ 15.000 /mês</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-focus-within:text-yellow-500 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-focus-within:w-[90%] transition-all duration-500 rounded-full opacity-50"></div>
                    </div>
                  </div>

                  <button type="submit" className="w-full py-5 md:py-6 gold-bg text-black rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:scale-[1.02] transition-all shadow-2xl shadow-yellow-500/20 active:scale-95 mt-4 group/btn overflow-hidden relative">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Enviar Solicitação <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 gold-bg rounded-full flex items-center justify-center text-black mx-auto mb-8 shadow-2xl shadow-yellow-500/20">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">Solicitação Recebida!</h4>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto">
                  Obrigado pelo interesse. Entrarei em contato em breve para agendarmos o seu diagnóstico.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-yellow-500 font-bold text-sm uppercase tracking-widest hover:text-white transition-colors"
                >
                  Enviar outra solicitação
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useRef } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { trackFormStart, trackFormSubmit, trackFormFieldInteraction, trackWhatsAppClick, trackOutboundClick } from '@/lib/gtm';

const formatPhoneDisplay = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 2) return `+${digits}`;
  if (digits.length <= 4) return `+${digits.slice(0, 2)} ${digits.slice(2)}`;
  if (digits.length <= 9) return `+${digits.slice(0, 2)} (${digits.slice(2, 4)}) ${digits.slice(4)}`;
  return `+${digits.slice(0, 2)} (${digits.slice(2, 4)}) ${digits.slice(4, 9)}-${digits.slice(9, 13)}`;
};

const getWhatsAppNumber = (value: string): string => value.replace(/\D/g, '');

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState('+55 ');
  const [phoneError, setPhoneError] = useState('');
  const formStarted = useRef(false);

  const handleFieldFocus = (fieldName: string) => {
    if (!formStarted.current) {
      formStarted.current = true;
      trackFormStart('diagnostico');
    }
    trackFormFieldInteraction('diagnostico', fieldName);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    if (raw.length <= 15) {
      setPhone(formatPhoneDisplay(raw));
      setPhoneError('');
    }
  };

  const validatePhone = (): boolean => {
    const digits = getWhatsAppNumber(phone);
    if (digits.length < 10 || digits.length > 15) {
      setPhoneError('Insira entre 10 e 15 dígitos (com código do país)');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone()) return;
    const form = e.target as HTMLFormElement;
    const select = form.querySelector('select') as HTMLSelectElement;
    trackFormSubmit('diagnostico', select?.value);
    const nameInput = form.querySelector('input[type="text"]') as HTMLInputElement;
    const message = `Olá Samuel! Meu nome é ${nameInput?.value || ''}. Vim pelo site e gostaria de solicitar um diagnóstico de mídia paga para o meu negócio.`;
    window.location.href = `https://wa.me/5531992976990?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contato" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-[10px] md:text-sm font-bold text-yellow-500 uppercase tracking-[0.2em] mb-4">Diagnóstico Gratuito</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-[1.1] text-balance tracking-tight">Solicitar Diagnóstico <br className="hidden md:block" /><span className="gold-gradient">de Mídia Paga</span></h3>
            <p className="text-gray-400 text-base md:text-lg mb-10 md:mb-12 leading-relaxed">
              <strong className="text-white">Cada dia com a estratégia errada é dinheiro desperdiçado.</strong> Descubra em 5 minutos se sua operação de mídia paga está no caminho certo. Análise gratuita e sem compromisso.
            </p>

            <div className="space-y-4 md:space-y-6 max-w-sm mx-auto lg:mx-0">
              {[
                { label: 'E-mail', val: 'samucafe01@gmail.com', icon: <Mail />, href: 'mailto:samucafe01@gmail.com' },
                { label: 'WhatsApp', val: '31 99297-6990', icon: <Phone />, href: 'https://wa.me/5531992976990' },
              ].map((item, i) => (
                <a key={i} href={item.href} target={item.label === 'WhatsApp' ? '_self' : '_blank'} rel="noopener noreferrer" onClick={() => item.label === 'WhatsApp' ? trackWhatsAppClick('contact_section') : trackOutboundClick(item.href, item.label, 'contact_section')} className="flex items-center gap-4 text-left group hover:translate-x-2 transition-transform">
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
                  <p className="text-gray-500 text-sm md:text-base font-medium">Preencha os dados e receba uma proposta de parceria exclusiva para o seu negócio.</p>
                </div>

                <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-2.5">
                    <label className="text-[10px] md:text-xs font-black uppercase text-yellow-500/70 ml-1 tracking-widest">Nome Completo</label>
                    <div className="relative group">
                      <input required type="text" placeholder="Ex: João Silva" onFocus={() => handleFieldFocus('nome')} className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-sm md:text-base focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-600" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-focus-within:w-[90%] transition-all duration-500 rounded-full opacity-50"></div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2.5">
                      <label className="text-[10px] md:text-xs font-black uppercase text-yellow-500/70 ml-1 tracking-widest">E-mail Corporativo</label>
                      <div className="relative group">
                        <input required type="email" placeholder="email@empresa.com" onFocus={() => handleFieldFocus('email')} className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-sm md:text-base focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-600" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-focus-within:w-[90%] transition-all duration-500 rounded-full opacity-50"></div>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <label className="text-[10px] md:text-xs font-black uppercase text-yellow-500/70 ml-1 tracking-widest">WhatsApp (com DDI)</label>
                      <div className="relative group">
                        <input required type="tel" placeholder="+55 (31) 99297-6990" value={phone} onChange={handlePhoneChange} onFocus={() => handleFieldFocus('whatsapp')} className={`w-full bg-white/[0.03] border ${phoneError ? 'border-red-500/50' : 'border-white/5'} rounded-xl md:rounded-2xl p-4 md:p-5 text-sm md:text-base focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-gray-600`} />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-focus-within:w-[90%] transition-all duration-500 rounded-full opacity-50"></div>
                        {phoneError && <p className="text-red-400 text-xs mt-1.5 ml-1">{phoneError}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-[10px] md:text-xs font-black uppercase text-yellow-500/70 ml-1 tracking-widest">Investimento Mensal</label>
                    <div className="relative group">
                      <select required onFocus={() => handleFieldFocus('investimento')} className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-sm md:text-base focus:outline-none focus:border-yellow-500/50 focus:bg-white/[0.05] transition-all appearance-none text-white cursor-pointer">
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

                  <button type="submit" className="w-full py-3 md:py-3.5 gold-bg text-black rounded-xl font-bold text-xs md:text-sm hover:scale-[1.02] transition-all shadow-xl shadow-yellow-500/20 active:scale-95 mt-4 group/btn overflow-hidden relative">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Solicitar Diagnóstico Gratuito <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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
                  Obrigado pelo interesse. Entrarei em contato em breve para agendarmos o seu diagnóstico de mídia paga.
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

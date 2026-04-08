import React, { useState } from 'react';
import { trackWhatsAppClick } from '@/lib/gtm';
import { useWhatsAppDialog } from '@/hooks/useWhatsAppDialog';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const investmentOptions = [
  'Até R$ 3.000/mês',
  'R$ 3.000 a R$ 10.000/mês',
  'R$ 10.000 a R$ 30.000/mês',
  'Acima de R$ 30.000/mês',
  'Ainda não sei',
];

const segmentOptions = [
  'Infoproduto (curso, mentoria, programa)',
  'Clínica / Consultório de Estética',
  'Empresa com Time Comercial',
  'E-commerce',
  'Outro',
];

const WhatsAppButton: React.FC = () => {
  const { isOpen, openWhatsApp, closeWhatsApp } = useWhatsAppDialog();
  const [name, setName] = useState('');
  const [segment, setSegment] = useState('');
  const [investment, setInvestment] = useState('');
  const [nameError, setNameError] = useState('');
  const [segmentError, setSegmentError] = useState('');
  const [investmentError, setInvestmentError] = useState('');

  const phoneNumber = '5531992976990';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    let valid = true;

    if (trimmedName.length < 3) {
      setNameError('Digite seu nome completo');
      valid = false;
    } else {
      setNameError('');
    }

    if (!segment) {
      setSegmentError('Selecione seu segmento');
      valid = false;
    } else {
      setSegmentError('');
    }

    if (!investment) {
      setInvestmentError('Selecione uma faixa de investimento');
      valid = false;
    } else {
      setInvestmentError('');
    }

    if (!valid) return;

    const message = `Olá Samuel! Meu nome é ${trimmedName}, vim através do seu site.\nMeu segmento: ${segment}.\nMeu investimento mensal previsto é de ${investment}.\nGostaria de solicitar um diagnóstico estratégico para o meu negócio.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    trackWhatsAppClick('floating_button_qualified');
    window.location.href = url;
  };

  return (
    <>
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-ping"></span>

        <div className="relative bg-[#25D366] p-3 md:p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_15px_30px_rgba(37,211,102,0.6)] group-active:scale-90">
          <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.02L0 24l6.148-1.613a11.771 11.771 0 005.9 1.583h.005c6.635 0 12.05-5.414 12.05-12.05a11.778 11.778 0 00-3.541-8.52z" />
          </svg>
        </div>

        <div className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-xl pointer-events-none hidden md:block">
          Falar com Samuel agora
        </div>
      </button>

      <Dialog open={isOpen} onOpenChange={(open) => open ? openWhatsApp() : closeWhatsApp()}>
        <DialogContent className="bg-[#0a0a0a] border-white/10 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">
              Antes de falar comigo...
            </DialogTitle>
            <DialogDescription className="text-white/60">
              Preencha os campos abaixo para que eu possa te atender melhor.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 mt-2">
            <div className="space-y-2">
              <label htmlFor="wp-name" className="text-sm font-medium text-white/80">
                Nome Completo
              </label>
              <Input
                id="wp-name"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => { setName(e.target.value); setNameError(''); }}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#25D366]/50"
                maxLength={100}
              />
              {nameError && <p className="text-red-400 text-xs">{nameError}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="wp-segment" className="text-sm font-medium text-white/80">
                Qual seu segmento?
              </label>
              <Select value={segment} onValueChange={(v) => { setSegment(v); setSegmentError(''); }}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-[#25D366]/50 [&>span]:text-white/30 [&[data-state=open]>span]:text-white data-[placeholder]:text-white/30">
                  <SelectValue placeholder="Selecione seu segmento" />
                </SelectTrigger>
                <SelectContent className="bg-[#141414] border-white/10">
                  {segmentOptions.map((opt) => (
                    <SelectItem
                      key={opt}
                      value={opt}
                      className="text-white/80 focus:bg-white/10 focus:text-white"
                    >
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {segmentError && <p className="text-red-400 text-xs">{segmentError}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="wp-investment" className="text-sm font-medium text-white/80">
                Investimento Mensal para o Projeto
              </label>
              <Select value={investment} onValueChange={(v) => { setInvestment(v); setInvestmentError(''); }}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-[#25D366]/50 [&>span]:text-white/30 [&[data-state=open]>span]:text-white data-[placeholder]:text-white/30">
                  <SelectValue placeholder="Selecione uma faixa" />
                </SelectTrigger>
                <SelectContent className="bg-[#141414] border-white/10">
                  {investmentOptions.map((opt) => (
                    <SelectItem
                      key={opt}
                      value={opt}
                      className="text-white/80 focus:bg-white/10 focus:text-white"
                    >
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {investmentError && <p className="text-red-400 text-xs">{investmentError}</p>}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Falar com Samuel agora
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.02L0 24l6.148-1.613a11.771 11.771 0 005.9 1.583h.005c6.635 0 12.05-5.414 12.05-12.05a11.778 11.778 0 00-3.541-8.52z" />
              </svg>
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppButton;

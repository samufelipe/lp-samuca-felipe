

## Pop-up de Qualificação no Botão Flutuante do WhatsApp

### O que muda

Ao clicar no botão flutuante do WhatsApp, em vez de redirecionar direto, abre um pop-up (Dialog) com dois campos:
1. **Nome Completo** (obrigatório)
2. **Investimento Mensal para o Projeto** (select com faixas de valor)

Após preencher e clicar "Continuar para o WhatsApp", o lead é redirecionado na aba atual (`_self`) com uma mensagem personalizada incluindo nome e faixa de investimento.

### Faixas de investimento sugeridas

- Até R$ 3.000/mês
- R$ 3.000 a R$ 10.000/mês
- R$ 10.000 a R$ 30.000/mês
- Acima de R$ 30.000/mês
- Ainda não sei

### Mensagem personalizada no WhatsApp

```
Olá Samuel! Meu nome é {nome}, vim através do seu site.
Meu investimento mensal previsto é de {faixa}.
Gostaria de solicitar um diagnóstico estratégico para o meu negócio.
```

### Detalhes técnicos

**Arquivo**: `src/components/WhatsAppButton.tsx`

- Converter o `<a>` direto em um `<button>` que abre um `Dialog` (do shadcn/ui)
- Dentro do Dialog: título "Antes de falar comigo..." + dois campos (input de nome + select de investimento)
- Validação: ambos obrigatórios, nome com mínimo 3 caracteres
- Botão de submit estilizado em verde WhatsApp: "Falar com Samuel agora →"
- No submit: `window.location.href` para o WhatsApp com a mensagem personalizada, tracking via `trackWhatsAppClick`
- O botão flutuante mantém visual idêntico (ping, hover, tooltip)
- O Dialog segue o tema escuro da LP para manter consistência visual


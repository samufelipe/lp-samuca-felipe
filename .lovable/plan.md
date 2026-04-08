

## Unificar CTAs com Pop-up WhatsApp e Remover Formulário de Diagnóstico

### O que muda

1. **Remover a seção de formulário de diagnóstico** (Contact.tsx) da página
2. **Todos os CTAs da LP passam a abrir o pop-up de qualificação do WhatsApp** (mesmo formulário do botão flutuante)
3. **Cor de todos os CTAs muda para verde WhatsApp** (`#25D366`)

### CTAs afetados (7 no total)

| Componente | CTA atual | Ação |
|---|---|---|
| Hero.tsx | "Solicitar Diagnóstico Gratuito" (amarelo) | Verde + abre pop-up WA |
| PainPoints.tsx | "Descubra como →" (texto amarelo) | Verde + abre pop-up WA |
| GoogleExpertise.tsx | "Solicitar Diagnóstico Gratuito" (amarelo) | Verde + abre pop-up WA |
| Methodology.tsx | "Aplicar ao Seu Negócio" (texto c/ borda) | Verde + abre pop-up WA |
| Comparison.tsx | "Quero um Estrategista Dedicado" (amarelo) | Verde + abre pop-up WA |
| Cases.tsx | "Solicitar Diagnóstico Semelhante" (texto) | Verde + abre pop-up WA |
| Index.tsx (FAQ) | "Ainda tem dúvidas? Fale comigo →" | Verde + abre pop-up WA |

### Detalhes técnicos

**1. Extrair lógica do pop-up para um contexto compartilhado**

Criar um `WhatsAppContext` (ou hook `useWhatsAppDialog`) que expõe uma função `openWhatsApp()`. Isso permite que qualquer CTA na página abra o mesmo Dialog sem duplicar código.

- Arquivo novo: `src/hooks/useWhatsAppDialog.tsx` -- contexto com estado do Dialog
- O `WhatsAppButton.tsx` passa a consumir esse contexto (mantém o botão flutuante + o Dialog centralizado)

**2. Converter CTAs de `<a href="#contato">` para `<button onClick={openWhatsApp}>`**

Cada CTA deixa de ser um link âncora e passa a chamar `openWhatsApp()` do contexto.

**3. Atualizar cores dos CTAs**

- Botões sólidos: `bg-gradient-to-r from-[#25D366] to-[#20bd5a]` com `text-white`
- Links de texto: `text-[#25D366]` com hover para branco

**4. Remover Contact.tsx**

- Deletar `src/components/Contact.tsx`
- Remover import e `<Contact />` de `src/pages/Index.tsx`
- Remover a seção `id="contato"` (não será mais necessária como âncora)


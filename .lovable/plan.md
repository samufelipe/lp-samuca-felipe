

## Plano: Ampliar Soluções + Nova Comunicação + Página /aprender

### Resumo

Ampliar o posicionamento do Samuel para cobrir **todas** as soluções oferecidas, atualizar a comunicação da LP principal para gerar mais autoridade, e criar a página `/aprender` com design coerente e comunicação persuasiva.

---

### 1. Hero.tsx — Nova comunicação ampliada + fix mobile glow

- Reduzir glow no mobile: `bg-yellow-500/5 md:bg-yellow-500/10`
- Novo headline: **"Mais Demanda. Mais Vendas. Mais Visibilidade."** + gold gradient: *"Mídia Paga de Verdade."*
- Nova descrição: "Estratégias de tráfego pago para lotar a agenda do seu time comercial, escalar infoprodutos e posicionar marcas. Desenvolvimento de Landing Pages, sites e aplicativos com IA. +7 milhões geridos."
- CTA: "Solicitar Diagnóstico Gratuito"
- Adicionar badges: Google Partner, Meta Expert, **Landing Pages & Sites**, **IA & Tecnologia**

### 2. Stats.tsx — Dados mais impactantes

- Headline: "Resultados que Falam por Si"
- Descrição focada em geração de demanda comercial e vendas de infoprodutos
- Manter os mesmos números

### 3. GoogleExpertise.tsx — Ampliar soluções

- Reformular "Como eu ajudo" para incluir 6 items em grid 2 colunas:
  1. **Geração de Leads para Times Comerciais** — Campanhas de mídia paga para lotar o pipeline de vendas
  2. **Escala de Infoprodutos** — Estratégias para vender cursos, mentorias e programas digitais
  3. **Visibilidade de Marcas** — Branding e awareness com Google e Meta Ads
  4. **Landing Pages & Sites** — Desenvolvimento de páginas de alta conversão
  5. **Planejamento Estratégico do Zero** — Para quem nunca anunciou e precisa de direcionamento completo
  6. **Escala para quem já Anuncia** — Otimização e direcionamento para multiplicar resultados existentes
- Banner inferior: "Estratégia Certificada + Tecnologia + 4 Anos de Campo"

### 4. Methodology.tsx — Passos mais específicos

- Reformular os 4 passos:
  1. **Diagnóstico de Demanda** — Entendemos seu mercado, concorrência e oportunidades de geração de leads
  2. **Estrutura de Campanhas & Funil** — Criamos campanhas, landing pages e funis otimizados para conversão
  3. **Escala Controlada** — Aumentamos investimento com inteligência para maximizar ROI
  4. **Otimização Contínua & Dados** — Relatórios claros, ajustes diários e foco em lucratividade

### 5. Comparison.tsx — Tabela atualizada

- Adicionar novas linhas:
  - "Desenvolvimento de LP/Site" — Comum: "Não oferece" / Samuel: "Landing Pages e Sites de Alta Conversão"
  - "Planejamento do Zero" — Comum: "Assume que o cliente sabe o que precisa" / Samuel: "Direcionamento Completo desde o Zero"
  - "Produção de Conteúdo" — Comum: "Não direciona" / Samuel: "Direcionamento Estratégico de Conteúdo"

### 6. Contact.tsx — Nova copy

- Headline: "Solicitar Diagnóstico de Mídia Paga"
- Descrição: "Descubra como gerar mais demanda para seu time comercial, escalar suas vendas de infoprodutos ou posicionar sua marca no digital."
- Corrigir o redirecionamento do WhatsApp para usar o número do Samuel (fixo `5531992976990`), não o número que o lead digitou

### 7. FAQ (Index.tsx) — Perguntas mais específicas

- "Quais tipos de negócio você atende?" — Times comerciais, infoprodutores, marcas, e-commerces
- "Você também cria landing pages e sites?" — Sim, desenvolvimento completo com foco em conversão
- "Nunca anunciei, vocês me ajudam do zero?" — Sim, planejamento estratégico completo
- "Já anuncio mas quero escalar, como funciona?" — Diagnóstico + otimização + escala controlada
- "Em quanto tempo vejo resultados?" — Primeiras semanas com estratégias validadas

### 8. Footer.tsx — Atualizar

- Descrição: "Estrategista de Mídia Paga especializado em geração de demanda comercial, escala de infoprodutos e desenvolvimento de soluções digitais."
- Adicionar link "Aprender" nos links do footer

### 9. Navbar.tsx — Adicionar link /aprender

- Novo item: "Aprender" apontando para `/aprender`

### 10. Nova página: src/pages/Aprender.tsx

Página completa com o mesmo design system (fundo #050505, gold, glass-cards, ScrollReveal):

- **Hero**: "Aprenda Tráfego Pago e Estratégias Digitais" — subtítulo: "Do zero ao avançado, com quem já geriu +7 milhões em mídia paga." CTA: "Quero Começar a Aprender"
- **Para Quem é**: 3 cards — Empresários que querem anunciar o próprio negócio, Profissionais que querem iniciar no tráfego pago, Infoprodutores que querem dominar suas campanhas
- **O que Você Vai Aprender**: 6 items em grid — Google Ads, Meta Ads, Criação de Funis, Landing Pages, Análise de Dados, Estratégias de Escala
- **Diferenciais**: "Aprenda com quem faz na prática" — Cards com provas (170+ projetos, 7M+ geridos, Google Partner)
- **CTA Final**: "Garanta Sua Vaga" — com link placeholder para área de membros (a definir)
- **FAQ específico** para alunos

### 11. App.tsx — Adicionar rota

- Importar `Aprender` e adicionar `<Route path="/aprender" element={<Aprender />} />`

---

### Arquivos

| Arquivo | Ação |
|---------|------|
| `src/components/Hero.tsx` | Editar — fix glow + nova copy |
| `src/components/Stats.tsx` | Editar — nova comunicação |
| `src/components/GoogleExpertise.tsx` | Editar — ampliar soluções |
| `src/components/Methodology.tsx` | Editar — passos específicos |
| `src/components/Comparison.tsx` | Editar — novas linhas |
| `src/components/Contact.tsx` | Editar — nova copy + fix redirect |
| `src/components/Footer.tsx` | Editar — nova descrição + link |
| `src/components/Navbar.tsx` | Editar — link Aprender |
| `src/pages/Index.tsx` | Editar — FAQ atualizado |
| `src/pages/Aprender.tsx` | **Criar** — página de educação |
| `src/App.tsx` | Editar — rota /aprender |


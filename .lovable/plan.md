

## Plano Completo: Otimização da LP para Google Ads + SEO + Filtragem de Leads

Organizado por prioridade de impacto na campanha.

---

### 1. Nova seção "Para Quem É / Para Quem NÃO É" (filtro de leads)

Criar componente `TargetAudience.tsx` posicionado logo após PainPoints (antes de Stats). Duas colunas:

**Para Quem É (verde):**
- Infoprodutores que querem escalar cursos, mentorias e programas digitais
- Clínicas de estética e saúde que precisam lotar a agenda
- Empresas com times comerciais que precisam de leads qualificados
- Quem está cansado de agências genéricas e quer parceria real
- Quem investe a partir de R$ 3.000/mês em mídia paga

**Para Quem NÃO É (vermelho):**
- Quem busca serviço barato e genérico
- Quem quer resultados sem investir em mídia
- Quem não tem produto/serviço validado
- Quem procura "fórmula mágica" sem estratégia

Isso filtra curiosos diretamente no conteúdo.

---

### 2. Badges de nicho no Hero

Adicionar abaixo do subtítulo do Hero, antes do CTA, três badges visuais:

`Infoprodutos` | `Clínicas & Estética` | `Times Comerciais`

Estilo: chips com ícones (Rocket, Heart, Briefcase), fundo glass, texto pequeno. Isso sinaliza imediatamente para quem a LP é.

---

### 3. SEO: Meta tags e Title otimizados para os 3 nichos

**index.html:**
- Title: `Gestor de Tráfego Pago para Infoprodutos, Clínicas e Times Comerciais | Samuel Felipe`
- Description: `Estrategista de mídia paga certificado Google Partner. Especialista em escalar infoprodutos, lotar agendas de clínicas de estética e gerar leads para times comerciais. +R$ 7 milhões geridos. Diagnóstico gratuito.`
- Keywords: adicionar termos como `tráfego pago para infoprodutores`, `google ads para clínicas de estética`, `geração de leads para times comerciais`, `gestor de tráfego para mentoria`

Atualizar og:title, og:description, twitter:title e twitter:description com o mesmo conteúdo.

---

### 4. Dados estruturados JSON-LD

Adicionar no `index.html` dois blocos:

**ProfessionalService:**
- name, description com nichos específicos
- areaServed: Brasil
- serviceType: ["Gestão de Tráfego Pago", "Google Ads para Infoprodutores", "Meta Ads para Clínicas", "Geração de Leads B2B"]
- url, telephone

**FAQPage:**
- Marcar as perguntas do FAQ com schema estruturado para aparecer nos resultados do Google

---

### 5. FAQ com perguntas específicas por nicho

Atualizar o array de FAQs em `Index.tsx` adicionando 3 perguntas segmentadas:

- "Trabalho com infoproduto (curso/mentoria), como vocês ajudam?" → resposta sobre escala, funis, Meta Ads
- "Tenho uma clínica de estética, como gero mais agendamentos?" → resposta sobre Google Ads local, landing pages, qualificação
- "Preciso de leads para meu time comercial, qual a abordagem?" → resposta sobre campanhas B2B, formulários qualificados, integração CRM

---

### 6. Ajuste no subtítulo do Hero para mencionar nichos

Alterar o subtítulo para incluir menção direta aos 3 públicos:

Desktop: "Cansou de pagar caro e não ter resultado? Especializado em **infoprodutores**, **clínicas de estética** e **times comerciais** que precisam de leads reais. Projeto exclusivo, atendimento direto e decisões em conjunto."

Mobile: versão condensada mantendo os 3 nichos.

---

### 7. Formulário de qualificação: campo de segmento

Adicionar no pop-up do WhatsApp (`WhatsAppButton.tsx`) um terceiro campo **select** entre nome e investimento:

**"Qual seu segmento?"** com opções:
- Infoproduto (curso, mentoria, programa)
- Clínica / Consultório de Estética
- Empresa com Time Comercial
- E-commerce
- Outro

Incluir o segmento na mensagem do WhatsApp para pré-qualificação.

---

### Detalhes técnicos

| Prioridade | Ação | Arquivos |
|---|---|---|
| 1 | Criar seção "Para Quem É / NÃO É" | Novo: `TargetAudience.tsx`, editar `Index.tsx` |
| 2 | Badges de nicho no Hero | `Hero.tsx` |
| 3 | Meta tags e title otimizados | `index.html` |
| 4 | JSON-LD (ProfessionalService + FAQPage) | `index.html` |
| 5 | FAQ segmentado por nicho | `Index.tsx` |
| 6 | Subtítulo do Hero com nichos | `Hero.tsx` |
| 7 | Campo de segmento no pop-up WA | `WhatsAppButton.tsx` |


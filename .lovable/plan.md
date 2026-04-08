

## Otimização da Copy para Campanha Google Ads — Posicionamento Anti-Agência

### Diagnóstico da Copy Atual

A LP atual comunica bem autoridade e resultados, mas fala de forma **genérica** sobre os serviços. O diferencial que você quer vender — **proximidade, exclusividade, atendimento personalizado vs. agência genérica** — quase não aparece. As empresas que vão clicar no anúncio precisam sentir isso logo nos primeiros 5 segundos.

Gaps identificados:
- **Hero**: fala de "times comerciais, infoprodutos, saúde" — dispersa demais para quem busca sair de uma agência
- **Nenhuma menção explícita** a: projeto exclusivo, atendimento próximo, reports ágeis, decisões em conjunto
- **Comparison**: compara com "Gestor Comum", mas o inimigo real para essa campanha é "Agência Genérica"
- **FAQ**: não tem a pergunta óbvia "Qual a diferença entre você e uma agência?"

---

### Mudanças Propostas

#### 1. Hero — Reescrever headline e subtítulo (Hero.tsx)

**Headline atual**: "Mais Demanda. Mais Vendas."
**Proposta**: "Seu Negócio Merece Mais que uma Agência Genérica."

**Subtítulo atual**: lista serviços variados
**Proposta**: Algo como "Estratégia exclusiva de mídia paga com acompanhamento próximo, reports ágeis e decisões em conjunto. Sem filas de atendimento, sem templates, sem rotatividade de analistas. +7 milhões geridos em mídia paga."

Isso fala diretamente com a dor de quem está cansado de agência.

#### 2. Comparison — Reposicionar contra "Agência Genérica" (Comparison.tsx)

- Trocar título de "Gestão de Tráfego vs. Parceria Estratégica" para algo como "Agência Genérica vs. Estrategista Dedicado"
- Trocar coluna "Gestor Comum" para "Agência Genérica"
- Adicionar itens de comparação focados no atendimento:
  - "Atendimento": Fila de tickets / Contato direto e ágil
  - "Relatórios": Mensais e genéricos / Semanais e sob medida
  - "Decisões": Unilaterais / Em conjunto com você
  - "Projeto": Template replicado / 100% exclusivo
  - "Analista": Rotatividade constante / Estrategista fixo e dedicado

#### 3. Methodology — Adicionar pilar de proximidade (Methodology.tsx)

Ajustar a descrição de um dos steps (ou adicionar um) para reforçar:
- Reports semanais claros
- Reuniões de alinhamento
- Decisões tomadas junto com o cliente

#### 4. FAQ — Adicionar pergunta estratégica (Index.tsx)

Adicionar no início do FAQ:
- **"Qual a diferença entre contratar você e uma agência de marketing?"**
- Resposta focada em: projeto exclusivo, sem rotatividade, contato direto, reports ágeis, decisões em conjunto.

#### 5. Contact — Ajustar copy do formulário (Contact.tsx)

Trocar subtítulo do formulário de "análise personalizada da sua estratégia" para algo que reforce exclusividade, como "Receba uma proposta de parceria exclusiva para o seu negócio."

#### 6. CTA do Hero — Ajustar micro-copy

Trocar "Agenda Limitada para Novos Projetos" para algo como "Atendimento limitado a poucos projetos simultâneos" — reforça exclusividade.

---

### Arquivos editados

| Arquivo | O que muda |
|---|---|
| `src/components/Hero.tsx` | Headline, subtítulo, micro-copy do CTA |
| `src/components/Comparison.tsx` | Título, coluna "Agência Genérica", novos itens de comparação |
| `src/components/Methodology.tsx` | Ajuste em um step para incluir proximidade |
| `src/pages/Index.tsx` | Nova pergunta no FAQ |
| `src/components/Contact.tsx` | Subtítulo do formulário |

### Resultado esperado

Visitante vindo do Google Ads lê a headline e pensa: "é exatamente isso que eu preciso — alguém dedicado, não mais uma agência". A Comparison reforça visualmente cada dor que ele já viveu. O FAQ responde a objeção final. O formulário fecha com exclusividade.


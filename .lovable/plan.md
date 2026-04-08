

## Aumentar Persuasão — Bater nas Dores de Quem Contrata Agência Genérica

### Diagnóstico

A LP já tem o posicionamento anti-agência, mas falta **agitar a dor** antes de apresentar a solução. Quem vem do Google Ads precisa se identificar nos primeiros segundos: "isso é exatamente o que eu passo". Hoje a LP vai direto para a solução sem antes validar o problema do visitante.

Gaps principais:
- **Hero**: subtítulo fala dos benefícios mas não menciona as dores (dinheiro jogado fora, falta de resultado, distância do analista)
- **Falta uma seção de "agitação de dor"** entre o Hero e os Stats — o visitante precisa sentir que você entende o que ele vive
- **Comparison**: lista diferenças mas não tem peso emocional — falta a sensação de "já passei por isso"
- **Contact**: não reforça urgência ou consequência de continuar com agência genérica
- **Stats**: fala de números mas não conecta com a dor de quem gastou muito e teve pouco retorno

---

### Mudanças Propostas

#### 1. Hero — Adicionar linha de dor no subtítulo (Hero.tsx)

Antes de falar dos benefícios, abrir com a dor:
- **Desktop**: "Cansou de pagar caro e não ter resultado? De ser só mais um número na carteira de uma agência? Aqui seu projeto é exclusivo..."
- **Mobile**: "Cansou de gastar sem resultado? Aqui é diferente."

Manter o restante do subtítulo como está.

#### 2. Nova seção "Dores" — entre Hero e Stats (novo componente PainPoints.tsx + Index.tsx)

Criar uma seção curta e impactante com 3-4 dores que o visitante se identifica:
- "Você investe rios de dinheiro e não sabe para onde vai"
- "Seu analista muda a cada 3 meses e você recomeça do zero"
- "Reports mensais genéricos que não dizem nada"
- "Decisões tomadas sem te consultar"

Visual: ícones em vermelho/cinza, texto direto, sem firulas. No final, uma frase de transição tipo "Existe um jeito diferente de fazer isso." com link para o formulário.

#### 3. Comparison — Adicionar peso emocional (Comparison.tsx)

Reforçar o subtítulo da seção com mais emoção:
- De: "Chega de ser mais um cliente na fila..."
- Para: "Você já sabe como é: atendimento por ticket, analista que nem sabe seu nome, reports que não dizem nada e dinheiro escorrendo pelo ralo. Compare com o que deveria ser."

#### 4. Contact — Adicionar linha de urgência (Contact.tsx)

No texto à esquerda do formulário, substituir o subtítulo genérico por algo que reforce a consequência:
- "Cada dia com a estratégia errada é dinheiro desperdiçado. Descubra em 5 minutos se sua operação de mídia paga está no caminho certo."

#### 5. Stats — Conectar com a dor (Stats.tsx)

Ajustar o subtítulo da seção de stats para fazer ponte com o problema:
- De: "Demanda gerada para times comerciais e vendas escaladas para infoprodutores"
- Para: "Enquanto agências genéricas entregam métricas de vaidade, esses são os resultados reais de quem tem um estrategista dedicado."

---

### Arquivos editados

| Arquivo | O que muda |
|---|---|
| `src/components/Hero.tsx` | Linha de dor antes dos benefícios no subtítulo |
| `src/components/PainPoints.tsx` | **Novo componente** — seção de agitação de dor com 4 itens |
| `src/pages/Index.tsx` | Inserir PainPoints entre Hero e Stats |
| `src/components/Comparison.tsx` | Subtítulo com mais peso emocional |
| `src/components/Contact.tsx` | Texto à esquerda com urgência e consequência |
| `src/components/Stats.tsx` | Subtítulo conectado à dor de agência genérica |

### Resultado esperado

O visitante chega, lê o Hero e pensa "é exatamente isso que eu passo". A seção de dores confirma ponto a ponto. Os Stats mostram o contraste com resultados reais. A Comparison dá o tapa final. O formulário fecha com urgência. Funil emocional completo: dor → agitação → solução → prova → ação.


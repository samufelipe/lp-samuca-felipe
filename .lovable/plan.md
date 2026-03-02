

## Plano: Imagem Hero limpa + Elementos dourados no background

### 1. Reestilizar a imagem do Hero

Atualmente a foto do Samuel esta dentro de um card com bordas arredondadas (`rounded-[3rem]`), borda branca, overlay escuro e um glass-card com citacao por cima. O objetivo e deixar a imagem "limpa", sem esse container de card.

**Mudancas em `src/components/Hero.tsx`:**
- Remover o container `rounded-[3rem] border border-white/10` que envolve a imagem
- Remover o glass-card com a citacao ("Mentalidade de Dono" / "Meu foco e tornar...")
- Remover o overlay gradient escuro sobre a imagem
- Manter a imagem com um fade suave na base (gradient de transparente para o fundo `#050505`) para integrar naturalmente com a secao
- Manter o efeito de grayscale com hover para colorido
- Aplicar um glow dourado sutil atras da imagem para dar destaque

### 2. Adicionar elementos dourados decorativos ao background da pagina

Criar um componente `BackgroundElements.tsx` com elementos minimalistas dourados distribuidos ao longo da pagina, posicionados com `position: fixed` ou `absolute` dentro de cada secao:

- **Linhas douradas finas**: Linhas diagonais ou horizontais com opacidade muito baixa (~3-5%), usando gradientes dourados
- **Circulos/orbs dourados com blur**: Similares aos que ja existem no Hero, mas distribuidos em pontos estrategicos entre secoes (Stats, Methodology, Contact)
- **Pontos dourados pequenos**: Dots decorativos com opacidade sutil (~5-8%) em posicoes fixas
- **Gradientes radiais dourados**: Manchas de luz dourada com blur alto espalhadas pela pagina

**Posicionamento estrategico:**
- Entre Stats e GoogleExpertise: orb dourado no canto direito
- Ao lado da Methodology: linha diagonal dourada sutil
- Atras da secao Contact: glow dourado central
- Pequenos dots decorativos entre secoes

**Estilo:** Tudo em opacidade muito baixa (3-10%), com `pointer-events: none`, usando as cores `#C5A059`, `#E2C284`. Minimalista e elegante, sem poluir visualmente.

### Arquivos modificados
- `src/components/Hero.tsx` -- remover card, limpar imagem, adicionar fade natural
- `src/components/BackgroundElements.tsx` -- novo componente com elementos decorativos dourados
- `src/pages/Index.tsx` -- importar e posicionar o BackgroundElements


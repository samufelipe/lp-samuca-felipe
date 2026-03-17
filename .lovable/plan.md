

## Plano: Redesign do Carrossel de Clientes

### Problema Atual
Os cards do carrossel estao com dimensoes exageradas (260-380px de largura x 360-480px de altura), com muitos elementos visuais (estrelas, icone Globe, badges grandes, botao "Ver Projeto" ocupando largura total). Isso deixa o layout pesado e pouco elegante.

### Novo Design: Cards Compactos e Minimalistas

**Dimensoes novas dos cards:**
- Mobile: `200px` de largura, altura automatica (~200px)
- Desktop: `240px` de largura, altura automatica (~220px)

**Estrutura do novo card:**
```text
+---------------------------+
|  [Logo]  28x28            |
|  Nome do Cliente           |
|  ·  Nicho                 |
|                            |
|  Descricao curta (2 lines) |
|                            |
|  Resultado  ->             |
+---------------------------+
```

**Elementos do card:**
1. **Logo do cliente** -- Imagem carregada via favicon do dominio do cliente (`https://www.google.com/s2/favicons?domain=URL&sz=64`), exibida em `28x28` com borda sutil dourada e `rounded-lg`
2. **Nome** -- Fonte bold, tamanho reduzido (`text-sm` / `text-base`), branco, sem uppercase
3. **Nicho** -- Tag inline discreta com dot dourado, texto `text-[8px]` em cinza
4. **Descricao** -- `text-xs`, cinza claro, `line-clamp-2`, font-light
5. **Resultado + link** -- Linha inferior com o resultado como badge sutil e seta de link para o site, tudo compacto

**Elementos removidos:**
- 5 estrelas (redundante)
- Icone Globe grande no canto
- Botao "Ver Projeto" de largura total (substituido por link discreto com seta)
- Padding excessivo (`p-8` vira `p-4`/`p-5`)
- Bordas arredondadas exageradas (`rounded-[2rem]` vira `rounded-xl`)

### Ajustes no Marquee
- Recalcular os `@keyframes marquee` com as novas larguras (200px mobile, 240px desktop)
- Reduzir o gap entre cards de `gap-6/10` para `gap-4/6`
- Ajustar velocidade da animacao para manter ritmo agradavel

### Hover do Card
- Borda muda para `border-yellow-500/20`
- Glow dourado sutil no background
- Nome fica dourado
- Seta do link faz `translate-x`

### Arquivo Modificado
- `src/components/Cases.tsx` -- Redesign completo do card, adicao de logos via favicon, recalculo do marquee


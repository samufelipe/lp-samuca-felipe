

## Remover bordas da foto do Hero para integração natural

A foto atualmente tem bordas definidas porque o container tem tamanho fixo com `overflow-hidden`, criando um corte retangular visível. Para fazer a imagem "desaparecer" no fundo da LP, vou aplicar gradientes de fade em todas as direções (não só embaixo e à esquerda como hoje).

### Mudanças em `src/components/Hero.tsx`

1. **Remover `overflow-hidden`** do container da imagem e usar CSS mask para fazer as bordas da foto desaparecerem gradualmente no fundo escuro.

2. **Aplicar `mask-image` com gradiente radial** na div da imagem — isso cria um fade suave em todas as bordas, eliminando qualquer corte visível:
   ```
   style={{ maskImage: 'radial-gradient(ellipse 70% 70% at center, black 50%, transparent 100%)' }}
   ```

3. **Reforçar os overlays existentes** (`bg-gradient-to-t` e `bg-gradient-to-r`) para garantir que as bordas inferior e lateral se dissolvam no fundo da página.

4. **Manter os filtros de brilho/contraste** atuais inalterados.

### Resultado
A foto vai parecer "emergir" do fundo escuro da LP sem nenhuma borda ou corte visível, com transição suave e natural em todas as direções.


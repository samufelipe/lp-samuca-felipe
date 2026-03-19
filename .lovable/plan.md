
Objetivo: corrigir a foto da Hero para ela ficar mais nítida, sólida e com contraste natural, sem aparência “lavada” ou translúcida.

1. Diagnóstico do problema no código atual
- A imagem está com filtros muito agressivos em `src/components/Hero.tsx`: `grayscale`, `brightness-[0.48]`, `md:brightness-[0.58]`, `lg:brightness-[0.66]`, além de `contrast` e `saturate`.
- Existem 2 overlays por cima da foto (`bg-gradient-to-t` e `bg-gradient-to-r`) que escurecem e “apagam” detalhes.
- Há também um glow dourado atrás da imagem que pode reduzir a leitura do contorno, principalmente em telas menores.
- O efeito de `ScrollReveal` aplica `opacity` e `blur` na entrada; se a sensação de transparência persistir visualmente, vou garantir que a foto final não dependa desse efeito para parecer visível.

2. Ajuste que vou aplicar
- Remover o `grayscale` da foto.
- Trocar os filtros por um tratamento muito mais leve, priorizando nitidez:
  - brilho mais próximo do natural
  - contraste moderado
  - saturação discreta
- Reduzir bastante a força dos overlays escuros para eles apenas integrarem a imagem ao fundo, sem “cobrir” o rosto.
- Reduzir o glow dourado atrás da imagem para evitar sensação de imagem estourada.
- Manter hover discreto no desktop, sem alterar drasticamente brilho ou cor.

3. Resultado esperado
- Foto com aparência mais real e definida.
- Melhor leitura do rosto no mobile e desktop.
- Menos sensação de transparência/fade.
- Visual premium, mas sem sacrificar naturalidade.

4. Arquivo a ajustar
- `src/components/Hero.tsx`

5. Direção técnica exata
```text
Atual:
- grayscale
- brightness muito baixo e compensado por overlays
- 2 camadas fortes por cima da imagem
- glow ainda influenciando a leitura

Novo:
- sem grayscale
- brilho/controlado, sem escurecer demais
- contraste leve para nitidez
- overlays mais sutis
- glow reduzido
```

6. Validação depois da implementação
- Conferir no mobile se o rosto continua legível sem parecer “apagado”.
- Conferir no desktop se a imagem não volta a ficar clara demais.
- Ajustar finamente apenas um destes pontos, se necessário: brilho, contraste ou overlay; não todos ao mesmo tempo, para evitar novo efeito lavado.

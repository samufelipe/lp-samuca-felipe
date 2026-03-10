

## Diagnóstico: Rota /aprender retorna erro

### O que está acontecendo

O código está 100% correto:
- `App.tsx` linha 44: `<Route path="/aprender" element={<Aprender />} />`
- `Aprender.tsx` existe e exporta o componente
- `Navbar.tsx` usa `<Link to="/aprender">` corretamente

O problema é de **configuração de SPA no servidor**. Quando o usuário acessa `seusite.com/aprender` diretamente (ou recarrega a página nessa rota), o servidor tenta encontrar um arquivo `/aprender/index.html` que não existe. Ele precisa ser instruído a servir `index.html` para todas as rotas, deixando o React Router resolver internamente.

### Solução

Criar um arquivo `public/_redirects` (para Netlify/Lovable hosting) que instrui o servidor a redirecionar todas as rotas para `index.html`:

```
/*    /index.html   200
```

Isso garante que qualquer URL acessada diretamente (como `/aprender`) carregue a SPA e o React Router cuide do roteamento.

### Arquivo

| Arquivo | Acao |
|---------|------|
| `public/_redirects` | **Criar** — regra de SPA fallback |


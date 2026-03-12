

## Plano: Tags de Nicho Monocromáticas nos Cards

### Design da Tag

Tag minimalista que respeita a paleta existente (preto + dourado + cinza):

- Dot dourado sutil (`bg-yellow-500/40`) de 3px
- Texto em cinza discreto (`text-gray-500`, `text-[8px]`, uppercase, tracking wide)
- Sem background, sem borda, sem cor extra — apenas texto + dot inline

```text
  Nome do Cliente
  · Estética & Saúde        ← cinza discreto, dot dourado
```

Zero cores novas. Mesma linguagem visual dos labels já existentes na seção.

### Arquivo

| Arquivo | Ação |
|---------|------|
| `src/components/Cases.tsx` | Inserir 3 linhas de JSX após o `<h4>` do nome do cliente (~linha 108) |


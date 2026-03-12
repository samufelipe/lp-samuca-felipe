

## Plano: Correção das Descrições dos Cards de Clientes

### Erros Encontrados (verificados nos sites reais)

| Cliente | Erro | Realidade do Site |
|---------|------|-------------------|
| **Lu Guerra** | ❌ "Joalheria Autoral" / "semijoias e acessórios" | Arquiteta e Urbanista especialista em **iluminação**. Projetos de lighting design e cursos para profissionais. Nada de joias. |
| **Paula Cromão** | ❌ "Saúde Mental" / "Psicologia clínica" | **Fisioterapeuta/esteticista** especializada em pós-operatório de cirurgia plástica, fibrose, celulite. Atendimento domiciliar. Nada de psicologia. |
| **São José Confecções** | ❌ "moda masculina e produção têxtil em larga escala" | Fábrica de **produtos promocionais personalizados**: bonés, viseiras, chapéus, ecobags, camisetas. Não é moda masculina. |
| **Inovando na sua Obra** | ❌ "Engenharia e soluções inovadoras para reformas" | É uma **mentoria para arquitetas e designers de interiores** sobre gerenciamento de obras de interiores. Não é uma empresa de engenharia. |
| **Grupo AL7 Motos** | ⚠️ "Mais de 30 anos" não confirmado | Concessionária **Dafra**. Vende motos 0km, seminovas, peças, consórcio e seguros. O "30 anos" não aparece no site. |
| **Colina dos Ipês** | ⚠️ "Parque memorial" impreciso | Empresa de **planos funerários** com clube de benefícios (Clube Colina). Mais que um parque memorial. |
| **Ituran** | ⚠️ Parcialmente incompleto | Além de rastreamento, oferece **seguros e proteção veicular** com cotação online. |

### Cards OK (sem alteração necessária)
- Móveis Bechara ✅ (100+ anos de mercado moveleiro, confirmado)
- FAS Iluminação ✅ (marcas internacionais de iluminação de alto padrão)
- VALEM ✅ (administradora de planos de saúde)
- HDI Brasil ✅ (instituto de capacitação em gestão de TI)
- Instituto Embelleze ✅ (cursos profissionalizantes de beleza)
- Ciatrip ✅ (agência de viagens internacionais)
- Gladys Religiosos ✅ (site indisponível para validação, mas descrição coerente)

### Correções Propostas

```
Lu Guerra
  niche: "Iluminação & Arquitetura"
  desc: "Arquiteta especialista em lighting design com projetos autorais e cursos para profissionais da iluminação."

Paula Cromão
  niche: "Estética & Saúde"
  desc: "Fisioterapeuta especializada em pós-operatório de cirurgia plástica, com atendimento domiciliar personalizado."

São José Confecções
  niche: "Produtos Promocionais"
  desc: "Fábrica de bonés, viseiras, camisetas e ecobags personalizados para ações promocionais e eventos."

Inovando na sua Obra
  niche: "Educação & Arquitetura"
  desc: "Mentoria para arquitetas e designers de interiores sobre gerenciamento lucrativo de obras."

Grupo AL7 Motos
  niche: "Setor Automotivo"
  desc: "Concessionária Dafra com venda de motos 0km, seminovas, peças, consórcio e seguros."

Colina dos Ipês
  niche: "Planos Funerários"
  desc: "Planos funerários com atendimento humanizado e clube de benefícios com mais de 500 parceiros."

Ituran
  desc: "Líder em rastreamento veicular, seguros e proteção automotiva com tecnologia de ponta."
```

### Arquivo Modificado
| Arquivo | Acao |
|---------|------|
| `src/components/Cases.tsx` | Editar linhas 14-27 — corrigir descrições e nichos |


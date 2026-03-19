# Data Warehouse Financeiro

Estruturação de ambiente analítico corporativo para consolidação de dados financeiros, automação de processos e suporte à tomada de decisão executiva.

---

## 1. Contexto

Empresa com múltiplas fontes de dados financeiras:

- ERP corporativo
- Planilhas manuais descentralizadas
- Sistemas bancários
- Bases operacionais

Relatórios inconsistentes, divergência de indicadores e alto retrabalho na consolidação mensal.

---

## 2. Desafio

- Falta de integração entre sistemas
- Ausência de modelo dimensional estruturado
- Dependência de processos manuais
- Baixa rastreabilidade e governança
- Lentidão no fechamento gerencial

---

## 3. Solução Proposta

Desenvolvimento de arquitetura de Data Warehouse com pipeline automatizado e modelagem dimensional orientada a KPIs financeiros.

### Arquitetura

![Diagrama Arquitetural](/images/dw-architecture.png)

### Camadas

**1. Ingestão (Staging Layer)**
- Extração automatizada via Python
- Padronização de schemas e validação inicial

**2. Data Warehouse**
- Modelagem estrela (Fato & Dimensão)
- Estrutura orientada a métricas financeiras

**3. Camada Analítica**
- Views otimizadas
- Integração com Power BI
- Estrutura de KPIs: Receita, Margem, Fluxo de Caixa

---

## 4. Tecnologias Utilizadas

- Python
- PostgreSQL
- Power BI
- SQL
- Docker

---

## 5. Resultados e Impacto

- ↓ 60% no tempo de geração de relatórios
- ↑ Confiabilidade e padronização de indicadores
- Automação diária do pipeline
- Redução de riscos operacionais
- Maior agilidade na tomada de decisão gerencial

---

## 6. Lições Estratégicas

- Importância da modelagem dimensional para governança
- Necessidade de validações automatizadas
- Integração entre tecnologia e controladoria

---

## 7. Próximos Passos

- Implementação de camada de Data Quality
- Monitoramento automatizado de jobs
- Evolução para arquitetura incremental
# Pipeline de Desenvolvimento e Homologação — InteractiveCV

Repositório: `rafaelchampion/InteractiveCV` (gerenciado via `gh` CLI).
Hospedagem de Produção: **GitHub Pages** (`https://rafaelchampion.github.io/InteractiveCV/`).

Este documento estabelece o fluxo de trabalho padronizado para planejamento, implementação, testes e publicação no projeto.

---

## 1. Issues & Planejamento
- Toda entrega ou refatoração deve ter uma issue registrada no GitHub contendo:
  - **Contexto**: Motivação da mudança.
  - **Escopo**: O que será feito e o que não será feito.
  - **Critérios de Aceite**: Checklist claro para validação da entrega.
- **Status por Labels** (manter exatamente uma label de status ativa por issue):
  - `status: planejado` — Planejada e aguardando início.
  - `status: em andamento` — Em desenvolvimento ativo na branch de feature.
  - `status: em revisão` — Implementada e aguardando validação/testes manuais do dono.
  - Fechada (`closed`) — Aprovada e mesclada na `main`.

---

## 2. Branches & Desenvolvimento
- Todo desenvolvimento é realizado estritamente em branch de feature:
  `feature/issue-<ID>-<nome>` (ex.: `feature/issue-1-nextjs-tailwind-migration`).
- **Nunca commitar diretamente na branch `main`**.
- Ao iniciar a implementação:
  1. Alterar a label da issue para `status: em andamento`.
  2. Conforme o progresso, marcar os itens do checklist diretamente no corpo da issue.

---

## 3. Validação Local & Roteiro de Testes
- Ao concluir o código da feature:
  1. Executar os testes e build de produção local (`npm run build`).
  2. Alterar a label da issue para `status: em revisão`.
  3. Publicar na issue do GitHub e no chat a seção:
     ```markdown
     ### 🧪 Roteiro de Testes Manuais
     - [ ] Item 1...
     - [ ] Item 2...
     ```

---

## 4. Feedback do Dono & Ciclo de Decisão
- O dono testa as funcionalidades e relata no chat ou via comando de teste.
- O agente utiliza perguntas interativas no chat (`ask_question`) item por item para registrar o resultado do teste.
- O agente publica o laudo na issue do GitHub:
  - **Se 100% aprovado**: merge da branch da feature para a `main`, push para acionar o GitHub Actions de deploy, e fechamento da issue (`Closes #ID`).
  - **Se houver ressalvas ou falhas**: permanece na branch da feature, executa as correções necessárias e solicita novo teste.
  - **Se surgirem novos requisitos não planejados**: abre novas issues relacionadas para backlog.

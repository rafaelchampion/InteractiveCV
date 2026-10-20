# Rastreamento de Trabalho e Pipeline de Desenvolvimento — InteractiveCV

Repositório: `rafaelchampion/InteractiveCV` (use o `gh` CLI, já autenticado).
Referência completa: `docs/PIPELINE_DEV_TESTES.md`.

**Toda entrega, plano e implementação deste projeto deve seguir rigorosamente este fluxo:**

## 1. Issues & Planejamento
- Toda entrega tem uma issue com: Contexto, Escopo, Critérios de Aceite e dependências.
- **Status por labels** (mantenha exatamente uma por issue):
  `status: planejado` → `status: em andamento` → `status: em revisão` → fechada.

## 2. Branches & Desenvolvimento
- Todo desenvolvimento é feito em branch de feature: `feature/issue-<ID>-<nome>`.
- Nunca commitar diretamente na `main`.
- Ao iniciar a implementação: trocar label para `status: em andamento`.
- Conforme avançar, marcar os itens do checklist no corpo da issue.

## 3. Validação & Roteiro de Testes
- Ao concluir o código da feature:
  1. Validar compilação e build estático (`npm run build`).
  2. Trocar label para `status: em revisão`.
  3. Publicar na issue do GitHub (e no chat) a seção `### 🧪 Roteiro de Testes Manuais` com checklist interativo.

## 4. Feedback do Dono & Ciclo de Decisão
- O dono testa no navegador e fornece feedback.
- O agente utiliza perguntas interativas no chat (`ask_question`) item por item para registrar o resultado.
- O agente publica o laudo na issue do GitHub:
  - **Se 100% aprovado**: merge da branch da feature para `main` (produção), push (aciona GitHub Actions para GitHub Pages), e fechamento da issue (`Closes #ID`).
  - **Se houver ressalvas/falhas**: volta para a branch da feature, executa as correções e solicita novo teste.
  - **Se surgirem novos requisitos não planejados**: abre novas issues relacionadas.
